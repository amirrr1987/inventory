import axios from "axios";
// const BASE_API_URL = "https://fakestoreapi.com";

axios.defaults.baseURL = "https://fakestoreapi.com";
// axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
// axios.defaults.headers.post["Content-Type"] =
//   "application/x-www-form-urlencoded";

export async function GetProductsApi() {
  return await axios.get("/products");
}

export async function GetProductApi(id: string) {
  return await axios.get(`/products/${id}`);
}

export async function PutProductApi(id: string) {
  return await axios.put(`/products/${id}`);
}

export async function GetCategoriesApi() {
  return await axios.get("/products/categories");
}

export async function GetUserCartApi(id: string) {
  return await axios.get(`/carts/user/${id}`);
}
