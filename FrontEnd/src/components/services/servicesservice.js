import http from './httpservice';
import config from '../../config.json';
const {apiUrl} = config;

export function getService() {
    return http.get(apiUrl+'/services');
  }