import { type ChangeEvent, type FormEvent } from 'react';
import styled from 'styled-components';
import type { GamesDto } from '../../types';
import { useGetInfoQuery } from '../../quieries/useGetInfoQuery';
import {
    StyledForm,
    StyledFormDiv,
    StyledInput,
    StyledPrimaryButton,
    StyledSelect,
} from '../../helpers';
import type { Team } from '../../types';

const StyledLabel = styled.label`
    display: block;
    margin-bottom: 5px;
    font-size: 14px;
    color: ${(props) => props.theme.colors.textPrimary};

    @media (max-width: 768px) {
        font-size: 13px;
        width: 100%;
    }
`;

type GameFormProps = {
    handleSubmit: (e: FormEvent) => void;
    handleChange: (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => void;
    values: GamesDto;
    isPending: boolean;
    label: string;
};

export const GameForm = ({
    handleSubmit,
    handleChange,
    values,
    isPending,
    label,
}: GameFormProps) => {
    const { data: teams } = useGetInfoQuery<Team>('teams');
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

    return (
        <StyledForm onSubmit={handleSubmit}>
            <StyledFormDiv>
                <StyledLabel htmlFor='date'>Date</StyledLabel>
                <StyledInput
                    type='date'
                    id='date'
                    name='date'
                    value={date}
                    onChange={handleChange}
                />
            </StyledFormDiv>
            <StyledFormDiv>
                <StyledLabel htmlFor='competition'>Competition</StyledLabel>
                <StyledInput
                    type='text'
                    id='competition'
                    name='competition'
                    value={competition}
                    onChange={handleChange}
                />
            </StyledFormDiv>
            <StyledFormDiv>
                <StyledLabel htmlFor='location'>Location</StyledLabel>
                <StyledInput
                    type='text'
                    id='location'
                    name='location'
                    value={location}
                    onChange={handleChange}
                />
            </StyledFormDiv>
            <StyledFormDiv>
                <StyledLabel htmlFor='length'>Length (minutes)</StyledLabel>
                <StyledInput
                    min={90}
                    type='number'
                    id='length'
                    name='length'
                    value={length}
                    onChange={handleChange}
                />
            </StyledFormDiv>
            <StyledFormDiv>
                <StyledLabel htmlFor='homeTeamId'>Home Team</StyledLabel>
                <StyledSelect
                    name='homeTeamId'
                    id='homeTeamId'
                    value={homeTeamId}
                    onChange={handleChange}
                >
                    <option value=''>Select a team</option>
                    {teams?.map((team) => (
                        <option key={team.id} value={team.id}>
                            {team.name}
                        </option>
                    ))}
                </StyledSelect>
            </StyledFormDiv>
            <StyledFormDiv>
                <StyledLabel htmlFor='awayTeamId'>Away Team</StyledLabel>
                <StyledSelect
                    name='awayTeamId'
                    id='awayTeamId'
                    value={awayTeamId}
                    onChange={handleChange}
                >
                    <option value=''>Select a team</option>
                    {teams
                        ?.filter((team) => team.id !== homeTeamId)
                        .map((team) => (
                            <option key={team.id} value={team.id}>
                                {team.name}
                            </option>
                        ))}
                </StyledSelect>
            </StyledFormDiv>
            <StyledFormDiv>
                <StyledLabel htmlFor='homeResult'>Home Result</StyledLabel>
                <StyledInput
                    type='number'
                    id='homeResult'
                    name='homeResult'
                    value={homeResult}
                    onChange={handleChange}
                />
            </StyledFormDiv>
            <StyledFormDiv>
                <StyledLabel htmlFor='awayResult'>Away Result</StyledLabel>
                <StyledInput
                    type='number'
                    id='awayResult'
                    name='awayResult'
                    value={awayResult}
                    onChange={handleChange}
                />
            </StyledFormDiv>
            <StyledPrimaryButton disabled={isPending} type='submit'>
                {label}
            </StyledPrimaryButton>
        </StyledForm>
    );
};
