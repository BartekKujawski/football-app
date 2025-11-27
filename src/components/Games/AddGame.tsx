import { useState, type ChangeEvent, type FormEvent } from 'react';
import { useCreateQuery } from '../../quieries/useCreateQuery';
import { GameForm } from './GameForm';

export const AddGame = () => {
    const { mutate, error, isPending } = useCreateQuery('games');
    const [values, setValues] = useState({
        date: '',
        competition: '',
        location: '',
        length: 90,
        homeResult: 0,
        awayResult: 0,
        homeTeamId: '',
        awayTeamId: '',
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
        setValues({
            date: '',
            competition: '',
            location: '',
            length: 90,
            homeResult: 0,
            awayResult: 0,
            homeTeamId: '',
            awayTeamId: '',
        });
    };

    if (isPending) return <p>Loading...</p>;

    return (
        <>
            <GameForm
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                values={values}
                isPending={isPending}
                label='Add game'
            />
            {error && <p>{error.message}</p>}
        </>
    );
};
