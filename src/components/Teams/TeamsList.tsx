import { useGetInfoQuery } from '../../quieries/useGetInfoQuery';
import type { Team } from '../../types';
import { SingleTeam } from './SingleTeam';
import { StyledUl } from '../../helpers';

export const TeamsList = () => {
    const { isLoading, error, data } = useGetInfoQuery<Team>('teams');

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;

    return (
        <>
            <StyledUl>
                {data?.map((el) => (
                    <SingleTeam key={el.id} team={el} />
                ))}
            </StyledUl>
        </>
    );
};
