<!--
 * @Author: your name
 * @Date: 2021-11-15 09:48:10
 * @LastEditTime: 2021-12-21 14:37:12
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Projects\NeteaseCloudMusic\Vue-NeteaseCloudMusic\src\components\login\LoginMenu.vue
-->
<template>
  <div class="login-menu">
    <div class="main">
      <div class="phone-login">
        <img src="../../assets/login/platform.png" alt="" />
        <div class="phone" @click="toWindow('phone')">
          <login-button :text="'手机号登录'" :disable="false" />
        </div>
        <div class="register" @click="toWindow('register')">
          <register-button :text="'注册'" />
        </div>
      </div>
      <div class="other-login">
        <div class="item">
          <img src="../../assets/login/logo_0.png" alt="" />
          <div class="text">微信登录</div>
        </div>
        <div class="item">
          <img src="../../assets/login/logo_1.png" alt="" />
          <div class="text">QQ登录</div>
        </div>
        <div class="item">
          <img src="../../assets/login/logo_2.png" alt="" />
          <div class="text">微博登录</div>
        </div>
        <div class="item">
          <img src="../../assets/login/logo_3.png" alt="" />
          <div class="text">网易云邮箱账号登录</div>
        </div>
      </div>
    </div>
    <div class="foot">
      <div class="policy">
        <input
          type="checkbox"
          v-model="agreePolicy"
          name="policy"
          class="input"
        />
        <div class="text">
          <label for="policy">同意</label>
          <a
            href="http://st.music.163.com/official-terms/service"
            target="_blank"
            class="link"
            >《服务条款》</a
          >
          <a
            href="http://st.music.163.com/official-terms/privacy"
            target="_blank"
            class="link"
            >《隐私政策》</a
          >
          <a
            href="https://st.music.163.com/official-terms/children"
            target="_blank"
            class="link"
            >《儿童隐私政策》</a
          >
        </div>
      </div>
      <div class="scan" @click="toWindow('QRCode')">
        <img class="image" src="../../assets/login/qr_login_icon.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

import LoginButton from "@/ui/Button/LoginButton.vue";
import RegisterButton from "@/ui/Button/RegisterButton.vue";

export default {
  components: { RegisterButton, LoginButton },
  name: "LoginMenu",
  data() {
    return {
      agreePolicy: false,
      tipTimeout: null,
    };
  },
  methods: {
    ...mapMutations("login", ["UPDATE_LOGIN_MODE", "UPDATE_LOGIN_TITLE"]),

    ...mapMutations(["UPDATE_MESSAGE_TIP_INFO"]),

    toWindow(mode) {
      if (this.agreePolicy) {
        this.UPDATE_LOGIN_MODE(mode);
      } else {
        if (this.tipTimeout) {
          clearTimeout(this.tipTimeout);
        }
        this.UPDATE_MESSAGE_TIP_INFO({
          text: "请勾选同意《服务条款》、《隐私政策》、《儿童隐私政策》",
          type: "",
          show: true,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login-menu {
  .main {
    display: flex;
    margin-left: 40px;
    margin-top: 40px;
    width: 528px;
    .phone-login {
      text-align: center;

      .phone,
      .register {
        width: 219px;
        height: 31px;
        cursor: pointer;
        margin-top: 10px;
        &:hover {
          opacity: 0.8;
        }
        .image {
          width: 219px;
          height: 31px;
        }
        .text {
          position: relative;
          top: -25px;
          font-size: 12px;
        }
      }

      .phone {
        .text {
          color: #fff;
        }
      }
      .register {
        .text {
          color: #333;
        }
      }
    }
    .other-login {
      padding-left: 40px;
      border-left: solid 1px #ccc;
      margin-left: 40px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .item {
        display: flex;
        cursor: pointer;
        .text {
          height: 12px;
          font-size: 12px;
          margin-top: 10px;
          margin-left: 20px;
          &:hover {
            border-bottom: solid 1px;
          }
        }
      }
    }
  }
  .foot {
    display: flex;
    color: rgba(0, 0, 0, 0.4);
    font-size: 12px;
    .policy {
      display: flex;
      margin-left: 40px;
      margin-top: 40px;
      .input {
        background-color: #0060df;
      }
      .text {
        margin-left: 2px;
        margin-top: 0px;
        width: 300px;
        .link {
          color: #507daf;
          &:link {
            text-decoration: none;
          }
          &:hover {
            text-decoration-line: underline;
          }
          &:focus {
            text-decoration-line: underline;
          }
          &:visited {
            text-decoration: none;
          }
        }
      }
    }

    .scan {
      .image {
        width: 52px;
        height: 52px;
        margin-left: 122px;
        margin-top: 28px;
        cursor: pointer;
      }
    }
  }
}
</style>
