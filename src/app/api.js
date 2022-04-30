/* eslint-disable no-param-reassign */
import axios from 'axios';
import { BASE_URL } from './constant';

const instance = axios.create({
    baseURL: BASE_URL,
});

export default instance;
