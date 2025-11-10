import type { ChangeEvent, FormEvent } from 'react';
import type { PlayerDto, Team } from '../../types';
import { useGetInfoQuery } from '../../quieries/useGetInfoQuery';
import styled from 'styled-components';
import { StyledMainButton } from '../../helpers';

type PlayerFormProps = {
    handleSubmit: (e: FormEvent) => void;
    handleChange: (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => void;
    values: PlayerDto;
    isPending: boolean;
    label: string;
};

const StyledForm = styled.form`
    display: flex;
    border-radius: 15px;
    margin: 0 50px;
    padding: 25px 15px;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.contentBackground};
    color: ${(props) => props.theme.colors.textPrimary};
`;

const StyledDiv = styled.div`
    margin-right: 50px;
`;

const StyledInput = styled.input`
    outline: none;
    border: none;
    font-size: 16px;
    padding: 5px;
    margin-left: 10px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.textPrimary};
    transition: 0.3s ease;
`;

const StyledSelect = styled.select`
    outline: none;
    border: none;
    font-size: 16px;
    padding: 5px;
    margin-left: 10px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.textPrimary};
    cursor: pointer;
    transition: 0.3s ease;
`;

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
        <StyledForm onSubmit={handleSubmit}>
            <StyledDiv>
                <label htmlFor='name'>Name</label>
                <StyledInput
                    type='text'
                    id='name'
                    name='name'
                    value={name}
                    onChange={handleChange}
                />
            </StyledDiv>
            <StyledDiv>
                <label htmlFor='surname'>Surname</label>
                <StyledInput
                    type='text'
                    id='surname'
                    name='surname'
                    value={surname}
                    onChange={handleChange}
                />
            </StyledDiv>
            <StyledDiv>
                <label htmlFor='number'>Number</label>
                <StyledInput
                    type='number'
                    id='number'
                    name='number'
                    value={number}
                    onChange={handleChange}
                />
            </StyledDiv>
            <StyledDiv>
                <label htmlFor='teamId'>Team</label>
                <StyledSelect name='teamId' id='teamId' onChange={handleChange}>
                    {teams?.map((team) => (
                        <option key={team.id} value={team.id}>
                            {team.name}
                        </option>
                    ))}
                </StyledSelect>
            </StyledDiv>
            <StyledMainButton disabled={isPending} type='submit'>
                {label}
            </StyledMainButton>
        </StyledForm>
    );
};
