<!--
 * @Author: your name
 * @Date: 2021-11-25 11:25:11
 * @LastEditTime: 2021-11-26 14:17:25
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\components\button\TheButton.vue
-->
<template>
  <div
    class="login-button"
    @mouseenter="changeStatus('hover')"
    @mousedown="changeStatus('active')"
    @mouseup="changeStatus('hover')"
    @mouseleave="changeStatus('normal')"
  >
    <div class="image">
      <div class="left" :style="imageStyle.left"></div>
      <div class="right" :style="imageStyle.right"></div>
    </div>
    <div class="text" :style="textStyle">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: "LoginButton",
  props: {
    text: String,
    disable: Boolean,
  },
  mounted() {
    this.initStatus();
  },
  data() {
    return {
      position: {
        normal: ["0 -387px", "100% -428px"],
        hover: ["0 -469px", "100% -510px"],
        active: ["0 -551px", "100% -592px"],
        disable: ["0 -305px", "100% -346px"],
      },
      color: {
        normal: "#ffffff",
        hover: "#ffffff",
        active: "#ffffff",
        disable: "#bebebe",
      },
      status: "normal",
    };
  },

  watch: {
    disable(newValue) {
      this.status = newValue ? "disable" : "normal";
    },
  },

  computed: {
    imageStyle() {
      for (const key in this.position) {
        if (Object.hasOwnProperty.call(this.position, key)) {
          const element = this.position[key];
          if (this.status == key) {
            return {
              left: {
                backgroundPosition: element[0],
              },
              right: {
                backgroundPosition: element[1],
              },
            };
          }
        }
      }
    },
    textStyle() {
      return {
        color: this.color[this.status],
      };
    },
  },
  methods: {
    initStatus() {
      if (this.disable) {
        this.status = "disable";
      } else {
        this.status = "normal";
      }
    },
    changeStatus(status) {
      if (!this.disable) {
        this.status = status;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$button-background-image: url(https://s2.music.126.net/style/web2/img/button2.png);

.login-button {
  width: 220px;
  height: 31px;
  color: #bebebe;
  line-height: 31px;
  text-align: center;
  font-size: 12px;

  .image {
    display: flex;

    .left {
      width: 215px;
      height: 31px;
      background-image: $button-background-image;
    }
    .right {
      width: 5px;
      height: 31px;
      background-image: $button-background-image;
    }
  }

  .text {
    position: relative;
    top: -31px;
  }
}
</style>