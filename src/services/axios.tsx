import axios from "axios";

export async function createContainerApi(data: any) {
  return await axios.post("/", data);
}
