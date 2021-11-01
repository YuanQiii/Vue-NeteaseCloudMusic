/*
 * @Author: your name
 * @Date: 2021-10-19 09:48:46
 * @LastEditTime: 2021-11-01 09:31:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Projects\NeteaseCloudMusic\Vue-NeteaseCloudMusic\src\api\song.js
 */
import request from "@/api/request"; // 引入封装好的axios

/**
 * @description: 歌曲详情
 * @param {*} params
 * @return {*}
 */
export function songDetailApi(params) {
  return request({
    url: "song/detail",
    method: "get",
    params,
  });
}

/**
 * @description: 歌词Api
 * @param {*} params id
 * @return {*}
 */
export function songLyricApi(params) {
  return request({
    url: "lyric",
    method: "get",
    params,
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
