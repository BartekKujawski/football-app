import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useApi } from '../hooks/useApi';
import type { Menu, Player } from '../types';

export const useDeleteQuery = (collection: Menu) => {
    const { apiDelete } = useApi();
    const queryClient = useQueryClient();

    const { data, error, isPending, mutate } = useMutation({
        mutationKey: [collection, 'delete'],
        mutationFn: async (deleteId: string) => {
            return apiDelete<Player>(`${collection}/${deleteId}`);
        },
        onSuccess: (deletePlayer) => {
            queryClient.setQueryData<Player[]>([collection], (oldPlayers) => {
                return oldPlayers?.filter(
                    (player) => player.id !== deletePlayer.id
                );
            });
        },
    });

    return {
        data,
        error,
        isPending,
        mutate,
    };
};
