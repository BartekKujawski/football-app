import type { ChangeEvent, FormEvent } from 'react';
import type { TeamDto } from '../../types';
import {
    StyledForm,
    StyledFormDiv,
    StyledInput,
    StyledPrimaryButton,
} from '../../helpers';

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
                <label htmlFor='year'>Year</label>
                <StyledInput
                    type='number'
                    id='year'
                    name='year'
                    value={year}
                    onChange={handleChange}
                />
            </StyledFormDiv>
            <StyledFormDiv>
                <label htmlFor='localization'>Localization</label>
                <StyledInput
                    type='text'
                    id='localization'
                    name='localization'
                    value={localization}
                    onChange={handleChange}
                />
            </StyledFormDiv>
            <StyledPrimaryButton disabled={isPending} type='submit'>
                {label}
            </StyledPrimaryButton>
        </StyledForm>
    );
};
