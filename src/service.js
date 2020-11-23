import axios from "axios";
import { API_ADDRESS_SERVICE } from "./env";

export function getProduct() {
  return axios.get(API_ADDRESS_SERVICE + "products");
}
export function getProductById(id) {
  return axios.get(API_ADDRESS_SERVICE + "products/" + id);
}

export function checkout(userInfo) {
  return axios.post(API_ADDRESS_SERVICE + "checkout", userInfo);
}

export function searchTracking(code) {
  return axios.get(API_ADDRESS_SERVICE + "tracking/" + code);
}
