import { useState } from 'react';
import styled from 'styled-components';
import type { Player, Team } from '../../types';
import { EditTeam } from './EditTeam';
import { DeleteTeamConfirmation } from './DeleteTeamConfirmation';
import {
    StyledLi,
    StyledH2,
    StyledButton,
    StyledNegButton,
    StyledP,
} from '../../helpers';
import { useGetInfoQuery } from '../../quieries/useGetInfoQuery';
import { PlayerListItem } from './PlayerListItem';
import { AddPlayerToTeamForm } from './AddPlayerToTeamForm';

const StyledIconButton = styled(StyledButton)`
    position: relative;

    @media (max-width: 450px) {
        padding: 8px;
        min-width: 32px;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0;

        &::before {
            content: '✏';
            font-size: 16px;
        }

        & > * {
            display: none !important;
        }
    }
`;

const StyledIconDeleteButton = styled(StyledNegButton)`
    position: relative;

    @media (max-width: 450px) {
        padding: 8px;
        min-width: 32px;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0;

        &::before {
            content: '×';
            font-size: 20px;
            line-height: 1;
        }

        & > * {
            display: none !important;
        }
    }
`;

const StyledIconShowPlayersButton = styled(StyledButton)`
    position: relative;

    @media (max-width: 450px) {
        padding: 8px;
        min-width: 32px;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0;

        &::before {
            content: '👥';
            font-size: 16px;
        }

        & > * {
            display: none !important;
        }
    }
`;

const StyledButtonContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    gap: 5px;
    align-items: center;
`;

type SingleTeamProps = {
    team: Team;
};

const SingleTeam = ({ team }: SingleTeamProps) => {
    const { data: players } = useGetInfoQuery<Player>('players');
    const [mode, setMode] = useState<'edit' | 'delete' | 'none'>('none');
    const [showTeamPlayers, setShowTeamPlayers] = useState(false);

    const toggleDelete = () => {
        setMode((prevMode) => (prevMode === 'delete' ? 'none' : 'delete'));
    };
    const toggleEdit = () => {
        setMode((prevMode) => (prevMode === 'edit' ? 'none' : 'edit'));
    };

    const toggleReset = () => {
        setMode('none');
    };

    const toggleShowTeamPlayers = () => {
        setShowTeamPlayers((prevShowTeamPlayers) => !prevShowTeamPlayers);
    };

    return (
        <>
            <StyledLi>
                <StyledH2>
                    {team.name} | {team.year}
                </StyledH2>
                <StyledP>{team.localization}</StyledP>
                <StyledButtonContainer>
                    <StyledIconShowPlayersButton onClick={toggleShowTeamPlayers}>
                        {showTeamPlayers ? 'Hide players' : 'Show players'}
                    </StyledIconShowPlayersButton>
                    <StyledIconButton onClick={toggleEdit}>
                        {mode === 'edit' ? 'Cancel' : 'Edit'}
                    </StyledIconButton>
                    <StyledIconDeleteButton onClick={toggleDelete}>
                        {mode === 'delete' ? 'Cancel' : 'Delete'}
                    </StyledIconDeleteButton>
                </StyledButtonContainer>
                {mode === 'edit' ? <EditTeam team={team} /> : undefined}
                {mode === 'delete' ? (
                    <DeleteTeamConfirmation
                        team={team}
                        onCancel={toggleReset}
                    />
                ) : undefined}
            </StyledLi>
            {showTeamPlayers && (
                <ul>
                    {players
                        ?.filter((player) => player.teamId === team.id)
                        .sort((a, b) => a.number - b.number)
                        .map((player) => (
                            <PlayerListItem key={player.id} player={player} />
                        ))}
                    <AddPlayerToTeamForm team={team} />
                </ul>
            )}
        </>
    );
};

export { SingleTeam };
