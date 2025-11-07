import { useState, type ChangeEvent, type FormEvent } from 'react';
import { useEditQuery } from '../../quieries/useEditQuery';
import type { Team } from '../../types';
import { TeamForm } from './TeamForm';

type SingleTeamProps = {
    team: Team;
};

export const EditTeam = ({ team }: SingleTeamProps) => {
    const { mutate, error, isPending } = useEditQuery(team.id, 'teams');
    const [values, setValues] = useState({
        name: team.name,
        year: team.year,
        localization: team.localization,
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
    };

    return (
        <>
            <TeamForm
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                values={values}
                isPending={isPending}
                label='Edit team'
            />
            {error && <p>{error.message}</p>}
        </>
    );
};
