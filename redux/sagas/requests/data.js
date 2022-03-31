import axios from "axios";

export function requestGetData() {
  return axios.request({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/todos"
  });
}