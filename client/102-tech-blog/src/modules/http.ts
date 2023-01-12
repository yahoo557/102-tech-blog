import axios from "axios";


const getUrl = (api: string): string => {
  const BASE_URL = `http://127.0.0.1:3000`;
  return api.startsWith("http") ? api : BASE_URL + api;
};

export const httpGet = (
  api: string,
  onSuccess: Function,
  onFailed: Function
) => {
  const url = getUrl(api);
  axios
    .get(url)
    .then((res) => {
      if (res.status === 200) onSuccess(res.data);
      if (res.status !== 200) onFailed(res.data);
    })
    .catch((err) => {
      onFailed(err);
    });
};

export const httpPost = (
  api: string,
  body: object,
  onSuccess: Function,
  onFailed: Function
) => {
  const url = getUrl(api);
  axios
    .post(url, body)
    .then((res) => {
      if (res.status === 200) onSuccess(res.data);
      if (res.status !== 200) onFailed(res.data);
    })
    .catch((err) => {
      onFailed(err);
    });
};
