<!--
 * @Author: your name
 * @Date: 2022-01-04 14:56:59
 * @LastEditTime: 2022-01-04 15:25:36
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\ui\Button\EmotionRightArrowButton.vue
-->
<template>
  <div class="emotion-right-arrow-button">
    <div class="image"></div>
  </div>
</template>

<script>
export default {
  name: "EmotionRightArrowButton",
};
</script>

<style lang="scss" scoped>
.emotion-right-arrow-button {
  .image {
    cursor: pointer;
    display: block;
    width: 9px;
    height: 9px;
    background: url(https://s2.music.126.net/style/web2/img/button.png);
    background-position: -120px 0;

    &:hover {
      background-position: -120px -20px;
    }
  }
}
</style>