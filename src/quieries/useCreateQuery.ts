import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useApi } from '../hooks/useApi';
import type { Menu, Player, PlayerDto } from '../types';

export const useCreateQuery = (collection: Menu) => {
    const { apiPost } = useApi();
    const queryClient = useQueryClient();

    const { data, error, isPending, mutate } = useMutation({
        mutationKey: [collection, 'create'],
        mutationFn: async (payload: PlayerDto) => {
            return apiPost<Player, PlayerDto>(collection, payload);
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
