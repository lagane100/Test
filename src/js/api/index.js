import axios from 'axios';

const host = './js/';

export function fetchImgs() {
    return axios.get(host + 'data.json');
}