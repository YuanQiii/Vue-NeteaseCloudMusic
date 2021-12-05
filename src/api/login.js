/*
 * @Author: your name
 * @Date: 2021-11-11 16:41:11
 * @LastEditTime: 2021-12-04 13:49:16
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Projects\NeteaseCloudMusic\Vue-NeteaseCloudMusic\src\api\login.js
 */
import request from "@/api/request"; // 引入封装好的axios

/**
 * @description: 获取二维码unikey
 * @param {*} timestamp
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

/**
 * @description: 注册(修改密码)
 * @param {*} phone
 * @param {*} password
 * @param {*} captcha
 * @param {*} nickname
 */
export function registerApi(phone, password, captcha, nickname) {
  return request({
    url: "register/cellphone",
    method: "post",
    data: {
      phone,
      password,
      captcha,
      nickname,
    },
  });
}

// cellphone
/**
 * @description: 手机号验证码登录
 * @param {*} phone
 * @param {*} password
 * @param {*} captcha
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

// captchaSent
/**
 * @description: 发送验证码
 * @param {*} phone
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

/**
 * @description: 登录状态
 */
export function loginStatusApi() {
  return request({
    url: "login/status",
    method: "get",
  });
}
