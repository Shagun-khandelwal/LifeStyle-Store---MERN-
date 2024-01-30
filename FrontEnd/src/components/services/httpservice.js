import Axios from 'axios';
import logger from './logservice';
import {toast} from 'react-toastify';

Axios.interceptors.response.use(null,error =>{
    const ExpectedError = error.response && error.response.status >= 400 && error.response.status <500;

    if(!ExpectedError){
        logger.log(error);
        toast("An unexpected error occurred!!");
    }
    return Promise.reject(error);
});

export function setJwt(jwt){
    Axios.defaults.headers.common['x-auth-token'] = jwt;
}
const exportedObject = {
    get:Axios.get,
    post:Axios.post,
    put:Axios.put,
    delete: Axios.delete,
    setJwt
};

export default exportedObject;