import axios from 'axios'

export const BASE_URL = 'https://api.npoint.io/';

export const ENDPOINTS = {
    accounts : '80a411e61e754db5969e',
}

export const createAPIEndpoint = endpoint => {

    let url = BASE_URL + endpoint + '/';
    return {
        fetch: (token) => axios.get(url, token),
        post: (newRecord, token) => axios.post(url, newRecord, token),
        put: (id, updatedRecord, token) => axios.put(url + id, updatedRecord, token),
        delete: id => axios.delete(url + id),
    }
}