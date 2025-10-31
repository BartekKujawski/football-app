import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useApi } from '../hooks/useApi';
import type { Menu, Player, PlayerDto } from '../types';

export const useEditQuery = (editId: string, collection: Menu) => {
    const { apiPatch } = useApi();
    const queryClient = useQueryClient();

    const { data, error, isPending, mutate } = useMutation({
        mutationKey: [collection, 'update'],
        mutationFn: async (player: PlayerDto) => {
            return apiPatch<Player, PlayerDto>(
                `${collection}/${editId}`,
                player
            );
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [collection],
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
