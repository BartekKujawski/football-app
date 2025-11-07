import { useState } from 'react';
import type { Player, Team } from '../../types';
import { DeletePlayerConfirmation } from './DeletePlayerConfirmation';
import { EditPlayer } from './EditPlayer';
import { useGetInfoQuery } from '../../quieries/useGetInfoQuery';

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
        <li>
            <h2>
                {player.name} {player.surname} | {player.number}
            </h2>
            <p>{playerTeam?.name}</p>

            <button onClick={toggleEdit}>
                {mode === 'edit' ? 'Cancel' : 'Edit'}
            </button>
            <button onClick={toggleDelete}>
                {mode === 'delete' ? 'Cancel' : 'Delete'}
            </button>
            {mode === 'edit' ? <EditPlayer player={player} /> : undefined}
            {mode === 'delete' ? (
                <DeletePlayerConfirmation
                    player={player}
                    onCancel={toggleReset}
                />
            ) : undefined}
        </li>
    );
};
