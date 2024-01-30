import http from './httpservice';
import config from '../../config.json';
const {apiUrl} = config;

export function getProducts(){
    return http.get(apiUrl+'/products');
}

export function getProductInfo(id){
    return http.get(apiUrl+`/products/${id}`);
}

export function saveProduct(product){
    if(product._id){
        let body = {...product};
        delete body._id;
        http.put(apiUrl+'/products/'+product._id,body);
    }
    else{
        http.post(apiUrl +'/products/',product);
    }
};

export function deleteProduct(id){
    return http.delete(apiUrl+`/products/${id}`);
}