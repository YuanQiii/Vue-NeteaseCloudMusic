<template>
  <div class="music-player">
    <play-status-control />
    <play-progress-bar />
    <play-song-control />
    <play-setting />
  </div>
</template>
<script>
import PlayProgressBar from "./PlayProgressBar.vue";
import PlaySetting from "./PlaySetting.vue";
import PlaySongControl from "./PlaySongControl.vue";
import PlayStatusControl from "./PlayStatusControl.vue";

import { songDetailApi } from "@/api/song.js";
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
          "🚀 ~ file: MusicPlayer.vue ~ line 311 ~ songDetailApi ~ this.$store.state.player.playListSongs",
          this.$store.state.player.playListSongs
        );
      });
    },
    initAudio() {
      this.$store.commit("initAudioObject");

      this.$store.commit("updateAudioConfig", {
        preload: "auto",
        autoplay: true,
      });

      let updateCurrentPlayTime = setInterval(() => {
        this.$store.commit("updateCurrentPlayTime", this.audio.currentTime);
      }, 100);

      this.$store.commit("updateAudioInterval", updateCurrentPlayTime);
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
  width: 100%;
  top: 90%;
  opacity: 0.98;
  display: flex;
  padding-left: 25%;
  box-shadow: 0px -4px 5px 0px rgba(20, 4, 1, 0.3);
}
</style>
