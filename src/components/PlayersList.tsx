import { useGetInfoQuery } from '../quieries/useGetInfoQuery';
import { SinglePlayer } from './SinglePlayer';

const PlayersList = () => {
    const { isLoading, error, data } = useGetInfoQuery('players');

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

export { PlayersList };
