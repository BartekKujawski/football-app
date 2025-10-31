import { useState, type ChangeEvent, type FormEvent } from 'react';
import { PlayerForm } from './PlayerForm';
import { useCreateQuery } from '../quieries/useCreateQuery';

const AddPlayer = () => {
    const { mutate, error, isPending } = useCreateQuery('players');
    const [values, setValues] = useState({
        name: '',
        surname: '',
        number: 99,
        teamId: '',
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
        setValues({
            name: '',
            surname: '',
            number: 99,
            teamId: '',
        });
    };

    if (isPending) return <p>Loading...</p>;

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

export { AddPlayer };
