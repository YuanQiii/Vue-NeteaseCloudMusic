/*
 * @Author: your name
 * @Date: 2021-10-19 09:48:46
 * @LastEditTime: 2021-10-29 16:24:13
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \Projects\NeteaseCloudMusic\Vue-NeteaseCloudMusic\src\utils\elementIsActive.js
 */
export function elementIsActive(current, self, origin = undefined) {

    if (origin) {
        return current == self ? `${origin} active` : `${origin} deactive`
    }

    return current == self ? 'active' : 'deactive'

}