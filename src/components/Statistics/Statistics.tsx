import { LastGame } from './LastGame';
import { GamesChart } from './GamesChart';
import { TopTeams } from './TopTeams';

export const Statistics = () => {
    return (
        <>
            <LastGame />
            <GamesChart />
            <TopTeams />
        </>
    );
};
