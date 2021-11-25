<!--
 * @Author: your name
 * @Date: 2021-11-10 09:38:24
 * @LastEditTime: 2021-11-25 09:59:21
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Projects\NeteaseCloudMusic\Vue-NeteaseCloudMusic\src\components\login\PhoneLogin.vue
-->
<template>
  <div class="phone-login">
    <div class="main">
      <div class="phone">
        <div class="countrycode">
          +86
          <div class="icon"></div>
        </div>
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
          v-model="password"
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
            v-model="autoLogin"
          />
          <label for="auto-login" class="text">自动登录</label>
        </div>
      </div>
      <div class="login">
        <div class="button">
          <div class="button1"></div>
          <div class="button2"></div>
        </div>
        <div class="text" @click="login">{{ loginButtonText }}</div>
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
  </div>
</template>

<script>
import md5 from "js-md5";

import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations } = createNamespacedHelpers("login");

const userNamespeace = createNamespacedHelpers("user");
const userMapMutations = userNamespeace.mapMutations;

import {
  cellPhoneCaptchaApi,
  cellPhonePasswordApi,
  captchaSentApi,
  captchaVerifyApi,
  cellphoneCheckApi,
} from "@/api/login.js";

import { debounce } from "@/utils/debounce.js";

export default {
  name: "PhoneLogin",

  data() {
    return {
      phone: "18908077873",
      phoneExist: false,

      captcha: "",
      captchaCorrect: false,

      password: "",
      passwordCorrect: false,

      allowSend: true,
      receive: false,

      mode: "captcha",
      warn: "",
      loginButtonText: "登录",

      phoneRegExp: /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/,

      autoLogin: false,
    };
  },
  watch: {
    autoLogin(newValue) {
      this.UPDATE_AUTO_LOGIN(newValue);
    },
  },
  computed: {
    ...mapState(["loginCaptchaCount"]),

    modeText() {
      return this.mode == "captcha" ? "密码登录" : "短信登录";
    },

    phoneCorrect() {
      return this.phoneRegExp.test(this.phone);
    },

    captchaUnlimite() {
      return this.loginCaptchaCount <= 5;
    },

    md5Password() {
      return md5(this.password);
    },

    phoneWarn() {
      return [
        [this.phone, "请输入手机号"],
        [this.phoneCorrect, "请输入正确的手机号"],
        [this.verifyPhoneExistence, "该手机号尚未注册", this.phoneExist],
      ];
    },

    captchSendWarn() {
      return [
        [
          this.captchaUnlimite,
          "发送验证码超过限制：每个手机号一天只能发送5条验证码",
        ],
        [this.allowSend, "发送验证码间隔过短"],
      ];
    },

    captchaLoginWarn() {
      return [
        [this.captcha, "请输入验证码"],
        [this.verifyCaptcha, "验证码错误", this.captchaCorrect],
      ];
    },

    passwordLoginWarn() {
      return [[this.password, "请输入登录密码"]];
    },
  },
  methods: {
    ...mapMutations([
      "UPDATE_LOGIN_MODE",
      "UPDATE_LOGIN_CAPTCHA_TIP_SHOW",
      "INCREASE_LOGIN_CAPTCHA_COUNT",
      "UPDATE_AUTO_LOGIN",
      "UPDATE_LOGIN_WINDOW_SHOW",
    ]),

    ...userMapMutations(["UPDATE_USER_LOGIN_INFO"]),

    _debounce(fun, delay) {
      return debounce(fun, delay);
    },

    /**
     * @description: 切换手机号登录方式
     */
    toggleLoginMode() {
      this.mode = this.mode == "password" ? "captcha" : "password";
    },

    /**
     * @description: 获取验证码
     */
    getCaptcha() {
      this.warn = "";

      if (
        this.verifyFormat(this.phoneWarn) &&
        this.verifyFormat(this.captchSendWarn)
      ) {
        this.UPDATE_LOGIN_CAPTCHA_TIP_SHOW(true);
        setTimeout(() => {
          this.UPDATE_LOGIN_CAPTCHA_TIP_SHOW(false);
        }, 1000);

        captchaSentApi(this.phone).then((response) => {
          console.log(response["data"]["data"]);
        });

        this.allowSend = false;
        setTimeout(() => {
          this.allowSend = true;
        }, 1000 * 60);
        this.INCREASE_LOGIN_CAPTCHA_COUNT();
      }
    },

    /**
     * @description: 登录
     */
    login() {
      // 判断登录方式
      if (this.mode == "captcha") {
        this.applyCaptchaLogin();
      } else {
        this.applyPasswordLogin();
      }
    },

    /**
     * @description: 验证码登录
     */
    applyCaptchaLogin() {
      this.warn = "";
      if (
        this.verifyFormat(this.phoneWarn) &&
        this.verifyFormat(this.captchaLoginWarn)
      ) {
        this.loginButtonText = "登录中...";

        cellPhoneCaptchaApi(this.phone, this.captcha).then(
          (response) => {
            if (response["data"]["code"] == 200) {
              this.UPDATE_USER_LOGIN_INFO(response["data"]);
              this.UPDATE_LOGIN_WINDOW_SHOW(false);
            }
          },
          (error) => {
            console.log(error);
            this.loginButtonText = "登录";
          }
        );
      }
    },

    /**
     * @description: 密码登录
     */
    applyPasswordLogin() {
      this.warn = "";
      if (this.verifyFormat(this.phone)) {
        this.loginButtonText = "登录中...";

        cellPhonePasswordApi(this.phone, this.md5Password).then(
          (response) => {
            if (response["data"]["code"] == 200) {
              this.UPDATE_USER_LOGIN_INFO(response["data"]);
              this.UPDATE_LOGIN_WINDOW_SHOW(false);
            } else {
              this.warn = this.warn = "手机号或密码错误";
            }
          },
          (error) => {
            this.warn = "手机号或密码错误";
            this.loginButtonText = "登录";
            console.log(error);
          }
        );
      }
    },

    /**
     * @description: 判断手机号、验证码、密码是否符合要求
     * @param {*} warnType
     * @return {*} true/false
     */
    verifyFormat(warnType) {
      (async () => {
        for (let index = 0; index < warnType.length; index++) {
          const element = warnType[index];
          if (typeof element[0] == "function") {
            await element[0]();
            if (!element[2]) {
              return (this.warn = element[1]);
            }
          } else {
            if (!element[0]) {
              return (this.warn = element[1]);
            }
          }
        }
      })();

      return true;
    },

    /**
     * @description: 验证手机号是否注册
     */
    verifyPhoneExistence() {
      return cellphoneCheckApi(this.phone).then(
        (response) => {
          if (response["data"]["exist"] == 1) {
            this.phoneExist = true;
          } else {
            this.phoneExist = false;
          }
        },
        (error) => {
          console.log(error);
          this.phoneExist = false;
        }
      );
    },

    /**
     * @description: 检查验证码是否正确
     * @return {*}true/false
     */
    verifyCaptcha() {
      return captchaVerifyApi(this.phone, this.captcha).then(
        (response) => {
          this.captchaCorrect = response["data"]["data"];
        },
        (error) => {
          this.captchaCorrect = false;
        }
      );
    },

    /**
     * @description: 显示验证码已发送提示信息
     */
    showCaptchaTip() {
      this.UPDATE_LOGIN_CAPTCHA_TIP_SHOW(true);

      setTimeout(() => {
        this.UPDATE_LOGIN_CAPTCHA_TIP_SHOW(false);
      }, 1000);
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
        .icon {
          position: absolute;
          top: 15px;
          left: 32px;
          background-image: url(https://s2.music.126.net/style/web2/img/icon2.png?56b9f5388f2a3efdf3e44cb9a0d2a018);
          background-position: -260px -450px;
          color: #333333;
          line-height: 30px;
          width: 7px;
          height: 4px;
        }
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
        margin-left: 12px;
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
        padding: 5px 8px 5px;
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
        width: 180px;
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
