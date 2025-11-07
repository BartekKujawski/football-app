import { useState } from 'react';
import type { Team } from '../../types';
import { EditTeam } from './EditTeam';
import { DeleteTeamConfirmation } from './DeleteTeamConfirmation';

type SingleTeamProps = {
    team: Team;
};

const SingleTeam = ({ team }: SingleTeamProps) => {
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
                {team.name} | {team.year}
            </h2>
            <button onClick={toggleEdit}>
                {mode === 'edit' ? 'Cancel' : 'Edit'}
            </button>
            <button onClick={toggleDelete}>
                {mode === 'delete' ? 'Cancel' : 'Delete'}
            </button>
            {mode === 'edit' ? <EditTeam team={team} /> : undefined}
            {mode === 'delete' ? (
                <DeleteTeamConfirmation team={team} onCancel={toggleReset} />
            ) : undefined}
        </li>
    );
};

export { SingleTeam };
