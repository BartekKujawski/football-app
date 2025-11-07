import { useGetInfoQuery } from '../../quieries/useGetInfoQuery';
import type { Player } from '../../types';
import { SinglePlayer } from './SinglePlayer';

export const PlayersList = () => {
    const { isLoading, error, data } = useGetInfoQuery<Player>('players');

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;

    return (
        <>
            <h1>Players: </h1>
            <ul>
                {data?.map((el) => (
                    <SinglePlayer key={el.id} player={el} />
                ))}
            </ul>
        </>
    );
};
