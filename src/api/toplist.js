/*
 * @Author: your name
 * @Date: 2022-02-11 16:40:10
 * @LastEditTime: 2022-02-11 17:03:56
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\api\toplist.js
 */
import request from "@/api/request"; // 引入封装好的axios

/**
 * @description: 所有榜单
 */
export function toplistApi() {
  return request({
    url: "toplist",
    method: "get",
  });
}
