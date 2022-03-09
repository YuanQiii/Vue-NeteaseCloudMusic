<!--
 * @Author: your name
 * @Date: 2021-12-06 21:58:51
 * @LastEditTime: 2022-03-09 22:10:30
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\views\discover\PlayList.vue
-->
<template>
  <div class="play-list">
    <div class="content">
      <playlist-head />
      <playlist-category />
    </div>
  </div>
</template>

<script>
import PlaylistHead from "@/components/playlist/PlaylistHead.vue";
import PlaylistCategory from "@/components/playlist/PlaylistCategory.vue";

export default {
  name: "PlayList",
  components: {
    PlaylistHead,
    PlaylistCategory,
  },
};
</script>

<style lang="scss" scoped>
.play-list {
  background-color: #fefefe;
  .content {
    padding: 20px;
    width: 980px;
    height: auto;
    background-color: #fff;
    border: solid 1px #ccc;
    border-top: none;
    border-bottom: none;
    display: flex;
  }
}
</style>