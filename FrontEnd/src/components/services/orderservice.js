import http from "./httpservice";
import config from "../../config.json";
const { apiUrl } = config;

export function uniqueOrder() {
  return http.post(apiUrl + "/orders");
}

export function getOrders(orderId) {
  return http.get(apiUrl + "/orders/" + orderId);
}
export function addBuyNow(orderId, productId) {
  let body = {
    productid: productId,
  };
  return http.put(apiUrl + "/orders/" + orderId, body);
}

export function cancelOrder(orderId, ProductId, orderno) {
  let body = { orderno: orderno, productid: ProductId };
  return http.put(apiUrl + "/orders/deleteorder/" + orderId, body);
}
