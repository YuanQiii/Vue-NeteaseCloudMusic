<!--
 * @Author: your name
 * @Date: 2021-10-19 09:48:46
 * @LastEditTime: 2021-11-02 12:00:01
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

import { songDetailApi, songLyricApi } from "@/api/song.js";
import { mapState } from "vuex";

export default {
  components: {
    PlayProgressBar,
    PlayStatusControl,
    PlaySongControl,
    PlaySetting,
  },
  name: "MusicPlayer",
  created() {
    this.getSongs();
    this.getLyric();
    this.initAudio();
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      audio: (state) => state.player.audio,
      audioInterval: (state) => state.player.audioInterval,
    }),
    audioCurrentTime() {
      if (this.audio) {
        console.log(this.audio.currentTime);
        return this.audio.currentTime;
      } else {
        return 0;
      }
    },
  },

  methods: {
    getSongs() {
      let params = {
        ids: "1398663411,346576",
      };
      songDetailApi(params).then((response) => {
        this.$store.commit("updatePlayListSongsAndId", response.data.songs);
        console.log(
          "🚀 ~ file: MusicPlayer.vue ~ line 63 ~ songDetailApi ~ response.data.songs",
          response.data.songs
        );
      });
    },
    getLyric() {
      let params = {
        id: "1398663411",
      };

      songLyricApi(params).then((response) => {
        this.$store.commit("updatePlayListSongsLyric", {
          [params["id"]]: response["data"]["lrc"]["lyric"],
        });

        params = {
          id: "346576",
        };

        songLyricApi(params).then((response) => {
          this.$store.commit("updatePlayListSongsLyric", {
            [params["id"]]: response["data"]["lrc"]["lyric"],
          });
        });
      });
    },
    initAudio() {
      this.$store.commit("initAudioObject");

      this.$store.commit("updateAudioConfig", {
        preload: "auto",
        autoplay: true,
      });

      let currentPlayTimeInterval = setInterval(() => {
        this.$store.commit("updateCurrentPlayTime", this.audio.currentTime);
      }, 200);

      this.$store.commit("updateAudioInterval", currentPlayTimeInterval);
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
