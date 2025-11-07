import type { ChangeEvent, FormEvent } from 'react';
import type { TeamDto } from '../../types';

type TeamFormProps = {
    handleSubmit: (e: FormEvent) => void;
    handleChange: (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => void;
    values: TeamDto;
    isPending: boolean;
    label: string;
};

export const TeamForm = ({
    handleSubmit,
    handleChange,
    values,
    isPending,
    label,
}: TeamFormProps) => {
    const { name, year, localization } = values;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Name</label>
                <input
                    type='text'
                    id='name'
                    name='name'
                    value={name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor='year'>Year</label>
                <input
                    type='number'
                    id='year'
                    name='year'
                    value={year}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor='localization'>Localization</label>
                <input
                    type='text'
                    id='localization'
                    name='localization'
                    value={localization}
                    onChange={handleChange}
                />
            </div>
            <button disabled={isPending} type='submit'>
                {label}
            </button>
        </form>
    );
};
