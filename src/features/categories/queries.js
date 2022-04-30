import endpoint from 'app/endpoints';
import axios from 'axios';
import { useQuery } from 'react-query';

const fetchCategories = async () => {
    const response = await axios.get(`${endpoint.categories}`);

    return response.data;
};

export const useCategory = () =>
    useQuery(['categories'], () => fetchCategories(), { refetchOnWindowFocus: false, retry: false });
