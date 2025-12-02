import { useState } from 'react';
import styled from 'styled-components';
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

const StyledTeamCell = styled(StyledTableHeaderCell)`
    max-width: 150px;
    width: 150px;

    @media (max-width: 900px) {
        max-width: 130px;
        width: 130px;
    }

    @media (max-width: 768px) {
        max-width: 120px;
        width: 120px;
    }

    @media (max-width: 615px) {
        max-width: 100px;
        width: 100px;
    }

    @media (max-width: 480px) {
        max-width: 90px;
        width: 90px;
    }

    @media (max-width: 475px) {
        max-width: 80px;
        width: 80px;
    }
`;

const StyledCompetitionCell = styled(StyledTableCell)`
    max-width: 100px;
    width: 100px;

    @media (max-width: 768px) {
        max-width: 80px;
        width: 80px;
    }

    @media (max-width: 480px) {
        max-width: 70px;
        width: 70px;
    }
`;

const StyledTeamNames = styled.div`
    white-space: normal;
    word-wrap: break-word;
    line-height: 1.4;
    max-width: 100%;

    @media (max-width: 768px) {
        font-size: 12px;
        line-height: 1.3;
    }

    @media (max-width: 480px) {
        font-size: 11px;
        line-height: 1.2;
    }
`;

const StyledTextCell = styled.div`
    white-space: nowrap;
    max-width: 100%;

    @media (max-width: 768px) {
        white-space: normal;
        word-wrap: break-word;
        overflow-wrap: break-word;
    }

    @media (max-width: 480px) {
        font-size: 10px;
    }
`;

const StyledResultCell = styled.div`
    text-align: left;

    @media (max-width: 768px) {
        text-align: center;
    }
`;

const StyledActionCell = styled.div`
    text-align: right;
    display: flex;
    justify-content: flex-end;
    gap: 5px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 5px;
        align-items: stretch;
    }

    @media (max-width: 480px) {
        gap: 3px;
    }
`;

const StyledIconButton = styled(StyledButton)`
    position: relative;

    @media (max-width: 450px) {
        padding: 8px;
        min-width: 32px;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0;

        &::before {
            content: '✏';
            font-size: 16px;
        }

        & > * {
            display: none !important;
        }
    }
`;

const StyledIconDeleteButton = styled(StyledNegButton)`
    position: relative;

    @media (max-width: 450px) {
        padding: 8px;
        min-width: 32px;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0;

        &::before {
            content: '×';
            font-size: 20px;
            line-height: 1;
        }

        & > * {
            display: none !important;
        }
    }
`;

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
                <StyledTeamCell>
                    <StyledTeamNames>
                        {homeTeam?.name} vs {awayTeam?.name}
                    </StyledTeamNames>
                </StyledTeamCell>
                <StyledCompetitionCell>
                    <StyledTextCell>{game.competition}</StyledTextCell>
                </StyledCompetitionCell>
                <StyledTableCell>
                    <StyledTextCell>{game.date}</StyledTextCell>
                </StyledTableCell>
                <StyledTableCell>
                    <StyledTextCell>{game.location}</StyledTextCell>
                </StyledTableCell>
                <StyledTableCell>
                    <StyledResultCell>
                        {game.homeResult} - {game.awayResult}
                    </StyledResultCell>
                </StyledTableCell>
                <StyledTableCell>
                    <StyledTextCell>{game.length} minutes</StyledTextCell>
                </StyledTableCell>
                <StyledTableCell>
                    <StyledActionCell>
                        <StyledIconButton onClick={toggleEdit}>
                            {mode === 'edit' ? 'Cancel' : 'Edit'}
                        </StyledIconButton>
                        <StyledIconDeleteButton onClick={toggleDelete}>
                            {mode === 'delete' ? 'Cancel' : 'Delete'}
                        </StyledIconDeleteButton>
                    </StyledActionCell>
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
