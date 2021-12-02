<!--
 * @Author: your name
 * @Date: 2021-11-17 11:37:51
 * @LastEditTime: 2021-12-02 17:51:47
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Projects\NeteaseCloudMusic\Vue-NeteaseCloudMusic\src\components\login\Reset.vue
-->
<template>
  <div class="reset">
    <div class="main">
      <div class="title">手机号：</div>
      <div class="phone" :style="phoneWarnStyle">
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
          @blur="styleShow = true"
        />
      </div>

      <div class="title">密码：</div>
      <div class="password">
        <input
          type="password"
          placeholder="设置登录密码，不少于8位"
          autocomplete="off"
          class="input"
          :style="passwordWarnStyle"
          v-model="password"
          @focus="styleShow = true"
        />
      </div>

      <div class="warn">
        <div class="item" v-for="(value, index) in pwdWarnText">
          <div
            :class="_elementIsActive(currentWarn[index], true, 'icon')"
          ></div>
          <div :class="_elementIsActive(currentWarn[index], true, 'text')">
            {{ value }}
          </div>
        </div>
      </div>

      <div class="next" @click="toVerify">
        <login-button :text="'下一步'" :disable="btnDisable" />
      </div>
    </div>
    <div class="bottom">
      <div class="text" @click="toWindow('menu')">&lt; 返回登录</div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapMutations } = createNamespacedHelpers("login");

import { captchaSentApi, captchaVerifyApi } from "@/api/login.js";

import { elementIsActive } from "@/utils/elementIsActive.js";
import LoginButton from "@/ui/Button/LoginButton.vue";

export default {
  components: { LoginButton },
  name: "Reset",
  data() {
    return {
      phone: "",
      password: "",
      phoneWarnText: ["请输入手机号", "请输入正确的手机号"],
      pwdWarnText: [
        "密码不能包含空格",
        "包含字母、数字、符号中至少两种",
        "密码长度为8-20位",
      ],
      phoneRegExp: /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/,
      passwordExp:
        /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{2,30}$/,
      styleShow: false,
    };
  },
  computed: {
    currentWarn() {
      return [this.BlankWarn, this.TypeWarn, this.LengthWarn];
    },

    btnDisable() {
      if (this.password) {
        return this.BlankWarn || this.TypeWarn || this.LengthWarn;
      } else {
        return true;
      }
    },

    BlankWarn() {
      return this.password.split("").some((value) => {
        return value == " ";
      });
    },

    TypeWarn() {
      return !this.passwordExp.test(this.password);
    },

    LengthWarn() {
      let pwdLength = this.password.length;
      return pwdLength < 8 || pwdLength > 20;
    },

    phoneCorrect() {
      return this.phoneRegExp.test(this.phone);
    },

    passwordWarnStyle() {
      return this.btnDisable && this.styleShow
        ? {
            border: "solid 1px #f08b8b",
          }
        : {};
    },

    phoneWarnStyle() {
      return this.phone == "" && this.styleShow
        ? {
            border: "solid 1px #f08b8b",
          }
        : {};
    },
  },
  methods: {
    ...mapMutations([
      "UPDATE_LOGIN_MODE",
      "UPDATE_LOGIN_PHONE",
      "UPDATE_LOGIN_PASSWORD",
    ]),

    _elementIsActive(current, self, origin) {
      return elementIsActive(current, self, origin);
    },

    toVerify() {
      if (!this.btnDisable) {
        // captchaSentApi(this.phone).then((response) => {
        //   if (response["data"]["data"]) {
        //     console.log("验证码发送成功");
        //   } else {
        //     console.log("验证码发送失败");
        //   }
        // });
        console.log("验证码发送成功");
        this.UPDATE_LOGIN_PHONE(this.phone);
        this.UPDATE_LOGIN_PASSWORD(this.password);
        this.UPDATE_LOGIN_MODE("verify");
      }
    },

    toWindow(mode) {
      this.UPDATE_LOGIN_MODE(mode);
    },
  },
};
</script>

<style lang="scss" scoped>
.reset {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  .main {
    width: 220px;
    margin-top: 20px;
    .title {
      color: #666666;
      font-size: 12px;
      margin-top: 10px;
      margin-bottom: 10px;
    }

    .phone {
      position: relative;
      margin: 0;
      border: 1px solid #cdcdcd;
      border-radius: 2px;
      z-index: 10;
      display: flex;
      overflow: hidden;
      margin-top: 11px;
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

    .password {
      .input {
        padding: 5px 8px 5px;
        width: 202px;
        height: 20px;
        line-height: 20px;
        border: solid 1px #cdcdcd;
        color: #333333;
        outline: none;
      }
    }

    .warn {
      margin-top: 2px;
      .item {
        display: flex;
        margin-bottom: 5px;
        .icon {
          width: 14px;
          height: 14px;
          background-image: url(https://p1.music.126.net/JPjkPBrcNm_gUFy8ze_R6w==/109951164440779727.png);
          color: #333;
          line-height: 18px;
        }
        .active {
          background-image: url(https://s2.music.126.net/style/web2/img/icon.png?b7461a71e9b3c2a10faa9f647dd1a256);
          background-position: -50px -270px;
          color: #e33232;
        }
        .text {
          margin-left: 8px;
          background: none;
        }
      }
    }

    .next {
      margin-top: 20px;

      .image {
        display: flex;

        .left {
          width: 215px;
          height: 31px;
          background-image: url(https://s2.music.126.net/style/web2/img/button2.png?3b1af8779cab6a84196c071d5a3f4343);
          background-position: 0 -305px;
        }
        .right {
          width: 5px;
          height: 31px;
          background-image: url(https://s2.music.126.net/style/web2/img/button2.png?3b1af8779cab6a84196c071d5a3f4343);
          background-position: 100% -346px;
        }
      }

      .text {
        position: relative;
        top: -31px;
      }
    }
  }
  .bottom {
    color: #0c72c3;
    line-height: 48px;
    background-color: #f7f7f7;
    border: solid 1px #c6c6c6;
    width: 508px;
    height: 50px;
    margin-top: 45px;
    padding-left: 20px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    .text {
      cursor: pointer;
    }
  }
}
</style>
