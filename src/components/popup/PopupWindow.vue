<!--
 * @Author: your name
 * @Date: 2021-12-23 14:32:47
 * @LastEditTime: 2022-01-01 19:48:15
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\components\popup\PopupWindow.vue
-->
<template>
  <div
    class="popup-window"
    :style="windowStyle"
    @mousemove="move"
    @mouseup="afterMove"
  >
    <div class="header" @mousedown="beforeMove" :style="style">
      <span class="title">{{ title }}</span>
      <span class="close" @click="UPDATE_POPUP_TYPE(null)">x</span>
    </div>

    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "PopupWindow",
  props: {
    title: String,
    style: Object,
  },
  data() {
    return {
      left: 800,
      top: 400,
      diffX: 0,
      diffY: 0,
      moveEnable: false,
    };
  },
  computed: {
    ...mapMutations(["UPDATE_POPUP_TYPE"]),

    windowStyle() {
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
      this.moveEnable = true;
    },
    move(e) {
      if (this.moveEnable) {
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
      this.moveEnable = false;
    },
    closeWindow() {
      this.UPDATE_POPUP_DOWNLOAD_SHOW(false);
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
.popup-window {
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 5px 16px rgb(0 0 0 / 80%);
  z-index: 999;
  position: absolute;
  user-select: none;

  .header {
    color: #fff;
    height: 38px;
    line-height: 38px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background: #2d2d2d;

    cursor: move;
    border-radius: 4px 4px 0 0;
  }

  .title {
    margin-left: 18px;
  }

  .close {
    margin-right: 18px;
    cursor: pointer;
  }
}
</style>
</style>