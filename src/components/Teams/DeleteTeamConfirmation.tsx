import { useState } from 'react';
import { useDeleteQuery } from '../../quieries/useDeleteQuery';
import type { Games, Team } from '../../types';
import { useGetInfoQuery } from '../../quieries/useGetInfoQuery';

type SingleTeamProps = {
    team: Team;
    onCancel: () => void;
};

export const DeleteTeamConfirmation = ({ team, onCancel }: SingleTeamProps) => {
    const { isPending, error, mutate } = useDeleteQuery('teams');
    const { data: games } = useGetInfoQuery<Games>('games');
    const [isOnGame, setIsOnGame] = useState(false);

    const deleteTeamConfirm = () => {
        if (
            games?.find(
                (game) =>
                    game.homeTeamId === team.id || game.awayTeamId === team.id
            )
        ) {
            return setIsOnGame(true);
        }
        setIsOnGame(false);
        mutate(team.id);
    };

    return (
        <div>
            <p>Do you really want to delete this team?</p>
            <button
                disabled={isPending || isOnGame}
                onClick={deleteTeamConfirm}
            >
                Yes
            </button>
            <button disabled={isPending} onClick={onCancel}>
                No
            </button>
            {isOnGame && <p>You cannot delete a team which played a game!</p>}
            {error && <p>{error.message}</p>}
        </div>
    );
};
