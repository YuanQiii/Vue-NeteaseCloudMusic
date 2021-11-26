<!--
 * @Author: your name
 * @Date: 2021-11-26 09:27:32
 * @LastEditTime: 2021-11-26 09:50:02
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\components\button\RegisterButton.vue
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
    <div class="text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: "registerButton",
  props: {
    text: String,
  },
  data() {
    return {
      position: {
        normal: ["0 -59px", "100% -100px"],
        hover: ["0 -141px", "100% -182px"],
        active: ["0 -223px", "100% -264px"],
      },
      status: "normal",
    };
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
  },
  methods: {
    changeStatus(status) {
      this.status = status;
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
    color: #333;
  }
}
</style>