import jwtDecode from 'jwt-decode';
import http from './httpservice';
import config from '../../config.json';

const {apiUrl} = config;
const apiEndPoint = apiUrl + '/login';
const tokenKey = 'token';

http.setJwt(getJwt());

export async function login(email,password){
    const login = await http.post(apiEndPoint,{
        email:email,
        password:password
    });
    console.log(login)
    localStorage.setItem(tokenKey,login.data);
};

export function loginWithJwt(jwt){
    localStorage.setItem(tokenKey,jwt);
};

export function getJwt(){
    return localStorage.getItem(tokenKey);
};

export function logout(){
    localStorage.removeItem(tokenKey);
};

export function getCurrentUser(){
    try{
        const jwt = localStorage.getItem(tokenKey);
        return jwtDecode(jwt);
    }
    catch(ex){
        return null;
    }
}