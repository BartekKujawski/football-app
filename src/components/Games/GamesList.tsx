import styled from 'styled-components';
import { useGetInfoQuery } from '../../quieries/useGetInfoQuery';
import type { Games } from '../../types';
import { SingleGame } from './SingleGame';
import {
    StyledTableWrapper,
    StyledTableInner,
    StyledTableHeader,
    StyledTableHeaderCell,
    StyledTableBody,
} from '../../helpers';

const StyledTeamHeaderCell = styled(StyledTableHeaderCell)`
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

const StyledCompetitionHeaderCell = styled(StyledTableHeaderCell)`
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

export const GamesList = () => {
    const { isLoading, error, data } = useGetInfoQuery<Games>('games');

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;

    return (
        <>
            <StyledTableWrapper>
                <StyledTableInner>
                    <StyledTableHeader>
                        <tr>
                            <StyledTeamHeaderCell>Teams</StyledTeamHeaderCell>
                            <StyledCompetitionHeaderCell>
                                Competition
                            </StyledCompetitionHeaderCell>
                            <StyledTableHeaderCell>Date</StyledTableHeaderCell>
                            <StyledTableHeaderCell>
                                Location
                            </StyledTableHeaderCell>
                            <StyledTableHeaderCell>
                                Result
                            </StyledTableHeaderCell>
                            <StyledTableHeaderCell>
                                Length
                            </StyledTableHeaderCell>
                            <StyledTableHeaderCell></StyledTableHeaderCell>
                        </tr>
                    </StyledTableHeader>
                    <StyledTableBody>
                        {data?.map((el) => (
                            <SingleGame key={el.id} game={el} />
                        ))}
                    </StyledTableBody>
                </StyledTableInner>
            </StyledTableWrapper>
        </>
    );
};
