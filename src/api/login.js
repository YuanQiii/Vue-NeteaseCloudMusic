/*
 * @Author: your name
 * @Date: 2021-11-11 16:41:11
 * @LastEditTime: 2021-11-24 14:07:11
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Projects\NeteaseCloudMusic\Vue-NeteaseCloudMusic\src\api\login.js
 */
import request from "@/api/request"; // 引入封装好的axios

/**
 * @description: 获取二维码unikey
 * @param {*} timestamp
 * @return {*}
 */
export function QRKeyApi(timestamp) {
  return request({
    url: "login/qr/key",
    method: "get",
    params: {
      timestamp,
    },
  });
}

/**
 * @description: 创建二维码
 * @param {*} key
 * @param {*} qrimg
 * @param {*} timestamp
 * @return {*}
 */
export function QRCreateApi(key, qrimg, timestamp) {
  return request({
    url: "login/qr/create",
    method: "get",
    params: {
      key,
      qrimg,
      timestamp,
    },
  });
}

/**
 * @description: 检查二维码是否可用
 * @param {*} key
 * @param {*} timestamp
 * @return {*}
 */
export function QRCheckApi(key, timestamp) {
  return request({
    url: "login/qr/check",
    method: "get",
    params: {
      key,
      timestamp,
    },
  });
}

// register
export function registerApi(params) {
  return request({
    url: "register/cellphone",
    method: "get",
    params,
  });
}

// cellphone
/**
 * @description: 手机号验证码登录
 * @param {*} phone
 * @param {*} password
 * @param {*} captcha
 * @return {*}
 */
export function cellPhoneCaptchaApi(phone, captcha) {
  return request({
    url: "login/cellphone",
    method: "post",
    data: {
      phone,
      captcha,
    },
  });
}

/**
 * @description: 手机号密码登录
 * @param {*} phone
 * @param {*} password
 * @return {*}
 */
export function cellPhonePasswordApi(phone, md5_password) {
  return request({
    url: "login/cellphone",
    method: "post",
    data: {
      phone,
      md5_password,
    },
  });
}

// email
export function emailApi(params) {
  return request({
    url: "login/email",
    method: "get",
    params,
  });
}

// captchaSent
/**
 * @description: 发送验证码
 * @param {*} phone
 * @return {*}
 */
export function captchaSentApi(phone) {
  return request({
    url: "captcha/sent",
    method: "get",
    params: {
      phone,
    },
  });
}

// captchaVerify
/**
 * @description: 检验验证码是否正确
 * @param {*} phone
 * @param {*} captcha
 * @return {*}
 */
export function captchaVerifyApi(phone, captcha) {
  return request({
    url: "captcha/verify",
    method: "post",
    data: {
      phone,
      captcha,
    },
  });
}

/**
 * @description: 手机号是否存在
 * @param {*} phone
 * @return {*}
 */
export function cellphoneCheckApi(phone) {
  return request({
    url: "cellphone/existence/check",
    method: "get",
    params: {
      phone,
    },
  });
}
