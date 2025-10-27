import jsonServer from 'json-server';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.get('/games_full', (req, res) => {
    const db = router.db;
    const games = db.get('games').value() || [];
    const teams = db.get('teams').value() || [];

    const result = games.map((game) => ({
        ...game,
        homeTeam: teams.find((t) => t.id === game.homeTeamId) || null,
        awayTeam: teams.find((t) => t.id === game.awayTeamId) || null,
    }));

    res.json(result);
});

server.get('/games_full/:id', (req, res) => {
    const db = router.db;
    const id = req.params.id;

    const game = db.get('games').find({ id }).value();
    if (!game) return res.status(404).json({ error: 'Game not found' });

    const teams = db.get('teams').value() || [];

    const result = {
        ...game,
        homeTeam: teams.find((t) => t.id === game.homeTeamId) || null,
        awayTeam: teams.find((t) => t.id === game.awayTeamId) || null,
    };

    res.json(result);
});

server.get('/teams/:id', (req, res, next) => {
    const db = router.db;
    const id = req.params.id;
    const team = db.get('teams').find({ id }).value();

    if (!team) return res.status(404).json({ error: 'Team not found' });

    if (req.query._embed === 'games') {
        const games = db.get('games').value() || [];

        const relatedGames = games.filter(
            (g) => g.homeTeamId === id || g.awayTeamId === id
        );

        return res.json({ ...team, games: relatedGames });
    }

    res.json(team);
});

server.use(router);

server.listen(3000, () => {
    console.log('JSON Server running at http://localhost:3000');
});
