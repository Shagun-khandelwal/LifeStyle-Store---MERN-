import http from './httpservice';
import config from '../../config.json';
const {apiUrl} = config;

export function getGenres(){
    return http.get(apiUrl+'/genres');
}