import { useState, type FormEvent } from 'react';
import type { Player, Team } from '../../types';
import { EditTeam } from './EditTeam';
import { DeleteTeamConfirmation } from './DeleteTeamConfirmation';
import {
    StyledLi,
    StyledH2,
    StyledButton,
    StyledNegButton,
    StyledP,
    StyledSelect,
    StyledPrimaryButton,
} from '../../helpers';
import { useGetInfoQuery } from '../../quieries/useGetInfoQuery';

type SingleTeamProps = {
    team: Team;
};

const SingleTeam = ({ team }: SingleTeamProps) => {
    const { data: players } = useGetInfoQuery<Player>('players');
    const [mode, setMode] = useState<'edit' | 'delete' | 'none'>('none');
    const [showTeamPlayers, setShowTeamPlayers] = useState(false);
    const [value, setValue] = useState('');
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

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    };

    return (
        <>
            <StyledLi>
                <StyledH2>
                    {team.name} | {team.year}
                </StyledH2>
                <StyledP>{team.localization}</StyledP>
                <div>
                    <StyledButton onClick={toggleShowTeamPlayers}>
                        {showTeamPlayers ? 'Hide players' : 'Show players'}
                    </StyledButton>
                    <StyledButton onClick={toggleEdit}>
                        {mode === 'edit' ? 'Cancel' : 'Edit'}
                    </StyledButton>
                    <StyledNegButton onClick={toggleDelete}>
                        {mode === 'delete' ? 'Cancel' : 'Delete'}
                    </StyledNegButton>
                </div>
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
                            <li key={player.id}>
                                {player.number} | {player.name} {player.surname}
                            </li>
                        ))}
                    <li>
                        <form onClick={handleSubmit}>
                            <StyledSelect
                                name='players'
                                id='players'
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                            >
                                <option value=''>Select a player</option>
                                {players
                                    ?.filter(
                                        (player) =>
                                            player.teamId === undefined ||
                                            player.teamId === ''
                                    )
                                    .map((player) => (
                                        <option
                                            key={player.id}
                                            value={player.id}
                                        >
                                            {player.name} {player.surname}
                                        </option>
                                    ))}
                            </StyledSelect>
                            <StyledPrimaryButton type='submit'>
                                Add player to team
                            </StyledPrimaryButton>
                        </form>
                    </li>
                </ul>
            )}
        </>
    );
};

export { SingleTeam };
