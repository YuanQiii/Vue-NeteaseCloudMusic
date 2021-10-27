<template>
  <div class="play-control">
    <div class="play-control-previous" @click="playPreviousSong">
      <img src="../../../assets/player/next.png" alt />
    </div>

    <div class="play-control-pause" @click="switchPlayStatus">
      <img src="../../../assets/player/musicplay.png" v-if="playStatus" />
      <img src="../../../assets/player/musicpause.png" v-else />
    </div>
    <div class="play-control-next" @click="playNextSong">
      <img src="../../../assets/player/next.png" alt />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "PlayStatusControl",
  computed: {
    ...mapState({
      playStatus: (state) => state.player.playStatus,
      playMode: (state) => state.player.playMode,
      playListSongsId: (state) => state.player.playListSongsId,
      currentPLayIndex: (state) => state.player.currentPLayIndex,
      playIndexHistory: (state) => state.player.playIndexHistory,

      audio: (state) => state.player.audio,
    }),

    ...mapGetters(["playSongsCount"]),
  },
  methods: {
    playPreviousSong() {
      let historyLength = this.playIndexHistory.length;

      if (historyLength > 1) {
        this.$store.commit("updateplayIndexHistory", -1);
        historyLength = this.playIndexHistory.length;
        this.$store.commit(
          "updateCurrentPLayIndex",
          this.playIndexHistory[historyLength - 1]
        );
      } else {
        let temp = this.currentPLayIndex;
        let previousPlayIndex = 0;

        previousPlayIndex = ++temp;

        if (previousPlayIndex > this.playSongsCount) {
          this.previousPlayIndex = 0;
        }

        this.$store.commit("updateCurrentPLayIndex", previousPlayIndex);
      }
    },
    playNextSong() {
      let nextPlayIndex = 0;
      if (this.playMode == "循环" || this.playMode == "单曲循环") {
        let temp = this.currentPLayIndex;
        nextPlayIndex = ++temp;

        if (nextPlayIndex > this.playSongsCount - 1) {
          nextPlayIndex = 0;
        }

        this.$store.commit("updateCurrentPLayIndex", nextPlayIndex);
      } else {
        nextPlayIndex = Math.floor(Math.random() * this.playSongsCount);

        while (nextPlayIndex == this.currentPLayIndex) {
          nextPlayIndex = Math.floor(Math.random() * this.playSongsCount);
        }
        this.$store.commit("updateCurrentPLayIndex", nextPlayIndex);
      }

      this.$store.commit("updateplayIndexHistory", nextPlayIndex);
    },
    switchPlayStatus() {
      if (this.playStatus) {
        this.audio.pause();
      } else {
        this.audio.play();
      }
      this.$store.commit("switchPlayStatus");
    },
  },
};
</script>

<style lang="scss" scoped>
.play-control {
  display: flex;
  margin-top: 3px;
}

.play-control-previous > img {
  width: 28px;
  height: 28px;
  margin-top: 10px;
  transform: rotateY(180deg);
  cursor: pointer;
}
.play-control-pause {
  position: relative;
  margin-right: 55px;

  img {
    width: 36px;
    height: 36px;
    margin: 6px 10px;
    cursor: pointer;
    position: absolute;
  }
}
.play-control-next > img {
  margin-top: 10px;
  width: 28px;
  height: 28px;
  cursor: pointer;
}
</style>
