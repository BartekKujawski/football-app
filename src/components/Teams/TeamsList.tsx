import { useGetInfoQuery } from '../../quieries/useGetInfoQuery';
import type { Team } from '../../types';
import { SingleTeam } from './SingleTeam';
import { StyledUl, StyledHeaderLi, StyledH2, StyledP } from '../../helpers';

export const TeamsList = () => {
    const { isLoading, error, data } = useGetInfoQuery<Team>('teams');

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;

    return (
        <>
            <StyledUl>
                <StyledHeaderLi>
                    <StyledH2>Name | Year</StyledH2>
                    <StyledP>Localization</StyledP>
                    <div></div>
                </StyledHeaderLi>
                {data?.map((el) => (
                    <SingleTeam key={el.id} team={el} />
                ))}
            </StyledUl>
        </>
    );
};
