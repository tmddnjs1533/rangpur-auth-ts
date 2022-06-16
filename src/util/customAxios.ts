import axios from "axios";
import { apiBaseUrl } from "./url"; // 액시오스
axios.defaults.headers.get["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.baseURL = apiBaseUrl;

export const customAxiosPost = (url, data, callback) => {
  axios({
    url: "/" + url,
    method: "post",
    data: data,
  })
    .then(function (response) {
      callback(response.data);
    })
    .catch((res) => console.dir(res));
};
export const customAxios = ({ method, url, data, token, ...config }) =>
  axios({
    method,
    url,
    data: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: "Bearer " + token,
    },
    ...config,
  }).then((response) => response.data);
export const getUserData = ({ hfac }) =>
  customAxios({
    method: "post",
    url: "/user-service/users/loginInfo",
    token: hfac,
  }).then(({ statusCode, data }) => {
    if (statusCode === 200) return data;
    return window.history.back();
  });
