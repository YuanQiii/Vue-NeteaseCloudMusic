/*
 * @Author: your name
 * @Date: 2021-11-11 16:41:11
 * @LastEditTime: 2021-11-11 17:36:50
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Projects\NeteaseCloudMusic\Vue-NeteaseCloudMusic\src\api\login.js
 */
import request from "@/api/request"; // 引入封装好的axios

// QRKey
export function QRKeyApi(params) {
    return request({
        url: "login/qr/key",
        method: "get",
        params
    });
}

// QRCreate
export function QRCreateApi(params) {
    return request({
        url: "login/qr/create",
        method: "get",
        params
    });
}

// QRCheck
export function QRCheckApi(params) {
    return request({
        url: "login/qr/check",
        method: "get",
        params
    });
}
