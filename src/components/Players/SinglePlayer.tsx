import { useState } from 'react';
import type { Player, Team } from '../../types';
import { DeletePlayerConfirmation } from './DeletePlayerConfirmation';
import { EditPlayer } from './EditPlayer';
import { useGetInfoQuery } from '../../quieries/useGetInfoQuery';
import { StyledButton, StyledNegButton } from '../../helpers';
import styled from 'styled-components';

const StyledLi = styled.li`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 2px 0;
`;
const StyledH2 = styled.h2`
    font-size: 16px;
    flex-basis: 15%;
`;

const StyledNumber = styled.span`
    display: inline-block;
    width: 30px;
`;

const StyledP = styled.p`
    font-size: 14px;
    flex-basis: 15%;
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
            <div>
                <StyledButton onClick={toggleEdit}>
                    {mode === 'edit' ? 'Cancel' : 'Edit'}
                </StyledButton>
                <StyledNegButton onClick={toggleDelete}>
                    {mode === 'delete' ? 'Cancel' : 'Delete'}
                </StyledNegButton>
            </div>
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
