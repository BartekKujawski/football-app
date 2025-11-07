import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useApi } from '../hooks/useApi';
import type { Menu, Collection } from '../types';

export const useDeleteQuery = (collection: Menu) => {
    const { apiDelete } = useApi();
    const queryClient = useQueryClient();

    const { data, error, isPending, mutate } = useMutation({
        mutationKey: [collection, 'delete'],
        mutationFn: async (deleteId: string) => {
            return apiDelete<Collection>(`${collection}/${deleteId}`);
        },
        onSuccess: (deleteItem) => {
            queryClient.setQueryData<Collection[]>([collection], (oldItems) => {
                return oldItems?.filter((item) => item.id !== deleteItem.id);
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
