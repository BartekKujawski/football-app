import { useDeleteQuery } from '../../quieries/useDeleteQuery';
import type { Games } from '../../types';
import { StyledButton, StyledNegButton2, StyledDelDiv } from '../../helpers';

type SingleGameProps = {
    game: Games;
    onCancel: () => void;
};

export const DeleteGameConfirmation = ({ game, onCancel }: SingleGameProps) => {
    const { isPending, error, mutate } = useDeleteQuery('games');

    const deleteGameConfirm = () => {
        mutate(game.id);
    };

    return (
        <StyledDelDiv>
            <p>Do you really want to delete this game?</p>
            <StyledNegButton2 disabled={isPending} onClick={deleteGameConfirm}>
                Yes
            </StyledNegButton2>
            <StyledButton disabled={isPending} onClick={onCancel}>
                No
            </StyledButton>
            {error && <p>{error.message}</p>}
        </StyledDelDiv>
    );
};
