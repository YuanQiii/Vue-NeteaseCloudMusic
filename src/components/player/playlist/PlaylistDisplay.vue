<!--
 * @Author: your name
 * @Date: 2021-10-26 09:40:15
 * @LastEditTime: 2021-11-01 10:30:39
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \Projects\NeteaseCloudMusic\Vue-NeteaseCloudMusic\src\components\player\playlist\PlaylistDisplay.vue
-->

<template>
  <div class="playlistdisplay">
    <playlist-head />
    <div class="displaycontent">
      <playlist-detail />
      <playlist-lyric />
    </div>
  </div>
</template>
<script>
import PlaylistHead from "./PlaylistHead.vue";
import PlaylistDetail from "./PlaylistDetail.vue";
import PlaylistLyric from "./PlaylistLyric.vue";

export default {
  name: "PlaylistDisplay",
  components: {
    PlaylistHead,
    PlaylistDetail,
    PlaylistLyric,
  },
};
</script>
<style scoped>
.displaycontent {
  display: flex;
}

.playlistdisplay {
  position: absolute;
  width: 976px;
  height: 300px;
  background-color: #161616;
  top: -300px;
  border-radius: 5px;
  box-shadow: 0px -1px 8px 0px rgba(11, 1, 20, 0.46);
}
</style>