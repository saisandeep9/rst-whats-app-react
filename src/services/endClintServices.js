import http from "./httpService";

function clientUrl() {
  return process.env.REACT_APP_API_URL + "/clients";
}

export function getclients() {
  return http.get(clientUrl());
}

export function uploade(data) {
  return http.post(clientUrl(), data);
}

export function mobileNumberCount() {
  return http.get(clientUrl() + "/count");
}
