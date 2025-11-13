import { useState, type ChangeEvent, type FormEvent } from 'react';
import type { PlayerDto, Team } from '../../types';
import { useGetInfoQuery } from '../../quieries/useGetInfoQuery';
import {
    StyledForm,
    StyledFormDiv,
    StyledInput,
    StyledPrimaryButton,
    StyledSelect,
} from '../../helpers';

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
    const [value, setValue] = useState('');
    const { name, surname, number } = values;

    return (
        <StyledForm onSubmit={handleSubmit}>
            <StyledFormDiv>
                <label htmlFor='name'>Name</label>
                <StyledInput
                    type='text'
                    id='name'
                    name='name'
                    value={name}
                    onChange={handleChange}
                />
            </StyledFormDiv>
            <StyledFormDiv>
                <label htmlFor='surname'>Surname</label>
                <StyledInput
                    type='text'
                    id='surname'
                    name='surname'
                    value={surname}
                    onChange={handleChange}
                />
            </StyledFormDiv>
            <StyledFormDiv>
                <label htmlFor='number'>Number</label>
                <StyledInput
                    type='number'
                    id='number'
                    name='number'
                    value={number}
                    onChange={handleChange}
                />
            </StyledFormDiv>
            <StyledFormDiv>
                <label htmlFor='teamId'>Team</label>
                <StyledSelect
                    name='teamId'
                    id='teamId'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                >
                    <option value=''>Select a team</option>
                    {teams?.map((team) => (
                        <option key={team.id} value={team.id}>
                            {team.name}
                        </option>
                    ))}
                </StyledSelect>
            </StyledFormDiv>
            <StyledPrimaryButton disabled={isPending} type='submit'>
                {label}
            </StyledPrimaryButton>
        </StyledForm>
    );
};
