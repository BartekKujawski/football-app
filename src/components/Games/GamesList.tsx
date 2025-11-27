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
                            <StyledTableHeaderCell>Teams</StyledTableHeaderCell>
                            <StyledTableHeaderCell>
                                Competition
                            </StyledTableHeaderCell>
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
