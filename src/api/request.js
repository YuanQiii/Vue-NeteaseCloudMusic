import axios from "axios";

//1 创建axios baseURL 超时时间
const service = axios.create({
  baseURL: "https://netease-cloud-music-api-fv1vbkx8c-yuanqiii.vercel.app/",
  timeout: 10000,
});
//2 请求
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    //捕获错误信息
    return Promise.reject(error);
  }
);
//3 响应
service.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    return Promise.reject(error); //对数据进一步处理
  }
);
//4 抛出
export default service;
