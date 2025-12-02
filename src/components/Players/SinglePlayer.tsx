import { useState } from 'react';
import styled from 'styled-components';
import type { Player, Team } from '../../types';
import { DeletePlayerConfirmation } from './DeletePlayerConfirmation';
import { EditPlayer } from './EditPlayer';
import { useGetInfoQuery } from '../../quieries/useGetInfoQuery';
import { StyledButton, StyledNegButton } from '../../helpers';
import { StyledLi, StyledH2, StyledNumber, StyledP } from '../../helpers';

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

const StyledButtonContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    gap: 5px;
    align-items: center;
    flex-shrink: 0;
    min-width: fit-content;
`;

type SinglePlayerProps = {
    player: Player;
};

export const SinglePlayer = ({ player }: SinglePlayerProps) => {
    const { data: teams } = useGetInfoQuery<Team>('teams');
    const [mode, setMode] = useState<'edit' | 'delete' | 'none'>('none');
    const toggleDelete = () => {
        setMode((prevMode) => (prevMode === 'delete' ? 'none' : 'delete'));
    };
    const toggleEdit = () => {
        setMode((prevMode) => (prevMode === 'edit' ? 'none' : 'edit'));
    };

    const toggleReset = () => {
        setMode('none');
    };

    const playerTeam = teams?.find((team) => team.id === player.teamId);

    return (
        <StyledLi>
            <StyledH2>
                <StyledNumber>{player.number}</StyledNumber>
                {player.name} {player.surname}
            </StyledH2>
            <StyledP>{playerTeam?.name}</StyledP>
            <StyledButtonContainer>
                <StyledIconButton onClick={toggleEdit}>
                    {mode === 'edit' ? 'Cancel' : 'Edit'}
                </StyledIconButton>
                <StyledIconDeleteButton onClick={toggleDelete}>
                    {mode === 'delete' ? 'Cancel' : 'Delete'}
                </StyledIconDeleteButton>
            </StyledButtonContainer>
            {mode === 'edit' ? <EditPlayer player={player} /> : undefined}
            {mode === 'delete' ? (
                <DeletePlayerConfirmation
                    player={player}
                    onCancel={toggleReset}
                />
            ) : undefined}
        </StyledLi>
    );
};
