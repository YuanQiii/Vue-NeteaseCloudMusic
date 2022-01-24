<!--
 * @Author: your name
 * @Date: 2021-10-28 15:17:26
 * @LastEditTime: 2022-01-24 16:15:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Projects\NeteaseCloudMusic\Vue-NeteaseCloudMusic\src\components\operation\Operate.vue
-->
<template>
  <div class="song-operation">
    <playbar-like @click.native="addSong" />
    <playbar-share @click.native="shareSong" />
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
      "UPDATE_PLAYLIST_SHOW",
      "ADD_PLAYLIST_SONGS_INFO",
      "DELETE_PLAYLIST_SONGS_INFO",
    ]),

    ...mapMutations("user", [
      "UPDATE_USER_OPERATE_SONG",
      "UPDATE_USER_OPERATE_TYPE_INDEX",
    ]),
    ...mapMutations(["UPDATE_POPUP_TYPE"]),
    ...mapActions("user", ["getUserPlaylist"]),

    addSong() {
      if (this.userLogin) {
        this.ADD_PLAYLIST_SONGS_INFO(this.songDetail);
        this.UPDATE_POPUP_TYPE("addToPlaylist");
        this.getUserPlaylist();
        this.UPDATE_USER_OPERATE_SONG(this.songDetail["id"]);
        this.UPDATE_USER_OPERATE_TYPE_INDEX(0);
      } else {
        this.UPDATE_LOGIN_WINDOW_SHOW(true);
      }

      this.UPDATE_PLAYLIST_SHOW(false);
    },
    shareSong() {
      if (this.userLogin) {
        this.UPDATE_USER_OPERATE_SONG(this.songDetail);
        this.UPDATE_USER_OPERATE_TYPE_INDEX(0);
        this.UPDATE_POPUP_TYPE("share");
      } else {
        this.UPDATE_LOGIN_WINDOW_SHOW(true);
      }

      this.UPDATE_PLAYLIST_SHOW(false);
    },
    dwonloadClient() {
      this.UPDATE_POPUP_TYPE("download");
      this.UPDATE_PLAYLIST_SHOW(false);
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