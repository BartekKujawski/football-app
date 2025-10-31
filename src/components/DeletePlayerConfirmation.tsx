import { useState } from 'react';
import { useDeleteQuery } from '../quieries/useDeleteQuery';
import type { Player } from '../types';

type SinglePlayerProps = {
    player: Player;
    onCancel: () => void;
};

const DeletePlayerConfirmation = ({ player, onCancel }: SinglePlayerProps) => {
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
        <div>
            <p>Do you really want to delete this player?</p>
            <button
                disabled={isPending || isOnTeam}
                onClick={deletePlayerConfirm}
            >
                Yes
            </button>
            <button disabled={isPending} onClick={onCancel}>
                No
            </button>
            {isOnTeam && (
                <p>You cannot delete a player who is part of a team!</p>
            )}
            {error && <p>{error.message}</p>}
        </div>
    );
};

export { DeletePlayerConfirmation };
