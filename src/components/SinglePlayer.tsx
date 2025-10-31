import { useState } from 'react';
import type { Player } from '../types';
import { DeletePlayerConfirmation } from './DeletePlayerConfirmation';
import { EditPlayer } from './EditPlayer';

type SinglePlayerProps = {
    player: Player;
};

const SinglePlayer = ({ player }: SinglePlayerProps) => {
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

    return (
        <li>
            <h2>
                {player.name} {player.surname} | {player.number}
            </h2>
            {/* <h3>{player.teamId}</h3> */}
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

export { SinglePlayer };
