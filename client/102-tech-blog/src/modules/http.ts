import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export default () => {
  const getUrl = (api: string): string => {
    const BASE_URL = `${process.env.BASE_URL}:${process.env.BASE_PORT}/app`;
    return api.startsWith("http") ? api : BASE_URL + api;
  };

  const httpGet = (api: string, onSuccess: Function, onFailed: Function) => {
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

  const httpPost = (
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
  return {
    httpGet,
    httpPost,
  };
};
