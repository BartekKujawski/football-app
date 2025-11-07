import { useState, type ChangeEvent, type FormEvent } from 'react';
import { useEditQuery } from '../../quieries/useEditQuery';
import type { Player, Team } from '../../types';
import { PlayerForm } from './PlayerForm';
import { useGetInfoQuery } from '../../quieries/useGetInfoQuery';

type SinglePlayerProps = {
    player: Player;
};

export const EditPlayer = ({ player }: SinglePlayerProps) => {
    const { mutate, error, isPending } = useEditQuery(player.id, 'players');
    const { data: teams } = useGetInfoQuery<Team>('teams');
    const playerTeam = teams?.find((team) => team.id === player.teamId);
    const [values, setValues] = useState({
        name: player.name,
        surname: player.surname,
        number: player.number,
        teamId: playerTeam?.id,
    });

    const { name, surname, number, teamId } = values;

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
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
                label='Edit player'
            />
            {error && <p>{error.message}</p>}
        </>
    );
};
