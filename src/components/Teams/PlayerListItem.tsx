import styled from 'styled-components';
import { StyledNegButton2, StyledNumber } from '../../helpers';
import { useEditQuery } from '../../quieries/useEditQuery';
import type { Player } from '../../types';

const StyledNewLi = styled.li`
    list-style: none;
    padding: 5px 0 5px 40px;
    margin: 0;
`;

type PlayerListItemProps = {
    player: Player;
};

export const PlayerListItem = ({ player }: PlayerListItemProps) => {
    const { mutate, isPending } = useEditQuery(player.id, 'players');

    const handleRemove = () => {
        mutate({
            name: player.name,
            surname: player.surname,
            number: player.number,
            teamId: '',
        });
    };

    return (
        <StyledNewLi>
            <StyledNumber>{player.number}</StyledNumber> {player.name}{' '}
            {player.surname}
            <StyledNegButton2
                onClick={handleRemove}
                disabled={isPending}
                style={{ marginLeft: '10px' }}
            >
                Remove
            </StyledNegButton2>
        </StyledNewLi>
    );
};
