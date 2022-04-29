import API from 'app/api';
import endpoint from 'app/endpoints';

export const getCategories = async () => {
    const response = await API.get(endpoint.categories);

    return response.data;
};
