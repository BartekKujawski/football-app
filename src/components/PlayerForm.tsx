import type { ChangeEvent, FormEvent } from 'react';
import type { PlayerDto } from '../types';

type PlayerFormProps = {
    handleSubmit: (e: FormEvent) => void;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    values: PlayerDto;
    isPending: boolean;
};

const PlayerForm = ({
    handleSubmit,
    handleChange,
    values,
    isPending,
}: PlayerFormProps) => {
    const { name, surname, number, teamId } = values;

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
                <input
                    type='text'
                    id='teamId'
                    name='teamId'
                    value={teamId}
                    onChange={handleChange}
                />
            </div>
            <button disabled={isPending} type='submit'>
                Edit book
            </button>
        </form>
    );
};

export { PlayerForm };
