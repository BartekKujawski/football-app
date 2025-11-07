export type Menu = 'players' | 'teams' | 'games' | 'statistics';

export type Player = {
    id: string;
    name: string;
    surname: string;
    number: number;
    teamId?: string;
};

export type Team = {
    id: string;
    name: string;
    year: number;
    localization: string;
};

export type Games = {
    id: string;
    date: string;
    competition: string;
    location: string;
    length: number;
    homeResult: number;
    awayResult: number;
    homeTeamId: string;
    awayTeamId: string;
};

export type PlayerDto = Omit<Player, 'id'>;
export type TeamDto = Omit<Team, 'id'>;
export type GamesDto = Omit<Games, 'id'>;

export type PlayerEditDto = {
    id: string;
    playerPayload: PlayerDto;
};

export type TeamEditDto = {
    id: string;
    teamPayload: TeamDto;
};

export type GamesEditDto = {
    id: string;
    teamPayload: GamesDto;
};

export type Collection = Player | Team | Games;
export type CollectionDto = PlayerDto | TeamDto | GamesDto;
export type CollectionEditDto = PlayerEditDto | TeamEditDto | GamesEditDto;
