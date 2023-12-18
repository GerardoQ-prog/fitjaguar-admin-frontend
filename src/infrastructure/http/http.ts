const headers = {
  "Content-Type": "application/json",
};

const URL = "https://fitjaguar-dev-0c4fb566c3ca.herokuapp.com";

const get = async <T>(endpoint: string) => {
  const response = await fetch(URL + endpoint, {
    method: "GET",
    headers,
  });
  return (await response.json()) as T;
};

const post = async <T>(endpoint: string, body: any) => {
  const response = await fetch(URL + endpoint, {
    method: "POST",
    headers,
    body,
  });
  return (await response.json()) as T;
};

const put = async <T>(endpoint: string, body: any) => {
  const response = await fetch(URL + endpoint, {
    method: "PUT",
    headers,
    body,
  });
  return (await response.json()) as T;
};

const _delete = async <T>(endpoint: string) => {
  const response = await fetch(URL + endpoint, {
    method: "DELETE",
    headers,
  });
  return (await response.json()) as T;
};

export const http = {
  get,
  post,
  put,
  delete: _delete,
};
