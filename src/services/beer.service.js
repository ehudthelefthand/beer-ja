import axios from './axios';

export function getBeers() {
    return axios.get('/beers').then(res => res.data);
}

export function getBeerById(id) {
    return axios.get(`/beers/${id}`).then(res => res.data);
}