import { useState } from 'react';
import { useDeleteQuery } from '../../quieries/useDeleteQuery';
import type { Player } from '../../types';
import { StyledButton, StyledNegButton2, StyledDelDiv } from '../../helpers';

type SinglePlayerProps = {
    player: Player;
    onCancel: () => void;
};

export const DeletePlayerConfirmation = ({
    player,
    onCancel,
}: SinglePlayerProps) => {
    const { isPending, error, mutate } = useDeleteQuery('players');
    const [isOnTeam, setIsOnTeam] = useState(false);

    const deletePlayerConfirm = () => {
        if (player.teamId && player.teamId.length > 0) {
            return setIsOnTeam(true);
        }
        setIsOnTeam(false);
        mutate(player.id);
    };

    return (
        <StyledDelDiv>
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
        </StyledDelDiv>
    );
};
