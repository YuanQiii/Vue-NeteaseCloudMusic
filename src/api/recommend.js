/*
 * @Author: your name
 * @Date: 2021-10-19 09:48:46
 * @LastEditTime: 2022-02-07 17:26:38
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\api\recommend.js
 */
import request from "@/api/request"; // 引入封装好的axios

// banner
export function bannerApi() {
  return request({
    url: "banner",
    method: "get",
  });
}

/**
 * @description: 推荐歌单
 * @param {*} limit
 */
export function personalizedPlaylistApi(limit = 30) {
  return request({
    url: "personalized",
    method: "get",
    params: {
      limit,
    },
  });
}

/**
 * @description: 新碟上架
 * @param {*} limit
 */
export function albumNewestApi() {
  return request({
    url: "album/newest",
    method: "get",
  });
}
