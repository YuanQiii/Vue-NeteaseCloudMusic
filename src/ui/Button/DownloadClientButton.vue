<!--
 * @Author: your name
 * @Date: 2021-12-11 20:19:46
 * @LastEditTime: 2021-12-11 20:56:10
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\ui\Button\DownloadClientButton.vue
-->
<template>
  <div class="download-client-button">
    <div class="icon"></div>
    <div class="text">PC版 V2.9.6</div>
  </div>
</template>

<script>
export default {
  name: "DownloadClientButton",
};
</script>

<style lang="scss" scoped>
.download-client-button {
  display: flex;
  justify-content: center;
  color: #3d74bf;
  width: 146px;
  height: 40px;
  background-color: #ceddf5;
  line-height: 40px;
  cursor: pointer;
  .icon {
    background-image: url(https://s2.music.126.net/style/web2/img/icon2.png);
    background-position: 0 -310px;
    width: 17px;
    height: 17px;
    display: block;
    margin-top: 12px;
    margin-right: 10px;
  }
}
</style>