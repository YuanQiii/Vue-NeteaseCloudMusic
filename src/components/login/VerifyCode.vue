<!--
 * @Author: your name
 * @Date: 2021-12-01 16:59:46
 * @LastEditTime: 2021-12-03 15:00:15
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\components\login\VerifyCode.vue
-->
<template>
  <div class="verify-code">
    <div class="main">
      <div class="phone">
        你的手机号：<span class="text">+86 {{ partPhone }}</span>
      </div>
      <div class="text">为了安全，我们会给你发送短信验证码</div>
      <div class="code">
        <code-input
          @getCaptcha="getCaptcha"
          @click.native="captchaWarn = false"
        />
      </div>
      <div class="tip">
        <div class="error">
          <error-icon v-show="captchaWarn" />
          <div class="text" v-show="captchaWarn">验证码错误</div>
        </div>
        <div
          :class="_elementIsActive(tipText, '重新发送', 'time')"
          @click="sendCaptcha"
        >
          {{ tipText }}
        </div>
      </div>
      <login-button :text="buttonText" @click.native="nextStep" />
    </div>
    <div class="bottom">
      <div class="text" @click="toWindow('menu')">&lt; 返回登录</div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations } = createNamespacedHelpers("login");

import LoginButton from "@/ui/Button/LoginButton.vue";
import CodeInput from "@/ui/Input/CodeInput.vue";
import ErrorIcon from "@/ui/Icon/ErrorIcon.vue";

import { elementIsActive } from "@/utils/elementIsActive.js";
import { captchaSentApi, captchaVerifyApi } from "@/api/login.js";

export default {
  name: "VerifyCode",
  components: { LoginButton, CodeInput, ErrorIcon },

  data() {
    return {
      countdownTime: 60,
      countdownInterval: null,
      captcha: "",
      captchaWarn: false,
      buttonText: "下一步",
    };
  },
  mounted() {
    this.startCountdown();
  },
  computed: {
    ...mapState(["loginPhone", "loginPassword"]),
    partPhone() {
      return `${this.loginPhone.slice(0, 3)}****${this.loginPhone.slice(-4)}`;
    },
    tipText() {
      if (this.countdownTime) {
        return `${this.countdownTime}S`;
      } else {
        return "重新发送";
      }
    },
  },
  methods: {
    ...mapMutations(["UPDATE_LOGIN_WINDOW_SHOW", "UPDATE_LOGIN_MODE"]),

    _elementIsActive(current, self, origin) {
      return elementIsActive(current, self, origin);
    },
    /**
     * @description: 获取input组件的返回的验证码
     * @param {*} value
     */
    getCaptcha(value) {
      this.captcha = value;
      this.checkCaptcha();
    },
    /**
     * @description: 发送验证码
     */
    sendCaptcha() {
      if (this.tipText == "重新发送") {
        captchaSentApi(this.loginPhone);
        this.startCountdown();
      }
    },

    /**
     * @description: 开始倒计时
     */
    startCountdown() {
      this.countdownTime = 60;

      if (this.countdownInterval) {
        clearInterval(this.countdownInterval);
      }

      this.countdownInterval = setInterval(() => {
        this.countdownTime--;
        if (!this.countdownTime) {
          clearInterval(this.countdownInterval);
        }
      }, 1000);
    },
    /**
     * @description: 校验验证码
     */
    checkCaptcha() {
      this.buttonText = "验证中...";

      captchaVerifyApi(this.loginPhone, this.captcha).then(
        (response) => {
          if (response["data"]["data"]) {
            this.UPDATE_LOGIN_WINDOW_SHOW(false);
            //登录
          } else {
            this.captchaWarn = true;
            this.buttonText = "下一步";
          }
        },
        (error) => {
          this.captchaWarn = true;
          this.buttonText = "下一步";
        }
      );
    },
    nextStep() {},

    toWindow(mode) {
      this.UPDATE_LOGIN_MODE(mode);
    },
  },
};
</script>

<style lang="scss" scoped>
.verify-code {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  height: 277px;

  .main {
    display: flex;
    flex-direction: column;
    width: 220px;
    height: 230px;

    .phone {
      color: #666;
      margin-top: 30px;
      .text {
        color: #333;
        font-weight: 700;
      }
    }
    .text {
      color: #999;
      margin-top: 5px;
    }
    .code {
      margin-top: 15px;
    }
    .tip {
      display: flex;
      justify-content: space-between;
      margin-top: 6px;
      line-height: 18px;
      margin-bottom: 21px;
      .error {
        display: flex;
        margin-top: 2px;
        .text {
          margin-top: -2px;
          margin-left: 5px;
          color: #e33232;
        }
      }
      .time {
        color: #0c73c2;
        border-bottom: transparent 1px solid;
      }
      .active {
        cursor: pointer;
        &:hover {
          border-bottom: #0c73c2 1px solid;
        }
      }
    }
  }

  .bottom {
    width: 528px;
    height: 49px;
    background-color: #f7f7f7;
    color: #333;
    border: solid 1px #c6c6c6;
    font-size: 12px;
    line-height: 48px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    .text {
      color: #0c72c3;
      margin-left: 20px;
      cursor: pointer;
    }
  }
}
</style>