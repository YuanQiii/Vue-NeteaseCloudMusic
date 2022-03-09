<!--
 * @Author: your name
 * @Date: 2022-03-09 10:59:59
 * @LastEditTime: 2022-03-09 11:08:31
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\ui\Button\RedButton.vue
-->
<template>
  <div class="red-button">
    <div class="image"></div>
    <div class="text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: "RedButton",
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
.red-button {
  width: 100px;
  height: 31px;
  color: #bebebe;
  line-height: 31px;
  text-align: center;
  font-size: 12px;
  cursor: pointer;
  .image {
    display: block;
    width: 100px;
    height: 31px;
    background: url(https://s2.music.126.net/style/web2/img/index/index.png);
    background-position: 0 -195px;
    &:hover {
      background-position: -110px -195px;
    }
  }
  .text {
    position: relative;
    top: -31px;
    color: #fff;
  }
}
</style>