import endpoints from 'app/endpoints';
import axios from 'axios';
import { useQuery } from 'react-query';

const fetchCategories = async () => {
    const response = await axios.get(`${endpoints.categories}`);

    return response.data;
};

export const useCategory = () =>
    useQuery(['categories'], () => fetchCategories(), { refetchOnWindowFocus: false, retry: false });
