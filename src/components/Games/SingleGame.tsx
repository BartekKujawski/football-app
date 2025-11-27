import { useState } from 'react';
import type { Games, Team } from '../../types';
import { DeleteGameConfirmation } from './DeleteGameConfirmation';
import { EditGame } from './EditGame';
import { useGetInfoQuery } from '../../quieries/useGetInfoQuery';
import {
    StyledButton,
    StyledNegButton,
    StyledTableHeaderCell,
} from '../../helpers';
import { StyledTableRow, StyledTableCell } from '../../helpers';

type SingleGameProps = {
    game: Games;
};

export const SingleGame = ({ game }: SingleGameProps) => {
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

    const homeTeam = teams?.find((team) => team.id === game.homeTeamId);
    const awayTeam = teams?.find((team) => team.id === game.awayTeamId);

    return (
        <>
            <StyledTableRow>
                <StyledTableHeaderCell>
                    {homeTeam?.name} vs {awayTeam?.name}
                </StyledTableHeaderCell>
                <StyledTableCell>{game.competition}</StyledTableCell>
                <StyledTableCell>{game.date}</StyledTableCell>
                <StyledTableCell>{game.location}</StyledTableCell>
                <StyledTableCell style={{ textAlign: 'left' }}>
                    {game.homeResult} - {game.awayResult}
                </StyledTableCell>
                <StyledTableCell>{game.length} minutes</StyledTableCell>
                <StyledTableCell style={{ textAlign: 'right' }}>
                    <StyledButton onClick={toggleEdit}>
                        {mode === 'edit' ? 'Cancel' : 'Edit'}
                    </StyledButton>
                    <StyledNegButton onClick={toggleDelete}>
                        {mode === 'delete' ? 'Cancel' : 'Delete'}
                    </StyledNegButton>
                </StyledTableCell>
            </StyledTableRow>
            {mode === 'edit' && (
                <StyledTableRow>
                    <StyledTableCell colSpan={7}>
                        <EditGame game={game} />
                    </StyledTableCell>
                </StyledTableRow>
            )}
            {mode === 'delete' && (
                <StyledTableRow>
                    <StyledTableCell colSpan={7}>
                        <DeleteGameConfirmation
                            game={game}
                            onCancel={toggleReset}
                        />
                    </StyledTableCell>
                </StyledTableRow>
            )}
        </>
    );
};
