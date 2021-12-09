<!--
 * @Author: your name
 * @Date: 2021-10-19 09:48:46
 * @LastEditTime: 2021-12-09 17:55:15
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\components\player\control\PlayStatusControl.vue
-->
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
    ...mapState("player", ["playStatus", "playMode", "currentPLayIndex"]),
    ...mapGetters("player", ["playSongsCount", "playIndexHistoryCount"]),
  },
  methods: {
    playPreviousSong() {
      if (this.playIndexHistoryCount > 0) {
        this.$store.commit("updateplayIndexHistory", -1);
      } else {
        this.playNextSong(false);
      }
    },
    playNextSong(addHistory = true) {
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
      if (addHistory) {
        this.$store.commit("updateplayIndexHistory", nextPlayIndex);
      }
    },
    switchPlayStatus() {
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
