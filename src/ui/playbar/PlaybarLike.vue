<!--
 * @Author: your name
 * @Date: 2021-12-09 13:49:44
 * @LastEditTime: 2021-12-09 14:52:35
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\ui\playbar\PlaybarCollect.vue
-->
<template>
  <div class="playbar-like"></div>
</template>

<script>
export default {
  name: "PlaybarLike",
};
</script>

<style lang="scss" scoped>
.playbar-like {
  display: block;
  width: 16px;
  height: 16px;
  background-image: url(https://s2.music.126.net/style/web2/img/frame/playlist.png);
  background-position: -24px 0;
  cursor: pointer;
  &:hover {
    background-position: -24px -20px;
  }
}
</style>