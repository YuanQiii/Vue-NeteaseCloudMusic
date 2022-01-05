/*
 * @Author: your name
 * @Date: 2021-12-06 09:24:01
 * @LastEditTime: 2022-01-05 09:58:18
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\api\user.js
 */
import request from "@/api/request"; // 引入封装好的axios

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

/**
 * @description: 用户信息
 */
export function userSubcountApi() {
  return request({
    url: "user/subcount",
    method: "get",
  });
}

/**
 * @description: 用户歌单
 */
export function userPlaylistApi(uid) {
  return request({
    url: "user/playlist",
    method: "get",
    params: {
      uid
    }
  });
}

/**
 * @description: 用户私信
 */
export function userMsgPrivateApi(limit = 30, offset = 0) {
  return request({
    url: "msg/private",
    method: "get",
    params: {
      limit,
      offset
    }
  });
}

/**
 * @description: 用户动态消息
 */
export function userEventApi(pagesize = 20, lasttime = -1) {
  return request({
    url: "event",
    method: "get",
    params: {
      pagesize,
      lasttime
    }
  });
}

/**
 * @description: 用户关注列表
 */
export function userFollowsApi(uid, limit = 30, offset = 0) {
  return request({
    url: "user/follows",
    method: "get",
    params: {
      uid,
      limit,
      offset
    }
  });
}

