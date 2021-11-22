<!--
 * @Author: your name
 * @Date: 2021-11-10 09:38:24
 * @LastEditTime: 2021-11-22 17:59:29
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

    <div class="tip">
      <captcha-tip />
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations } = createNamespacedHelpers("login");

const userNamespeace = createNamespacedHelpers("user");
const userMapState = userNamespeace.mapState;
const userMapMutations = userNamespeace.mapMutations;

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
        "发送验证码超过限制：每个手机号一天只能发送5条验证码",
      ],
      warnIndex: -1,
      phoneRegExp: /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/,
      loginButtonText: "登录",
      autoLogin: false,
      loginStatus: 0,
      rules: [
        {
          match() {
            return this.verifyPhoneFormat();
          },
          action(result) {
            if (!result) {
              this.warnIndex = 0;
            }
          },
        },
        {
          match() {
            return this.captcha;
          },
          action(result) {
            if (!result) {
              this.warnIndex = 1;
            }
          },
        },
        {
          match() {
            return this.sent;
          },
          action(result) {
            if (result) {
              this.warnIndex = 2;
            }
          },
        },
        {
          match() {
            return this.verifyCaptcha();
          },
          action(result) {
            if (!result) {
              this.warnIndex = 3;
            }
          },
        },
      ],
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
    warn() {
      return this.warnIndex == -1 ? "" : this.warnText[this.warnIndex];
    },
  },
  methods: {
    ...mapMutations([
      "UPDATE_LOGIN_MODE",
      "UPDATE_LOGIN_CAPTCHA_TIP_SHOW",
      "INCREASE_LOGIN_CAPTCHA_COUNT",
      "UPDATE_AUTO_LOGIN",
    ]),

    ...userMapMutations([]),

    /**
     * @description: 切换手机号登录方式
     */
    toggleLoginMode() {
      this.mode = this.mode == "password" ? "captcha" : "password";
    },

    /**
     * @description: 发送验证码
     */
    getCaptcha() {
      if (this.loginCaptchaCount <= 5) {
        if (!this.sent) {
          if (this.verifyPhoneFormat()) {
            captchaSentApi(this.phone).then((response) => {
              this.receive = response["data"]["data"];
            });
            this.sent = true;
            setTimeout(() => {
              this.sent = false;
            }, 1000 * 60);

            INCREASE_LOGIN_CAPTCHA_COUNT();
          } else {
          }
        } else {
          this.warnIndex = 2;
        }
      } else {
        this.warnIndex = 6;
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
      }
    },

    /**
     * @description: 验证码登录
     */
    applyCaptchaLogin() {
      // 检查验证码是否填写
      if (this.captcha) {
        // 检查手机号格式
        if (this.verifyPhoneFormat()) {
          // 检查验证码是否正确
          if (this.verifyCaptcha()) {
            this.loginButtonText = "登录中...";

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
        this.warnIndex = 1;
      }
    },

    /**
     * @description: 验证手机号格式
     * @return {*}true/false
     */
    verifyPhoneFormat() {
      if (this.phoneRegExp.test(this.phone)) {
        return true;
      } else {
        return false;
      }
    },

    /**
     * @description: 验证手机号是否注册
     */
    verifyPhoneExistence() {
      this.cellphoneCheckApi(this.phone);
    },

    /**
     * @description: 检查验证码是否正确
     * @return {*}true/false
     */
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
