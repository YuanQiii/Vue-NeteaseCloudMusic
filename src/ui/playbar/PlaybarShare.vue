<!--
 * @Author: your name
 * @Date: 2021-12-09 14:15:55
 * @LastEditTime: 2021-12-09 15:00:37
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\ui\playbar\PlaybarShare.vue
-->
<template>
  <div class="playbar-share"></div>
</template>

<script>
export default {
  name: "PlaybarShare",
};
</script>

<style lang="scss" scoped>
.playbar-share {
  display: block;
  width: 14px;
  height: 16px;
  background-image: url(https://s2.music.126.net/style/web2/img/frame/playlist.png);
  background-position: 0 0;
  cursor: pointer;
  &:hover {
    background-position: 0 -20px;
  }
}
</style>