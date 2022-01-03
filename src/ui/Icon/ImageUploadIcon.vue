<!--
 * @Author: your name
 * @Date: 2022-01-02 20:17:57
 * @LastEditTime: 2022-01-02 20:19:25
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\ui\Icon\ImageUploadIcon.vue
-->
<template>
  <div class="image-upload-icon">
    <div class="image"></div>
  </div>
</template>

<script>
export default {
  name: "ImageUploadIcon",
};
</script>

<style lang="scss" scoped>
.image-upload-icon {
  .image {
    display: block;
    background: url(https://s2.music.126.net/style/web2/img/icon.png);
    background-position: 0px -980px;
    width: 18px;
    height: 18px;
    cursor: pointer;
  }
}
</style>