/*
 * @Author: your name
 * @Date: 2021-10-19 09:48:46
 * @LastEditTime: 2022-02-24 21:26:09
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\api\request.js
 */
import axios from "axios";

//1 创建axios baseURL 超时时间
const service = axios.create({
  baseURL: "http://101.43.190.246:3000/",
  timeout: 10000,
  withCredentials: true,
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
