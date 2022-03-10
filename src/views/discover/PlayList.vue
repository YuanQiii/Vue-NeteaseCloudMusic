<!--
 * @Author: your name
 * @Date: 2021-12-06 21:58:51
 * @LastEditTime: 2022-03-10 18:01:33
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\views\discover\PlayList.vue
-->
<template>
  <div class="play-list">
    <div class="content">
      <playlist-head />
      <playlist-category
        class="category"
        @getPlaylist="getPlaylist"
        :offset="offset"
      />
      <playlist-display :playlist="playlist" />
      <!-- <pagination
        class="page"
        :total="totalPage"
        @prevClick="prevClick(value)"
      /> -->
    </div>
  </div>
</template>

<script>
import PlaylistHead from "@/components/playlist/PlaylistHead.vue";
import PlaylistCategory from "@/components/playlist/PlaylistCategory.vue";
import PlaylistDisplay from "@/components/playlist/PlaylistDisplay.vue";
// import Pagination from "@/components/ui/Page/Pagination.vue";

export default {
  name: "PlayList",
  components: {
    PlaylistHead,
    PlaylistCategory,
    PlaylistDisplay,
    // Pagination,
  },
  data() {
    return {
      playlist: [],
      totalPage: 43,
      offset: 0,
    };
  },
  methods: {
    prevClick(value) {},
    getPlaylist(value) {
      this.playlist = value;
      console.log(value);
    },
  },
};
</script>

<style lang="scss" scoped>
.play-list {
  background-color: #fefefe;
  position: relative;
  height: 100vh;
  .content {
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 980px;
    height: auto;
    background-color: #fff;
    border: solid 1px #ccc;
    border-top: none;
    border-bottom: none;
    display: flex;
  }
  .category {
    position: absolute;
    top: 100px;
  }
  .page {
    margin-top: 500px;
  }
}
</style>