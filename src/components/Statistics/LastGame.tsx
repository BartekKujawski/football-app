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

const StyledInfoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 12px;
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
        gap: 10px;
    }
`;

const StyledInfoItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const StyledInfoLabel = styled.span`
    font-size: 12px;
    color: ${(props) => props.theme.colors.textPrimary};
    opacity: 0.7;
`;

const StyledInfoValue = styled.span`
    font-size: 16px;
    font-weight: 500;

    @media (max-width: 768px) {
        font-size: 14px;
    }

    @media (max-width: 480px) {
        font-size: 13px;
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

export const LastGame = () => {
    const { isLoading: gamesLoading, data: games } =
        useGetInfoQuery<Games>('games');
    const { isLoading: teamsLoading, data: teams } =
        useGetInfoQuery<Team>('teams');

    const isLoading = gamesLoading || teamsLoading;

    const lastGame = useMemo(() => {
        if (!games || games.length === 0) return null;

        const sortedGames = [...games].sort((a, b) => {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();
            return dateB - dateA;
        });

        return sortedGames[0];
    }, [games]);

    const lastGameHomeTeam = useMemo(() => {
        if (!lastGame || !teams) return null;
        return teams.find((team) => team.id === lastGame.homeTeamId);
    }, [lastGame, teams]);

    const lastGameAwayTeam = useMemo(() => {
        if (!lastGame || !teams) return null;
        return teams.find((team) => team.id === lastGame.awayTeamId);
    }, [lastGame, teams]);

    if (isLoading) return <p>Loading...</p>;

    return (
        <StyledSection>
            <StyledSectionTitle>Last game</StyledSectionTitle>
            {lastGame && lastGameHomeTeam && lastGameAwayTeam ? (
                <StyledInfoGrid>
                    <StyledInfoItem>
                        <StyledInfoLabel>Teams played</StyledInfoLabel>
                        <StyledInfoValue>
                            {lastGameHomeTeam.name} vs {lastGameAwayTeam.name}
                        </StyledInfoValue>
                    </StyledInfoItem>
                    <StyledInfoItem>
                        <StyledInfoLabel>Date</StyledInfoLabel>
                        <StyledInfoValue>
                            {new Date(lastGame.date).toLocaleDateString(
                                'en-US',
                                {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric',
                                }
                            )}
                        </StyledInfoValue>
                    </StyledInfoItem>
                    <StyledInfoItem>
                        <StyledInfoLabel>Duration</StyledInfoLabel>
                        <StyledInfoValue>
                            {lastGame.length} minutes
                        </StyledInfoValue>
                    </StyledInfoItem>
                    <StyledInfoItem>
                        <StyledInfoLabel>Location</StyledInfoLabel>
                        <StyledInfoValue>{lastGame.location}</StyledInfoValue>
                    </StyledInfoItem>
                    <StyledInfoItem>
                        <StyledInfoLabel>Result</StyledInfoLabel>
                        <StyledInfoValue>
                            {lastGame.homeResult} - {lastGame.awayResult}
                        </StyledInfoValue>
                    </StyledInfoItem>
                </StyledInfoGrid>
            ) : (
                <StyledNoData>No games played</StyledNoData>
            )}
        </StyledSection>
    );
};
