import http from "./httpService";

function messageUrl() {
  return process.env.REACT_APP_API_URL + "/message";
}

export function getmessages() {
  return http.get(messageUrl());
}

export async function createmessage(data) {
  return http.post(messageUrl(), data);
}
