import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useApi } from '../hooks/useApi';
import type { Menu, Collection, CollectionDto } from '../types';

export const useCreateQuery = (collection: Menu) => {
    const { apiPost } = useApi();
    const queryClient = useQueryClient();

    const { data, error, isPending, mutate } = useMutation({
        mutationKey: [collection, 'create'],
        mutationFn: async (payload: CollectionDto) => {
            return apiPost<Collection, CollectionDto>(collection, payload);
        },
        onSuccess: (createdItem) => {
            queryClient.setQueryData<Collection[]>([collection], (oldItems) => {
                return [...(oldItems || []), createdItem];
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
