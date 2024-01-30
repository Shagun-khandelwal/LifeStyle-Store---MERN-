import http from './httpservice';
import config from '../../config.json';
const {apiUrl} = config;


export function getUser(userid){
    return http.get(apiUrl+'/users/'+userid)
};
export function addProductToCart(user,productid){
    let body = {
        0:user,
        1:productid
    };
    return http.put(apiUrl+'/users/cartadd/'+user._id,body);
}
export function deleteProductFromCart(user,productid){
    let body = {
        pid:productid
    };
    return http.put(apiUrl+'/users/cartdelete/'+user._id,body);
    
}
export function register(user,orderid){
    return http.post(apiUrl+'/users',{
        fullname:user.fullname,
        email:user.email,
        password:user.password,
        services:user.service,
        phone:user.phone,
        address:user.address,
        city:user.city,
        state:user.state,
        pincode:user.pincode,
        order:orderid
    });
};