<!--
 * @Author: your name
 * @Date: 2021-10-19 09:48:46
 * @LastEditTime: 2021-12-10 17:02:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit 
 * @FilePath: \Projects\NeteaseCloudMusic\Vue-NeteaseCloudMusic\src\components\player\MusicPlayer.vue
-->
<template>
  <div class="music-player">
    <play-status-control />
    <play-progress-bar />
    <play-song-control />
    <play-setting />
  </div>
</template>
<script>
import PlayProgressBar from "./control/PlayProgressBar.vue";
import PlaySetting from "./control/PlaySetting.vue";
import PlaySongControl from "./control/PlaySongControl.vue";
import PlayStatusControl from "./control/PlayStatusControl.vue";

import { mapState, mapMutations, mapActions } from "vuex";

export default {
  components: {
    PlayProgressBar,
    PlayStatusControl,
    PlaySongControl,
    PlaySetting,
  },
  name: "MusicPlayer",
  mounted() {
    this.initAudio();
    this.getSongsInfo(this.ids);
  },
  data() {
    return {
      ids: [1398663411, 346576],
    };
  },
  computed: {
    ...mapState("player", ["audio"]),
  },

  methods: {
    ...mapMutations("player", [
      "INIT_PLAYER_AUDIO",
      "UPDATE_PLAYER_AUDIO_CONFIG",
      "UPDATE_AUDIO_CURRENT_TIME",
      "UPDATE_AUDIO_INTERVAL",
    ]),

    ...mapActions("player", ["getSongsInfo"]),

    initAudio() {
      this.INIT_PLAYER_AUDIO();
      this.UPDATE_PLAYER_AUDIO_CONFIG({
        preload: "auto",
        autoplay: false,
      });
      let currentPlayTimeInterval = setInterval(() => {
        this.UPDATE_AUDIO_CURRENT_TIME(this.audio.currentTime);
      }, 200);

      this.UPDATE_AUDIO_INTERVAL(currentPlayTimeInterval);
    },
  },
};
</script>
<style scoped>
.music-player {
  position: fixed;
  z-index: 99;
  height: 53px;
  background-image: linear-gradient(0deg, #242323, #363636);
  width: 100vw;
  top: 90%;
  opacity: 0.98;
  display: flex;
  justify-content: center;
  box-shadow: 0px -4px 5px 0px rgba(20, 4, 1, 0.3);
}
</style>
