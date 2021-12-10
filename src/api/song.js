/*
 * @Author: your name
 * @Date: 2021-10-19 09:48:46
 * @LastEditTime: 2021-12-10 16:45:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Projects\NeteaseCloudMusic\Vue-NeteaseCloudMusic\src\api\song.js
 */
import request from "@/api/request"; // 引入封装好的axios


/**
 * @description: 歌曲详情
 * @param {*} id
 * @param {*} s
 */
export function songDetailApi(ids) {
  return request({
    url: "song/detail",
    method: "get",
    params: {
      ids
    }
  });
}

/**
 * @description: 歌词Api
 * @param {*} params id
 * @return {*}
 */
export function songLyricApi(id) {
  return request({
    url: "lyric",
    method: "get",
    params: {
      id
    }
  });
}

/**
 * @description: 歌曲播放地址
 * @param {*} params
 * @return {*}
 */
export function songUrlApi(params) {
  return request({
    url: 'song/url',
    method: 'get',
    params
  })
}
