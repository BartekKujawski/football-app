import styled from 'styled-components';
import { useGetInfoQuery } from '../../quieries/useGetInfoQuery';
import type { Player } from '../../types';
import { SinglePlayer } from './SinglePlayer';

const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    height: 700px;
    margin: 15px 50px;
    padding: 25px;
    background-color: ${(props) => props.theme.colors.contentBackground};
    color: ${(props) => props.theme.colors.textPrimary};
`;

export const PlayersList = () => {
    const { isLoading, error, data } = useGetInfoQuery<Player>('players');

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;

    return (
        <>
            <StyledUl>
                {data?.map((el) => (
                    <SinglePlayer key={el.id} player={el} />
                ))}
            </StyledUl>
        </>
    );
};
