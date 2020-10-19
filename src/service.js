import axios from "axios";
import { API_ADDRESS_SERVICE } from "./env";

export function getProduct() {
  return axios.get(API_ADDRESS_SERVICE + "products");
}
