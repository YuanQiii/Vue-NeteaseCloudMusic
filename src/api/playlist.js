/*
 * @Author: your name
 * @Date: 2021-12-16 21:42:31
 * @LastEditTime: 2021-12-18 10:47:02
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\api\playlist.js
 */
import request from "@/api/request"; // 引入封装好的axios

/**
 * @description: 创建歌单
 * @param {*} name
 * @param {*} type
 */
export function playlistCreateApi(name, type = "NORMAL") {
  return request({
    url: "playlist/create",
    method: "get",
    params: {
      name,
      type,
    },
  });
}

/**
 * @description: 对歌单添加或删除歌曲
 * @param {*} op 操作，add/del
 * @param {*} pid   歌单id
 * @return {*}
 */
export function playlistTracksApi(op, pid, tracks) {
  return request({
    url: "playlist/tracks",
    method: "get",
    params: {
      op,
      pid,
      tracks,
    },
  });
}

/**
 * @description: 获取歌单所有歌曲
 * @param {*} id
 * @return {*}
 */
export function playlistTrackAllApi(id) {
  return request({
    url: "playlist/track/all",
    method: "get",
    params: {
      id,
    },
  });
}
