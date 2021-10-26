<template>
  <div class="playlistdisplay">
    <playlist-head />
    <div class="displaycontent">
      <playlist-detail />
      <display-lyric />
    </div>
  </div>
</template>
<script>
import PlaylistHead from "./PlaylistHead.vue";
import PlaylistDetail from "./PlaylistDetail.vue";
import DisplayLyric from "./DisplayLyric";

export default {
  name: "PlaylistDisplay",
  components: {
    PlaylistHead,
    PlaylistDetail,
    DisplayLyric,
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