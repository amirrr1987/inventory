import axios from "axios";
const BASE_API_URL = "https://fakestoreapi.com";

export async function GetProductsApi() {
  return await axios.get(`${BASE_API_URL}/products`);
}

export async function GetProductApi(id: string) {
  return await axios.get(`${BASE_API_URL}/products/${id}`);
}

export async function PutProductApi(id: string) {
  return await axios.put(`${BASE_API_URL}/products/${id}`);
}
