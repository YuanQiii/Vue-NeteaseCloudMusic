/*
 * @Author: your name
 * @Date: 2022-02-14 14:59:34
 * @LastEditTime: 2022-02-14 14:59:35
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\api\album.js
 */
import request from "@/api/request"; // 引入封装好的axios

// 专辑内容
export function albumApi(id) {
  return request({
    url: "album",
    method: "get",
    params: {
      id,
    },
  });
}
