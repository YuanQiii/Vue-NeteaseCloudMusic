<!--
 * @Author: your name
 * @Date: 2021-10-28 15:17:26
 * @LastEditTime: 2021-12-09 15:53:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Projects\NeteaseCloudMusic\Vue-NeteaseCloudMusic\src\components\operation\Operate.vue
-->
<template>
  <div class="song-operation">
    <playbar-like @click="addSong" />
    <playbar-share />
    <playbar-download />
    <playbar-delete @click="deleteSong" />
  </div>
</template>

<script>
import { mapMutations } from "vuex";

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
  methods: {
    ...mapMutations("user", [
      "ADD_PLAYLIST_SONGS_INFO",
      "DELETE_PLAYLIST_SONGS_INFO",
    ]),

    addSong() {
      this.ADD_PLAYLIST_SONGS_INFO(this.songDetail);
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