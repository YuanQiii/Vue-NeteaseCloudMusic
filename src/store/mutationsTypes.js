/*
 * @Author: your name
 * @Date: 2021-11-16 17:56:55
 * @LastEditTime: 2021-11-24 14:50:26
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Projects\NeteaseCloudMusic\Vue-NeteaseCloudMusic\src\store\mutationsTypes.js
 */

// 自动登录
const UPDATE_AUTO_LOGIN = 'UPDATE_AUTO_LOGIN'

// 登录窗口显示
const UPDATE_LOGIN_WINDOW_SHOW = "UPDATE_LOGIN_WINDOW_SHOW";

// 登录窗口移动
const UPDATE_LOGIN_WINDOW_MOVE = "UPDATE_LOGIN_WINDOW_MOVE";

// 登录方式
const UPDATE_LOGIN_MODE = "UPDATE_LOGIN_MODE";

// 登录是否同意政策
const UPDATE_LOGIN_POLICY = "UPDATE_LOGIN_POLICY";

// 登录政策提示显示
const UPDATE_LOGIN_POLICY_TIP_SHOW = "UPDATE_LOGIN_POLICY_TIP_SHOW";

// 登录验证码发送提示
const UPDATE_LOGIN_CAPTCHA_TIP_SHOW = "UPDATE_LOGIN_CAPTCHA_TIP_SHOW";

// 登录发送验证码数量
const INCREASE_LOGIN_CAPTCHA_COUNT = "INCREASE_LOGIN_CAPTCHA_COUNT";

// 用户登录信息
const UPDATE_USER_LOGIN_INFO = "UPDATE_USER_LOGIN_INFO";


export {
  UPDATE_AUTO_LOGIN,
  UPDATE_LOGIN_WINDOW_SHOW,
  UPDATE_LOGIN_WINDOW_MOVE,
  UPDATE_LOGIN_MODE,
  UPDATE_LOGIN_POLICY,
  UPDATE_LOGIN_POLICY_TIP_SHOW,
  UPDATE_LOGIN_CAPTCHA_TIP_SHOW,
  INCREASE_LOGIN_CAPTCHA_COUNT,
  UPDATE_USER_LOGIN_INFO
}




