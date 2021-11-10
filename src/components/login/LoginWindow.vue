<!--
 * @Author: your name
 * @Date: 2021-11-10 09:36:57
 * @LastEditTime: 2021-11-10 17:58:53
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Projects\NeteaseCloudMusic\Vue-NeteaseCloudMusic\src\components\login\LoginWindow.vue
-->
<template>
  <div
    class="login-window"
    ref="loginWindow"
    :style="loginWindowStyle"
    v-show="loginWindowShow"
  >
    <div
      class="head"
      draggable="true"
      @mousedown="beforeMove"
      @mousemove="move"
      @mouseup="afterMove"
    >
      <div class="mode">{{ loginMode }}</div>
      <div class="close" @click="closeWindow">x</div>
    </div>
    <q-r-code-login />
  </div>
</template>

<script>
import { mapState } from "vuex";
import QRCodeLogin from "./QRCodeLogin.vue";
export default {
  components: { QRCodeLogin },
  name: "LoginWindow",
  data() {
    return {
      loginMode: "登录",
      isMouseDown: false,
      left: 800,
      top: 200,

      diffX: 0,
      diffY: 0,
    };
  },
  computed: {
    ...mapState({
      loginWindowShow: (state) => state.login.loginWindowShow,
    }),

    loginWindowStyle() {
      return {
        left: `${this.left}px`,
        top: `${this.top}px`,
      };
    },

    loginBoxInfo() {
      return this.$refs.loginWindow.getBoundingClientRect();
    },
  },
  methods: {
    beforeMove(e) {
      this.isMouseDown = true;
      this.diffX = e["clientX"] - this.loginBoxInfo["x"];
      this.diffY = e["clientY"] - this.loginBoxInfo["y"];
    },
    move(e) {
      if (this.isMouseDown) {
        this.left = e["clientX"] - this.diffX;
        this.top = e["clientY"] - this.diffY;
      }
    },
    afterMove(e) {
      this.isMouseDown = false;
    },
    closeWindow() {
      this.$store.commit("updateLoginWindowShow", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.login-window {
  width: 530px;
  height: 332px;
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
  }

  .mode {
    margin-left: 18px;
  }

  .close {
    margin-right: 18px;
  }
}
</style>
