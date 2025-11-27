import { useState, type ChangeEvent, type FormEvent } from 'react';
import { useEditQuery } from '../../quieries/useEditQuery';
import type { Games } from '../../types';
import { GameForm } from './GameForm';

export const EditGame = ({ game }: { game: Games }) => {
    const { mutate, error, isPending } = useEditQuery(game.id, 'games');
    const [values, setValues] = useState({
        date: game.date,
        competition: game.competition,
        location: game.location,
        length: game.length,
        homeResult: game.homeResult,
        awayResult: game.awayResult,
        homeTeamId: game.homeTeamId,
        awayTeamId: game.awayTeamId,
    });

    const {
        date,
        competition,
        location,
        length,
        homeResult,
        awayResult,
        homeTeamId,
        awayTeamId,
    } = values;

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
        mutate({
            date,
            competition,
            location,
            length,
            homeResult,
            awayResult,
            homeTeamId,
            awayTeamId,
        });
    };

    return (
        <>
            <GameForm
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                values={values}
                isPending={isPending}
                label='Edit game'
            />
            {error && <p>{error.message}</p>}
        </>
    );
};
