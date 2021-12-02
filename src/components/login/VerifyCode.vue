<!--
 * @Author: your name
 * @Date: 2021-12-01 16:59:46
 * @LastEditTime: 2021-12-02 17:52:05
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\components\login\VerifyCode.vue
-->
<template>
  <div class="verify-code">
    <div class="main">
      <div class="phone">你的手机号：+86 {{ partPhone }}</div>
      <div class="text">为了安全，我们会给你发送短信验证码</div>
      <div class="code">
        <code-input @getCaptcha="getCaptcha" />
      </div>
      <div class="error">
        <div class="tip">
          <div class="icon"></div>
          <div class="text">验证码错误</div>
        </div>
        <div class="time">{{ countdownTime }}</div>
      </div>
      <login-button />
    </div>
    <div class="bottom">
      <div class="text">返回登录</div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapState } = createNamespacedHelpers("login");

import LoginButton from "@/ui/Button/LoginButton.vue";
import CodeInput from "@/ui/Input/CodeInput.vue";

export default {
  name: "VerifyCode",
  components: { LoginButton, CodeInput },

  data() {
    return {
      countdownTime: 60,
      captcha: "",
    };
  },
  computed: {
    ...mapState(["loginPhone", "loginPassword"]),
    partPhone() {
      return `${this.loginPhone.slice(0, 3)}****${this.loginPhone.slice(-4)}`;
    },
  },
  methods: {
    getCaptcha(value) {
      this.captcha = value;
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

  .main {
    display: flex;
    flex-direction: column;
    width: 220px;
    height: 230px;

    .phone {
      color: #666;
      margin-top: 30px;
    }
    .text {
      color: #999;
      margin-top: 5px;
    }
    .code {
      margin-top: 15px;
    }
  }
}
</style>