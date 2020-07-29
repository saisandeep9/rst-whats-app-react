import http from "./httpService";
// import { read } from "joi-browser";

function usersUrl(id) {
  return process.env.REACT_APP_API_URL + "/users" + (id ? "/" + id : "");
}

export function getusers() {
  return http.get(usersUrl());
}

export async function createusers(data) {
  return http.post(usersUrl(), data);
}

export async function updateusers(id) {
  return http.put(usersUrl(id));
}
