import http from "./httpService";
// import { read } from "joi-browser";

function driversUrl() {
  return process.env.REACT_APP_API_URL + "/drivers";
}

export function getdrivers() {
  return http.get(driversUrl());
}

export async function createdriver(data) {
  return http.post(driversUrl(), data);
}
