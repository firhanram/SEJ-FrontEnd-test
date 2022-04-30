import endpoints from 'app/endpoints';
import axios from 'axios';
import { useQuery } from 'react-query';

// Endpoint
export const fetchBooksByCategory = async (params) => {
    const response = await axios.get(`${endpoints.books}`, params);

    return response;
};
//

// Queries
export const useBooksByCategory = ({ categoryId, params, onSuccess }) =>
    useQuery(['booksByCategory', { categoryId, page: params.page }], () => fetchBooksByCategory({ params }), {
        retry: false,
        refetchOnWindowFocus: false,
        onSuccess,
        enabled: !!categoryId,
    });
