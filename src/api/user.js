/*
 * @Author: your name
 * @Date: 2021-12-06 09:24:01
 * @LastEditTime: 2021-12-06 10:01:37
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\api\user.js
 */
import request from "@/api/request"; // 引入封装好的axios

/**
 * @description: 账号信息
 */
export function userAccountApi() {
  return request({
    url: "user/account",
    method: "get"
  });
}

/**
 * @description: 用户详情
 * @param {*} uid
 */
export function userDetailApi(uid) {
  return request({
    url: "user/detail",
    method: "get",
    params: {
      uid
    }
  });
}