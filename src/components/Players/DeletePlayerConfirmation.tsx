import { useState } from 'react';
import { useDeleteQuery } from '../../quieries/useDeleteQuery';
import type { Player } from '../../types';
import styled from 'styled-components';
import { StyledButton, StyledNegButton2 } from '../../helpers';

type SinglePlayerProps = {
    player: Player;
    onCancel: () => void;
};

const StyledDiv = styled.div`
    display: flex;
    border-radius: 15px;
    flex-basis: 100%;
    padding: 25px 15px;
    background-color: ${(props) => props.theme.colors.contentBackground};
    color: ${(props) => props.theme.colors.textPrimary};
`;

export const DeletePlayerConfirmation = ({
    player,
    onCancel,
}: SinglePlayerProps) => {
    const { isPending, error, mutate } = useDeleteQuery('players');
    const [isOnTeam, setIsOnTeam] = useState(false);

    const deletePlayerConfirm = () => {
        if (player.teamId !== undefined) {
            return setIsOnTeam(true);
        }
        setIsOnTeam(false);
        mutate(player.id);
    };

    return (
        <StyledDiv>
            <p>Do you really want to delete this player?</p>
            <StyledNegButton2
                disabled={isPending || isOnTeam}
                onClick={deletePlayerConfirm}
            >
                Yes
            </StyledNegButton2>
            <StyledButton disabled={isPending} onClick={onCancel}>
                No
            </StyledButton>
            {isOnTeam && (
                <p>You cannot delete a player who is part of a team!</p>
            )}
            {error && <p>{error.message}</p>}
        </StyledDiv>
    );
};
