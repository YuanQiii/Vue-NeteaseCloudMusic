/*
 * @Author: your name
 * @Date: 2021-11-23 17:59:07
 * @LastEditTime: 2021-11-23 18:01:02
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\utils\debounce.js
 */

/**
 * @description: 防抖
 * @param {*} fun
 * @param {*} delay
 * @return {*}
 */
export function debounce(fun, delay) {
  return function (args) {
    let that = this
    let _args = args
    clearTimeout(fun.id)
    fun.id = setTimeout(function () {
      fun.call(that, _args)
    }, delay)
  }
}