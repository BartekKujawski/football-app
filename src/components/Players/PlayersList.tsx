import { useGetInfoQuery } from '../../quieries/useGetInfoQuery';
import type { Player } from '../../types';
import { SinglePlayer } from './SinglePlayer';
import {
    StyledUl,
    StyledHeaderLi,
    StyledH2,
    StyledNumber,
    StyledP,
} from '../../helpers';

export const PlayersList = () => {
    const { isLoading, error, data } = useGetInfoQuery<Player>('players');

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;

    return (
        <>
            <StyledUl>
                <StyledHeaderLi>
                    <StyledH2>
                        <StyledNumber>#</StyledNumber>
                        Name
                    </StyledH2>
                    <StyledP>Team</StyledP>
                    <div></div>
                </StyledHeaderLi>
                {data?.map((el) => (
                    <SinglePlayer key={el.id} player={el} />
                ))}
            </StyledUl>
        </>
    );
};
