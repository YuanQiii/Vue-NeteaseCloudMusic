<!--
 * @Author: your name
 * @Date: 2021-11-10 09:36:57
 * @LastEditTime: 2021-11-17 11:41:56
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Projects\NeteaseCloudMusic\Vue-NeteaseCloudMusic\src\components\login\LoginWindow.vue
-->
<template>
  <div
    class="login-window"
    ref="loginWindow"
    :style="windowStyle"
    v-if="loginWindowShow"
    @mousemove="move"
    @mouseup="afterMove"
  >
    <div class="head" @mousedown="beforeMove">
      <div class="mode">{{ loginTitle }}</div>
      <div class="close" @click="closeWindow">x</div>
    </div>
    <div>
      <login-menu v-if="loginMode == 'menu'" />
      <q-r-code-login v-if="loginMode == 'QRCode'" />
      <phone-login v-if="loginMode == 'phone'" />
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapGetters, mapMutations } = createNamespacedHelpers("login");

import LoginMenu from "./LoginMenu.vue";
import PhoneLogin from "./PhoneLogin.vue";
import QRCodeLogin from "./QRCodeLogin.vue";

export default {
  components: { QRCodeLogin, LoginMenu, PhoneLogin },
  name: "LoginWindow",
  data() {
    return {
      left: 800,
      top: 400,
      diffX: 0,
      diffY: 0,
    };
  },
  computed: {
    ...mapState(["loginWindowShow", "loginWindowMove", "loginMode"]),

    ...mapGetters(["loginTitle"]),

    windowStyle() {
      return {
        left: `${this.left}px`,
        top: `${this.top}px`,
      };
    },
  },
  methods: {
    ...mapMutations([
      "UPDATE_LOGIN_WINDOW_SHOW",
      "UPDATE_LOGIN_WINDOW_MOVE",
      "UPDATE_LOGIN_MODE",
    ]),

    beforeMove(e) {
      this.diffX = e["offsetX"];
      this.diffY = e["offsetY"];
      this.UPDATE_LOGIN_WINDOW_MOVE(true);
    },
    move(e) {
      if (this.loginWindowMove) {
        this.left = this.limitPosition(
          e["clientX"] - this.diffX,
          window.innerWidth - 530
        );
        this.top = this.limitPosition(
          e["clientY"] - this.diffY,
          window.innerHeight - 332
        );
      }
    },
    afterMove() {
      this.UPDATE_LOGIN_WINDOW_MOVE(false);
    },
    closeWindow() {
      this.UPDATE_LOGIN_WINDOW_SHOW(false);
    },
    limitPosition(value, max) {
      if (value <= 0) {
        return 0;
      } else if (value >= max) {
        return max;
      } else {
        return value;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login-window {
  width: 530px;
  height: 350px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  box-shadow: 0 5px 16px rgb(0 0 0 / 80%);
  z-index: 999;
  position: absolute;
  user-select: none;

  .head {
    color: #fff;
    height: 38 px;
    line-height: 38px;
    display: flex;
    background: #2d2d2d;
    justify-content: space-between;
    cursor: move;
    border-radius: 4px 4px 0 0;
  }

  .mode {
    margin-left: 18px;
  }

  .close {
    margin-right: 18px;
    cursor: pointer;
  }
}
</style>
