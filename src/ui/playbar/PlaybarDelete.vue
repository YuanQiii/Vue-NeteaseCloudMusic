<!--
 * @Author: your name
 * @Date: 2021-12-09 14:17:55
 * @LastEditTime: 2021-12-09 15:00:58
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\ui\playbar\PlaybarDelete.vue
-->
<template>
  <div class="playbar-download"></div>
</template>

<script>
export default {
  name: "PlaybarDownload",
};
</script>

<style lang="scss" scoped>
.playbar-download {
  display: block;
  width: 13px;
  height: 16px;
  background-image: url(https://s2.music.126.net/style/web2/img/frame/playlist.png);
  background-position: -51px 0px;
  cursor: pointer;
  &:hover {
    background-position: -51px -20px;
  }
}
</style>