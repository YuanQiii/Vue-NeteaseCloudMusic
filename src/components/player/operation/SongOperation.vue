<!--
 * @Author: your name
 * @Date: 2021-10-28 15:17:26
 * @LastEditTime: 2021-12-11 21:28:38
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
import { mapMutations, mapState } from "vuex";

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
    ...mapState("login", ["userLogin"]),
  },
  methods: {
    ...mapMutations("login", ["UPDATE_LOGIN_MODE"]),

    ...mapMutations("player", [
      "ADD_PLAYLIST_SONGS_INFO",
      "DELETE_PLAYLIST_SONGS_INFO",
    ]),

    ...mapMutations("login", ["UPDATE_LOGIN_WINDOW_SHOW"]),

    addSong() {
      if (this.userLogin) {
        this.ADD_PLAYLIST_SONGS_INFO(this.songDetail);
      } else {
        this.UPDATE_LOGIN_WINDOW_SHOW(true);
      }
    },
    dwonloadClient() {
      this.UPDATE_LOGIN_WINDOW_SHOW(true);
      this.UPDATE_LOGIN_MODE("download");
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