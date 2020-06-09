import axios from 'axios';

export function search(searchTerm) {
    return axios.get('https://www.omdbapi.com/?s=' + searchTerm + '&apikey=4a24f274');
}
