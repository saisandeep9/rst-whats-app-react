import http from "./httpService";

function sendMessageUrl(id) {
  return process.env.REACT_APP_API_URL + "/sendMessage" + (id ? "/" + id : "");
}

export function getmessages() {
  return http.get(sendMessageUrl());
}

export async function sendmessage(id) {
  return http.post(sendMessageUrl(id));
}

export async function deletemessage(id) {
  return http.delete(sendMessageUrl(id));
}
