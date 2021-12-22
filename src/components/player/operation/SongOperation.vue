<!--
 * @Author: your name
 * @Date: 2021-10-28 15:17:26
 * @LastEditTime: 2021-12-22 23:06:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Projects\NeteaseCloudMusic\Vue-NeteaseCloudMusic\src\components\operation\Operate.vue
-->
<template>
  <div class="song-operation">
    <playbar-like @click.native="addSong" />
    <playbar-share />
    <playbar-download @click.native="dwonloadClient" />
    <playbar-delete @click.native="deleteSong" />
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";

import PlaybarDelete from "../../../ui/playbar/PlaybarDelete.vue";
import PlaybarDownload from "../../../ui/playbar/PlaybarDownload.vue";
import PlaybarLike from "../../../ui/playbar/PlaybarLike.vue";
import PlaybarShare from "../../../ui/playbar/PlaybarShare.vue";
export default {
  name: "SongOperation",
  components: { PlaybarLike, PlaybarShare, PlaybarDownload, PlaybarDelete },
  props: {
    songDetail: Object,
  },
  computed: {
    ...mapState("user", ["userLogin"]),
  },
  methods: {
    ...mapMutations("login", ["UPDATE_LOGIN_WINDOW_SHOW"]),

    ...mapMutations("player", [
      "ADD_PLAYLIST_SONGS_INFO",
      "DELETE_PLAYLIST_SONGS_INFO",
    ]),

    ...mapMutations("user", ["UPDATE_USER_OPERATE_SONG"]),

    ...mapMutations([
      "UPDATE_POPUP_DOWNLOAD_SHOW",
      "UPDATE_POPUP_ADD_TO_PLAYLIST",
    ]),

    ...mapActions("user", ["getUserPlaylist"]),

    addSong() {
      if (this.userLogin) {
        this.ADD_PLAYLIST_SONGS_INFO(this.songDetail);
        this.UPDATE_POPUP_ADD_TO_PLAYLIST(true);
        this.getUserPlaylist();
        this.UPDATE_USER_OPERATE_SONG(this.songDetail["id"]);
      } else {
        this.UPDATE_LOGIN_WINDOW_SHOW(true);
      }
    },
    dwonloadClient() {
      this.UPDATE_POPUP_DOWNLOAD_SHOW(true);
    },
    deleteSong() {
      this.DELETE_PLAYLIST_SONGS_INFO(this.songDetail["id"]);
    },
  },
};
</script>

<style lang="scss" scoped>
.song-operation {
  display: flex;
  width: 100px;
  margin-top: 7px;
  margin-left: -60px;
  justify-content: space-around;
}
</style>