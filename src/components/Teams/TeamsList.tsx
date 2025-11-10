import { useGetInfoQuery } from '../../quieries/useGetInfoQuery';
import type { Team } from '../../types';
import { SingleTeam } from './SingleTeam';

export const TeamsList = () => {
    const { isLoading, error, data } = useGetInfoQuery<Team>('teams');

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;

    return (
        <>
            <ul>
                {data?.map((el) => (
                    <SingleTeam key={el.id} team={el} />
                ))}
            </ul>
        </>
    );
};
