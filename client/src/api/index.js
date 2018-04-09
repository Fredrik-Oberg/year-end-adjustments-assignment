import axios from "axios";
import config from "./config";

const apiCaller = axios.create({
  baseURL: config.apiRoot,
  headers: config.headers
});

const requests = {
  get: url => apiCaller.get(`${config.apiRoot}${url}`).then(res => res.data),
  post: (url, body) =>
    apiCaller.post(`${config.apiRoot}${url}`, body).then(res => res.data)
};

const Client = {
  get: id => requests.get(`/client/${id}`)
};
const Backoffice = {
  post: id => requests.post(`/backoffice/${id}`)
};
export { Client, Backoffice };
