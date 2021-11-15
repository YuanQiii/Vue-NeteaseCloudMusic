<!--
 * @Author: your name
 * @Date: 2021-11-10 09:36:57
 * @LastEditTime: 2021-11-15 10:19:48
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Projects\NeteaseCloudMusic\Vue-NeteaseCloudMusic\src\components\login\LoginWindow.vue
-->
<template>
  <div
    class="login-window"
    ref="loginWindow"
    :style="loginWindowStyle"
    v-if="loginWindowShow"
    @mousemove="move"
    @mouseup="afterMove"
  >
    <div class="head" @mousedown="beforeMove">
      <div class="mode">{{ loginTitle }}</div>
      <div class="close" @click="closeWindow">x</div>
    </div>
    <login-menu />
    <q-r-code-login />
  </div>
</template>

<script>
import { mapState } from "vuex";

import LoginMenu from "./LoginMenu.vue";
import QRCodeLogin from "./QRCodeLogin.vue";

export default {
  components: { QRCodeLogin, LoginMenu },
  name: "LoginWindow",
  data() {
    return {
      loginTitle: "登录",
      left: 800,
      top: 400,
      diffX: 0,
      diffY: 0,
    };
  },
  computed: {
    ...mapState({
      loginWindowShow: (state) => state.login.loginWindowShow,
      loginWindowMove: (state) => state.login.loginWindowMove,
      loginMode: (state) => state.login.loginMode,
    }),

    loginWindowStyle() {
      return {
        left: `${this.left}px`,
        top: `${this.top}px`,
      };
    },
  },
  methods: {
    beforeMove(e) {
      this.diffX = e["offsetX"];
      this.diffY = e["offsetY"];
      // this.$store.commit("updateLoginWindowMove", true);
      this.$store.commit("updateLoginState", {
        loginWindowMove: true,
      });
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
      // this.$store.commit("updateLoginWindowMove", false);
      this.$store.commit("updateLoginState", {
        loginWindowMove: false,
      });
    },
    closeWindow() {
      // this.$store.commit("updateLoginWindowShow", false);
      this.$store.commit("updateLoginState", {
        loginWindowShow: false,
      });
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
