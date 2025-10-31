import { useQuery } from '@tanstack/react-query';
import { useApi } from '../hooks/useApi';
import type { Menu, Player } from '../types';

export const useGetInfoQuery = (collection: Menu) => {
    const { apiGet } = useApi();

    const { data, error, isLoading } = useQuery({
        queryKey: [collection],
        queryFn: async () => {
            return apiGet<Player[]>(collection);
        },
    });

    return {
        data,
        error,
        isLoading,
    };
};
