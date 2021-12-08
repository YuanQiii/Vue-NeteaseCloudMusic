<template>
  <div class="play-setting">
    <div class="volume" @click="switchVolumeShow">
      <img src="../../../assets/player/volume.png" class="image" />
    </div>
    <div class="mode" @click="switchPlayMode">
      <img
        src="../../../assets/player/shuffle.png"
        v-show="playMode == '随机'"
        class="image"
      />
      <img
        src="../../../assets/player/singlecycle.png"
        v-show="playMode == '单曲循环'"
        class="image"
      />
      <img
        src="../../../assets/player/loop.png"
        v-show="playMode == '循环'"
        class="image"
      />
    </div>
    <div class="panel" @click="switchPlaylistShow">
      <img src="../../../assets/player/playlist.png" class="image" />
    </div>
    <div class="count">
      <div class="background">
        <span class="count">{{ playSongsCount }}</span>
      </div>
    </div>
    <div v-show="modeTipShow" class="tip">{{ playMode }}</div>
    <div v-show="volumeShow" class="volume-bar" @mousemove="getMoveDistance">
      <div class="bar">
        <div @mousedown="getVolume">
          <div class="all-bar" ref="volumeBar" />
          <div class="surplus-bar" :style="surplusBarStyle" />
        </div>

        <div
          class="point"
          draggable="false"
          :style="pointStyle"
          @mousedown="getStartPosition"
        >
          <div class="white"></div>
          <div class="red"></div>
        </div>
      </div>
    </div>
    <div v-show="playlistShow" class="playlist-display">
      <playlist-display />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import PlaylistDisplay from "../playlist/PlaylistDisplay.vue";
export default {
  components: { PlaylistDisplay },
  name: "PlaySetting",
  data() {
    return {
      volumeShow: false,
      modeTipShow: false,
      modeTipTimeOut: null,
      playTypeCurrentIndex: 1,
      barHeight: 80,
      height: 80,
      top: 80,
    };
  },
  created() {
    this.initVolume();
  },
  computed: {
    ...mapState({
      audio: (state) => state.player.audio,
      playMode: (state) => state.player.playMode,
      playlistShow: (state) => state.player.playlistShow,

      isMouseDown: (state) => state.isMouseDown,
    }),

    ...mapGetters(["playSongsCount"]),

    surplusBarStyle() {
      return {
        height: `${this.height}px`,
      };
    },
    pointStyle() {
      return {
        top: `${this.top}px`,
      };
    },
    volumeBarInfo() {
      return this.$refs.volumeBar.getBoundingClientRect();
    },
    volumeBarInfoY() {
      return this.volumeBarInfo["y"];
    },
    volumeBarInfoHeight() {
      return this.volumeBarInfo["height"];
    },
  },
  methods: {
    initVolume() {
      this.handleVolume(this.audio.volume);
    },
    switchVolumeShow() {
      this.volumeShow = !this.volumeShow;
    },
    switchPlaylistShow() {
      this.$store.commit("updatePlaylistShow", !this.playlistShow);
    },
    switchPlayMode() {
      this.$store.commit("switchPlayMode");
      this.modeTipShow = true;
      if (this.modeTipTimeOut) {
        clearTimeout(this.modeTipTimeOut);
      }
      this.modeTipTimeOut = setTimeout(() => {
        this.modeTipShow = false;
      }, 1000);
    },
    getVolume(e) {
      let currentY = e["clientY"];

      let diff = currentY - this.volumeBarInfoY;

      if (diff >= 0 && diff <= 80) {
        let currentRate =
          (currentY - this.volumeBarInfoY) / this.volumeBarInfoHeight;

        this.handleVolume(currentRate);
      }
    },
    handleVolume(currentRate) {
      this.height = this.top = this.barHeight * currentRate;
      this.audio.volume = 1 - currentRate;
    },
    getStartPosition(e) {
      this.$store.commit("updateIsMouseDown", true);
    },
    getMoveDistance(e) {
      if (this.isMouseDown) {
        this.getVolume(e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.play-setting {
  display: flex;

  .volume {
    .image {
      width: 20px;
      height: 20px;
      margin-top: 14px;
      margin-left: 30px;
    }
  }

  .mode {
    position: relative;
    margin-left: 10px;
    margin-top: 14px;

    .image {
      width: 20px;
      height: 20px;
      position: absolute;
      left: 0;
    }
  }

  .panel {
    .image {
      width: 25px;
      height: 25px;
      margin-left: 33px;
      margin-top: 12px;
    }
  }

  .count {
    overflow: hidden;
    .background {
      background-color: #1e1e1e;
      height: 18px;
      width: 35px;
      margin-top: 14px;
      box-sizing: border-box;
      border-radius: 25px;
      color: #666;
      text-align: center;
      font-size: 12px;
      margin-left: -10px;
      padding-left: 5px;
    }

    .count {
      line-height: 18px;
    }
  }

  .tip {
    width: 81px;
    height: 34px;
    background-color: #191919;
    position: relative;
    text-align: center;
    color: #fff;
    font-size: 12px;
    line-height: 34px;
    border-radius: 5px;
    top: -35px;
    left: -120px;
    box-shadow: 0px -1px 16px -5px #281406;
    z-index: 99;
  }

  .volume-bar {
    width: 32px;
    height: 103px;
    background-color: #040506;
    z-index: 999;
    position: relative;
    left: -200px;
    top: -103px;
    opacity: 0.8;

    .all-bar {
      width: 4px;
      height: 80px;
      background-color: #c70c0c;
      position: absolute;
      top: 5px;
    }

    .surplus-bar {
      width: 4px;
      background-color: #191919;
      position: absolute;
      top: 5px;
    }

    .point {
      position: absolute;
      left: -5px;

      .white {
        position: absolute;
        top: -3px;
        left: 1px;
        background-color: #fff;
        width: 12px;
        height: 12px;
        border-radius: 50%;
      }

      .red {
        position: absolute;
        left: 4px;
        top: 0px;
        width: 6px;
        height: 6px;
        background-color: #c70c0c;
        border-radius: 50%;
      }
    }
  }

  .bar {
    margin-left: 14px;
    margin-top: 10px;
    position: relative;

    .rate {
      background-color: #191919;
      width: 4px;
      height: 100%;
    }

    .image {
      opacity: 1;
      width: 14px;
      position: absolute;
      left: -5px;
      top: 70px;
      transform: rotateZ(-90deg);
    }
  }

  .playlist-display {
    position: relative;
    left: -800px;
  }
}
</style>