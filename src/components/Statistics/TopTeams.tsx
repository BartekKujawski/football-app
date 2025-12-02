import { useMemo } from 'react';
import { useGetInfoQuery } from '../../quieries/useGetInfoQuery';
import type { Games, Team } from '../../types';
import styled from 'styled-components';

const StyledSection = styled.div`
    border-radius: 15px;
    padding: 25px;
    margin: 15px 50px;
    background-color: ${(props) => props.theme.colors.contentBackground};
    color: ${(props) => props.theme.colors.textPrimary};

    @media (max-width: 768px) {
        margin: 15px 20px;
        padding: 15px;
    }

    @media (max-width: 480px) {
        margin: 10px;
        padding: 10px;
    }
`;

const StyledSectionTitle = styled.h2`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
    border-bottom: 2px solid ${(props) => props.theme.colors.background};
    padding-bottom: 10px;

    @media (max-width: 768px) {
        font-size: 18px;
        margin-bottom: 15px;
    }

    @media (max-width: 480px) {
        font-size: 16px;
        margin-bottom: 10px;
    }
`;

const StyledTopTeamsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 20px;

    @media (max-width: 480px) {
        gap: 10px;
        margin-top: 15px;
    }
`;

const StyledTopTeamItem = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px;
    background-color: ${(props) => props.theme.colors.background};
    border-radius: 10px;

    @media (max-width: 768px) {
        gap: 12px;
        padding: 12px;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
        padding: 10px;
    }
`;

const StyledRank = styled.div`
    font-size: 24px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.primary};
    min-width: 40px;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 20px;
        min-width: 35px;
    }

    @media (max-width: 480px) {
        font-size: 18px;
        min-width: 30px;
    }
`;

const StyledTeamName = styled.div`
    font-size: 18px;
    font-weight: 500;
    flex: 1;

    @media (max-width: 768px) {
        font-size: 16px;
    }

    @media (max-width: 480px) {
        font-size: 14px;
        width: 100%;
    }
`;

const StyledGoalsCount = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.primary};

    @media (max-width: 768px) {
        font-size: 16px;
    }

    @media (max-width: 480px) {
        font-size: 14px;
        width: 100%;
        text-align: left;
    }
`;

const StyledNoData = styled.div`
    text-align: center;
    padding: 40px;
    color: ${(props) => props.theme.colors.textPrimary};
    opacity: 0.6;

    @media (max-width: 480px) {
        padding: 20px;
        font-size: 14px;
    }
`;

export const TopTeams = () => {
    const {
        isLoading: gamesLoading,
        error: gamesError,
        data: games,
    } = useGetInfoQuery<Games>('games');
    const {
        isLoading: teamsLoading,
        error: teamsError,
        data: teams,
    } = useGetInfoQuery<Team>('teams');

    const isLoading = gamesLoading || teamsLoading;
    const error = gamesError || teamsError;

    const teamGoals = useMemo(() => {
        if (!games || !teams) return [];

        const goalsMap: Record<string, number> = {};

        games.forEach((game) => {
            if (game.homeTeamId) {
                goalsMap[game.homeTeamId] =
                    (goalsMap[game.homeTeamId] || 0) + game.homeResult;
            }
            if (game.awayTeamId) {
                goalsMap[game.awayTeamId] =
                    (goalsMap[game.awayTeamId] || 0) + game.awayResult;
            }
        });

        return teams
            .map((team) => ({
                team,
                goals: goalsMap[team.id] || 0,
            }))
            .sort((a, b) => b.goals - a.goals)
            .slice(0, 3);
    }, [games, teams]);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;

    return (
        <StyledSection>
            <StyledSectionTitle>Top 3 teams by goals</StyledSectionTitle>
            {teamGoals.length > 0 ? (
                <StyledTopTeamsList>
                    {teamGoals.map((item, index) => (
                        <StyledTopTeamItem key={item.team.id}>
                            <StyledRank>{index + 1}</StyledRank>
                            <StyledTeamName>{item.team.name}</StyledTeamName>
                            <StyledGoalsCount>
                                {item.goals}{' '}
                                {item.goals === 1 ? 'goal' : 'goals'}
                            </StyledGoalsCount>
                        </StyledTopTeamItem>
                    ))}
                </StyledTopTeamsList>
            ) : (
                <StyledNoData>No data about teams</StyledNoData>
            )}
        </StyledSection>
    );
};
