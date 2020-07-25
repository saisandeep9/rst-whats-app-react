import http from "./httpService";

function messageUrl(id) {
  return process.env.REACT_APP_API_URL + "/message" + (id ? "/" + id : "");
}

export function getmessages() {
  return http.get(messageUrl());
}

export async function createmessage(data) {
  return http.post(messageUrl(), data);
}

export async function deletemessage(id) {
  return http.delete(messageUrl(id));
}
