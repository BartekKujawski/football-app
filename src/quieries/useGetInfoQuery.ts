import { useQuery } from '@tanstack/react-query';
import { useApi } from '../hooks/useApi';
import type { Menu } from '../types';

export const useGetInfoQuery = <C>(collection: Menu) => {
    const { apiGet } = useApi();

    const { data, error, isLoading } = useQuery({
        queryKey: [collection],
        queryFn: async () => {
            return apiGet<C[]>(collection);
        },
    });

    return {
        data,
        error,
        isLoading,
    };
};
