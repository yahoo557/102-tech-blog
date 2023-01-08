import axios from 'axios' ;
import dotenv from 'dotenv';

dotenv.config();

export default () => {
  const BASE_URL = `${process.env.BASE_URL}:${process.env.BASE_PORT}/app`;
  const httpGet = (api: string, onSuccess: Function, onFailed: Function) => {
    const url = api.startsWith("http") ? api : BASE_URL + api;
    axios.get(url).then((res) => {
      if (res.status === 200) onSuccess(res.data);
    });
  };

  // POST 메소드 모듈 제작중
  const httpPost = (api: string, body: object, onSuccess: Function, onFailed: Function) => {
    const url = api.startsWith("http") ? api : BASE_URL + api;
    axios.post(url).then((res) => {});
  };
  return {
    httpGet,
  };
};
