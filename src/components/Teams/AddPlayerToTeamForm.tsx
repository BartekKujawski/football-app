import { useState, type FormEvent } from 'react';
import type { Player, Team } from '../../types';
import { StyledSelect, StyledPrimaryButton } from '../../helpers';
import { useGetInfoQuery } from '../../quieries/useGetInfoQuery';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useApi } from '../../hooks/useApi';
import styled from 'styled-components';

const StyledFormLi = styled.li`
    list-style: none;
    padding: 5px 0;
    margin: 0;
`;

type AddPlayerToTeamFormProps = {
    team: Team;
};

export const AddPlayerToTeamForm = ({ team }: AddPlayerToTeamFormProps) => {
    const { data: players } = useGetInfoQuery<Player>('players');
    const [selectedPlayerId, setSelectedPlayerId] = useState('');
    const { apiPatch } = useApi();
    const queryClient = useQueryClient();

    const selectedPlayer = players?.find((p) => p.id === selectedPlayerId);

    const { mutate, isPending } = useMutation({
        mutationKey: ['players', 'update'],
        mutationFn: async ({
            playerId,
            playerData,
        }: {
            playerId: string;
            playerData: {
                name: string;
                surname: string;
                number: number;
                teamId: string;
            };
        }) => {
            return apiPatch<Player, typeof playerData>(
                `players/${playerId}`,
                playerData
            );
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['players'],
            });
            setSelectedPlayerId('');
        },
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!selectedPlayerId || !selectedPlayer) return;

        mutate({
            playerId: selectedPlayerId,
            playerData: {
                name: selectedPlayer.name,
                surname: selectedPlayer.surname,
                number: selectedPlayer.number,
                teamId: team.id,
            },
        });
    };

    const availablePlayers = players?.filter(
        (player) =>
            player.teamId === undefined ||
            player.teamId === '' ||
            !player.teamId
    );

    return (
        <StyledFormLi>
            <form onSubmit={handleSubmit}>
                <StyledSelect
                    name='players'
                    id='players'
                    value={selectedPlayerId}
                    onChange={(e) => setSelectedPlayerId(e.target.value)}
                >
                    <option value=''>Select a player</option>
                    {availablePlayers?.map((player) => (
                        <option key={player.id} value={player.id}>
                            {player.name} {player.surname}
                        </option>
                    ))}
                </StyledSelect>
                <StyledPrimaryButton
                    style={{ marginLeft: '10px' }}
                    type='submit'
                    disabled={!selectedPlayerId || isPending}
                >
                    Add player to team
                </StyledPrimaryButton>
            </form>
        </StyledFormLi>
    );
};
