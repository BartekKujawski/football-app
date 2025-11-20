import { useState } from 'react';
import type { Player, Team } from '../../types';
import { EditTeam } from './EditTeam';
import { DeleteTeamConfirmation } from './DeleteTeamConfirmation';
import {
    StyledLi,
    StyledH2,
    StyledButton,
    StyledNegButton,
    StyledP,
} from '../../helpers';
import { useGetInfoQuery } from '../../quieries/useGetInfoQuery';
import { PlayerListItem } from './PlayerListItem';
import { AddPlayerToTeamForm } from './AddPlayerToTeamForm';

type SingleTeamProps = {
    team: Team;
};

const SingleTeam = ({ team }: SingleTeamProps) => {
    const { data: players } = useGetInfoQuery<Player>('players');
    const [mode, setMode] = useState<'edit' | 'delete' | 'none'>('none');
    const [showTeamPlayers, setShowTeamPlayers] = useState(false);

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
                            <PlayerListItem key={player.id} player={player} />
                        ))}
                    <AddPlayerToTeamForm team={team} />
                </ul>
            )}
        </>
    );
};

export { SingleTeam };
