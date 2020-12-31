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
export function fetchAboutUs() {
  return axios.get(API_ADDRESS_SERVICE + "about");
}
export function createContact(contact) {
  return axios.post(API_ADDRESS_SERVICE + "contact", contact);
}
export function fetchWeblog() {
  return axios.get(API_ADDRESS_SERVICE + "weblog?limit=9");
}
export function fetchAllBlogs() {
  return axios.get(API_ADDRESS_SERVICE + "weblog");
}
export function fetchCategories() {
  return axios.get(API_ADDRESS_SERVICE + "categories");
}
export function filterWeblogByCategory(id) {
  return axios.get(API_ADDRESS_SERVICE + "weblog/categories/" + id);
}

export function fetchCategoryById(id) {
  return axios.get(API_ADDRESS_SERVICE + "categories/" + id);
}
export function weblogFindById(id) {
  return axios.get(API_ADDRESS_SERVICE + "weblog/" + id);
}
export function createComment(comment) {
  return axios.post(API_ADDRESS_SERVICE + "comments/", comment);
}
export function fetchComments() {
  return axios.get(API_ADDRESS_SERVICE + "comments");
}
export function filterCommentsByWeblogId(id) {
  return axios.get(API_ADDRESS_SERVICE + "comments/" + id);
}
export function counter() {
  return axios.post(API_ADDRESS_SERVICE + "counter", null);
}
export function fetchMainDetail() {
  return axios.get(API_ADDRESS_SERVICE + "managePages/main");
}
export function fetchFooterDetail() {
  return axios.get(API_ADDRESS_SERVICE + "managePages/footer");
}
export function fetchVideos() {
  return axios.get(API_ADDRESS_SERVICE + "managePages/video");
}
