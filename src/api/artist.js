/*
 * @Author: your name
 * @Date: 2022-02-22 21:13:51
 * @LastEditTime: 2022-02-22 21:22:40
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\api\artist.js
 */

import request from "@/api/request"; // 引入封装好的axios


/**
 * @description: 歌手详情
 * @param {*} id
 */
export function artistDetailApi(id) {
  return request({
    url: "artist/detail",
    method: "get",
    params: {
      id
    }
  });
}