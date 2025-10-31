import { useState, type ChangeEvent, type FormEvent } from 'react';
import { useEditQuery } from '../quieries/useEditQuery';
import type { Player } from '../types';
import { PlayerForm } from './PlayerForm';

type SinglePlayerProps = {
    player: Player;
};

const EditPlayer = ({ player }: SinglePlayerProps) => {
    const { mutate, error, isPending } = useEditQuery(player.id, 'players');
    const [values, setValues] = useState({
        name: player.name,
        surname: player.surname,
        number: player.number,
        teamId: player.teamId,
    });

    const { name, surname, number, teamId } = values;

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value, type } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: type === 'number' ? Number(value) : value,
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        mutate({ name, surname, number, teamId });
    };

    return (
        <>
            <PlayerForm
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                values={values}
                isPending={isPending}
            />
            {error && <p>{error.message}</p>}
        </>
    );
};

export { EditPlayer };
