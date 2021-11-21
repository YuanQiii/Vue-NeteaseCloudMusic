<!--
 * @Author: your name
 * @Date: 2021-11-10 09:38:24
 * @LastEditTime: 2021-11-21 17:23:01
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Projects\NeteaseCloudMusic\Vue-NeteaseCloudMusic\src\components\login\PhoneLogin.vue
-->
<template>
  <div class="phone-login">
    <div class="main">
      <div class="phone">
        <div class="countrycode">+86</div>
        <input
          type="text"
          placeholder="请输入手机号"
          autocomplete="off"
          class="input"
          v-model="phone"
        />
      </div>
      <div class="captcha" v-show="mode == 'captcha'">
        <div class="box">
          <input
            type="text"
            placeholder="请输入验证码"
            autocomplete="off"
            class="input"
            v-model="captcha"
          />
        </div>
        <div class="send" @click="getCaptcha">
          <img
            src="../../assets/login/captcha_button.png"
            alt=""
            class="image"
          />
          <div class="text">获取验证码</div>
        </div>
      </div>
      <div class="password" v-show="mode == 'password'">
        <input
          class="input"
          type="password"
          placeholder="请输入密码"
          autocomplete="new-password"
        />
        <div class="forget" @click="UPDATE_LOGIN_MODE('reset')">
          <div class="text">忘记密码？</div>
        </div>
      </div>
      <div class="error" v-show="warn">
        <div class="icon"></div>
        <div class="text">
          {{ warn }}
        </div>
      </div>
      <div class="action">
        <div class="mode-text" @click="toggleLoginMode">{{ modeText }}</div>
        <div class="auto">
          <input
            type="checkbox"
            name="auto-login"
            id="auto-login"
            class="input"
          />
          <label for="auto-login" class="text">自动登录</label>
        </div>
      </div>
      <div class="login">
        <div class="button">
          <div class="button1"></div>
          <div class="button2"></div>
        </div>
        <div class="text" @click="login">登录</div>
      </div>
    </div>

    <div class="bottom">
      <div class="other" @click="UPDATE_LOGIN_MODE('menu')">
        &lt; 其他登录方式
      </div>
      <div class="register" @click="UPDATE_LOGIN_MODE('register')">
        没有帐号？免费注册 &gt;
      </div>
    </div>

    <div class="tip">
      <captcha-tip />
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapMutations } = createNamespacedHelpers("login");

import {
  cellPhoneCaptchaApi,
  cellPhonePasswordApi,
  captchaSentApi,
  captchaVerifyApi,
  cellphoneCheckApi,
} from "@/api/login.js";

import CaptchaTip from "../Tip/CaptchaTip.vue";

export default {
  name: "PhoneLogin",
  components: {
    CaptchaTip,
  },

  data() {
    return {
      phone: "18908077873",
      captcha: "",
      password: "",
      sent: false,
      receive: false,
      sendCaptcha: null,
      mode: "captcha",
      warnText: [
        "请输入正确的手机号",
        "请输入验证码",
        "发送验证码间隔过短",
        "验证码错误",
        "该手机号尚未注册",
        "手机号或密码错误",
      ],
      warnIndex: -1,
      phoneRegExp: /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/,
    };
  },
  computed: {
    modeText() {
      return this.mode == "captcha" ? "密码登录" : "短信登录";
    },
    warn() {
      return this.warnIndex == -1 ? "" : this.warnText[this.warnIndex];
    },
  },
  methods: {
    ...mapMutations(["UPDATE_LOGIN_MODE"]),

    getCaptcha() {
      if (!this.sent) {
        if (this.verifyPhoneFormat()) {
          captchaSentApi(this.phone).then((response) => {
            this.receive = response["data"]["data"];
          });
          this.sent = true;
          setTimeout(() => {
            this.sent = false;
          }, 1000 * 60);
        }
      } else {
        this.warnIndex = 2;
      }
    },

    toggleLoginMode() {
      this.mode = this.mode == "password" ? "captcha" : "password";
    },

    login() {
      if (this.captcha) {
        if (this.mode == "captcha") {
          if (this.verifyPhoneFormat()) {
            if (this.verifyCaptcha()) {
              cellPhoneCaptchaApi(this.phone, this.captcha).then(
                (response) => {
                  console.log(response);
                },
                (error) => {
                  console.log(error);
                }
              );
            } else {
              this.warnIndex = 3;
            }
          } else {
            this.warnIndex = 0;
          }
        } else {
        }
      } else {
        this.warnIndex = 1;
      }
    },

    // 验证手机号格式
    verifyPhoneFormat() {
      if (this.phoneRegExp.test(this.phone)) {
        return true;
      } else {
        this.warnIndex = 0;
        return false;
      }
    },

    // 检查验证码格式
    verifyCaptchaFormat() {},

    // 验证手机号是否注册
    verifyPhoneExistence() {
      this.cellphoneCheckApi(this.phone);
    },

    // 检查验证码是否正确
    verifyCaptcha() {
      return captchaVerifyApi(this.phone, this.captcha).then(
        (response) => {
          return response["data"]["data"];
        },
        (error) => {
          console.log(
            "🚀 ~ file: PhoneLogin.vue ~ line 199 ~ verifyCaptcha ~ error",
            error
          );
          this.warnIndex = 3;
          return false;
        }
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.phone-login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  margin-top: 15px;

  .main {
    height: 250px;
    .phone {
      position: relative;
      margin: 0;
      border: 1px solid #cdcdcd;
      border-radius: 2px;
      z-index: 10;
      display: flex;
      overflow: hidden;
      margin-top: 30px;
      .countrycode {
        color: #333;
        position: relative;
        display: block;
        height: 30px;
        width: 20px;
        line-height: 30px;
        padding: 0 18px 0 5px;
        border-right: 1px solid #cdcdcd;
      }
      .input {
        padding: 5px 8px 5px;
        width: 136px;
        height: 20px;
        line-height: 20px;
        border: none;
        outline: none;
      }
    }
    .captcha {
      display: flex;
      margin-top: 10px;
      .box {
        border: 1px solid #cdcdcd;
        border-radius: 2px;
        .input {
          padding: 5px 8px 5px;
          width: 120px;
          height: 20px;
          line-height: 20px;
          border: none;
          outline: none;
        }
      }
      .send {
        height: 31px;
        line-height: 31px;
        color: #333;
        margin-left: 10px;
        cursor: pointer;
        &:hover {
          opacity: 0.8;
        }
        .text {
          position: relative;
          top: -42px;
          left: 5px;
        }
      }
    }
    .password {
      height: 30px;
      display: flex;
      border: 1px solid #cdcdcd;
      border-radius: 2px;
      margin-top: 10px;
      .input {
        border: none;
        outline: none;
        padding-left: 5px;
      }
      .forget {
        cursor: pointer;
        .text {
          color: #666;
          margin-top: 8px;
          &:hover {
            border-bottom: #333 solid 1px;
          }
        }
      }
    }
    .error {
      display: flex;
      margin-top: 5px;
      .icon {
        width: 14px;
        height: 14px;
        background-image: url(https://s2.music.126.net/style/web2/img/icon.png);
        background-position: -50px -270px;
      }
      .text {
        margin-left: 10px;
        margin-bottom: 5px;
        color: #e33232;
      }
    }
    .action {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
      color: #666;
      height: 30px;

      .mode-text {
        cursor: pointer;
        height: 12px;
        &:hover {
          border-bottom: 1px solid #000;
        }
      }
      .auto {
        display: flex;
        .input {
          margin-right: 5px;
        }
      }
    }
    .login {
      display: flex;
      flex-direction: column;
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
      .button {
        display: flex;
        height: 30px;

        .button1 {
          width: 215px;
          background-image: url(https://s2.music.126.net/style/web2/img/button2.png?328b698cc3d7fa28ef0aedeed773d27c);
          background-position: 0 -387px;
        }
        .button2 {
          width: 5px;
          background-image: url(https://s2.music.126.net/style/web2/img/button2.png?328b698cc3d7fa28ef0aedeed773d27c);
          background-position: right -428px;
        }
      }
      .text {
        width: 220px;
        text-align: center;
        color: #fff;
        position: relative;
        height: 30px;
        line-height: 30px;
        top: -30px;
      }
    }
  }
  .bottom {
    width: calc(100% - 40px);
    display: flex;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    height: 48px;
    border-top: 1px solid #c6c6c6;
    border-radius: 0 0 4px 4px;
    line-height: 48px;
    background-color: #f7f7f7;
    .other {
      color: #0c72c3;
      cursor: pointer;
    }
    .register {
      color: #999;
      cursor: pointer;
    }
  }
}
</style>
