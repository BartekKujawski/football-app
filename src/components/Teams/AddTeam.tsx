import { useState, type ChangeEvent, type FormEvent } from 'react';
import { useCreateQuery } from '../../quieries/useCreateQuery';
import { TeamForm } from './TeamForm';

export const AddTeam = () => {
    const { mutate, error, isPending } = useCreateQuery('teams');
    const [values, setValues] = useState({
        name: '',
        year: 2025,
        localization: '',
    });

    const { name, year, localization } = values;

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

        mutate({ name, year, localization });
        setValues({
            name: '',
            year: 2025,
            localization: '',
        });
    };

    if (isPending) return <p>Loading...</p>;

    return (
        <>
            <TeamForm
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                values={values}
                isPending={isPending}
                label='Add team'
            />
            {error && <p>{error.message}</p>}
        </>
    );
};
