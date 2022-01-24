/*
 * @Author: your name
 * @Date: 2021-12-06 09:24:01
 * @LastEditTime: 2022-01-24 17:56:35
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
      uid,
    },
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
      uid,
    },
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
      offset,
    },
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
      lasttime,
    },
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
      offset,
    },
  });
}

/**
 * @description: 分享文本、歌曲、歌单、mv、电台、电台节目到动态
 * @param {*} id 资源 id （歌曲，歌单，mv，电台，电台节目对应 id）
 * @param {*} type 资源类型，默认歌曲 song，可传 song,playlist,mv,djradio,djprogram
 * @param {*} msg 内容，140 字限制，支持 emoji，@用户名（/user/follows接口获取的用户名，用户名后和内容应该有空格），图片暂不支持
 */
export function userShareResoureApi(id, type = "song", msg = "") {
  return request({
    url: "share/resource",
    method: "get",
    params: {
      id,
      type,
      msg,
    },
  });
}

/**
 * @description: 发送私信(带歌曲)
 * @param {*} user_ids
 * @param {*} id
 * @param {*} msg
 * @return {*}
 */
export function userSendSongApi(user_ids, id, msg) {
  return request({
    url: "share/resource",
    method: "get",
    params: {
      user_ids,
      id,
      msg,
    },
  });
}
