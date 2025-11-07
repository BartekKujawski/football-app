import type { ChangeEvent, FormEvent } from 'react';
import type { PlayerDto, Team } from '../../types';
import { useGetInfoQuery } from '../../quieries/useGetInfoQuery';

type PlayerFormProps = {
    handleSubmit: (e: FormEvent) => void;
    handleChange: (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => void;
    values: PlayerDto;
    isPending: boolean;
    label: string;
};

export const PlayerForm = ({
    handleSubmit,
    handleChange,
    values,
    isPending,
    label,
}: PlayerFormProps) => {
    const { data: teams } = useGetInfoQuery<Team>('teams');
    const { name, surname, number } = values;

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
                <label htmlFor='surname'>Surname</label>
                <input
                    type='text'
                    id='surname'
                    name='surname'
                    value={surname}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor='number'>Number</label>
                <input
                    type='number'
                    id='number'
                    name='number'
                    value={number}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor='teamId'>Team</label>
                <select name='teamId' id='teamId' onChange={handleChange}>
                    {teams?.map((team) => (
                        <option key={team.id} value={team.id}>
                            {team.name}
                        </option>
                    ))}
                </select>
            </div>
            <button disabled={isPending} type='submit'>
                {label}
            </button>
        </form>
    );
};
