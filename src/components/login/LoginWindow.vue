<!--
 * @Author: your name
 * @Date: 2021-11-10 09:36:57
 * @LastEditTime: 2021-11-10 17:58:53
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Projects\NeteaseCloudMusic\Vue-NeteaseCloudMusic\src\components\login\LoginWindow.vue
-->
<template>
  <div class="login-window" ref="loginWindow" :style="loginWindowStyle">
    <div
      class="head"
      draggable="true"
      @dragstart="start"
      @drag="startPosition"
      @dragend="end"
    >
      <div class="mode">{{ loginMode }}</div>
      <div class="close">x</div>
    </div>
    <q-r-code-login />
  </div>
</template>

<script>
import QRCodeLogin from "./QRCodeLogin.vue";
export default {
  components: { QRCodeLogin },
  name: "LoginWindow",
  data() {
    return {
      loginMode: "登录",
      left: 1000,
      top: 0,

      diffX: 0,
      diffY: 0,
    };
  },
  computed: {
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
    start(e) {
      this.diffX = e["clientX"] - this.loginBoxInfo["x"];
      this.diffY = e["clientY"] - this.loginBoxInfo["y"];
    },

    startPosition(e) {
      this.left = e["clientX"] - this.diffX;
      this.top = e["clientY"] - this.diffY;
      console.log(e);
    },

    end(e) {
      // this.left = e["clientX"] - this.diffX;
      // this.top = e["clientY"] - this.diffY;
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