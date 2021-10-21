<template>
  <div class="play-setting">
    <div class="volume" @click="volumeShow">
      <img src="../../assets/player/volume.png" class="image" />
    </div>
    <div class="mode" @click="togglePlayType">
      <img
        src="../../assets/player/shuffle.png"
        v-show="playTypeCurrentIndex === 0"
        class="image"
      />
      <img
        src="../../assets/player/singlecycle.png"
        v-show="playTypeCurrentIndex === 1"
        class="image"
      />
      <img
        src="../../assets/player/loop.png"
        v-show="playTypeCurrentIndex === 2"
        class="image"
      />
    </div>
    <div class="panel" @click="toggleShow">
      <img src="../../assets/player/playlist.png" class="image" />
    </div>
    <div class="count">
      <div class="background">
        <!-- <span>{{ $store.state.musicAudioList.length }}</span> -->
        <span>10</span>
      </div>
    </div>
    <!-- <div v-show="toggleTip" class="tip">{{ togglePlayTip }}</div> -->
    <div
      v-show="toggleVolume"
      class="volume-bar"
      @mousemove="dragStart($event)"
      @mouseleave="dragFlag(false)"
    >
      <div class="point">
        <div class="rate" ref="rate"></div>
        <img
          src="../../assets/player/progress.png"
          class="image"
          @mousedown="dragFlag(true)"
          @mouseup="dragFlag(false)"
          draggable="false"
          ref="dragVolume"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlaySetting",
  data() {
    return {
      playTypeCurrentIndex: 0,
      toggleTip: true,
      toggleVolume: true,
      dragVolumeFlag: false,
      screenY: 0,
    };
  },
  methods: {
    volumeShow() {},
    togglePlayType() {},
    toggleShow() {},
    dragFlag(flag) {
      if (flag) {
        this.dragVolumeFlag = flag;
      } else {
        this.dragVolumeFlag = flag;
      }
    },
    dragStart(event) {
      if (this.dragVolumeFlag) {
        this.screenY = event.screenY;
        let val = 70 - (977 - this.screenY);
        if (0 <= val && val <= 70) {
          this.$refs.dragVolume.style.top = `${val}px`;
          this.$refs.rate.style.height = `${val}px`;
          this.$refs.audio.volume = (977 - this.screenY) / 70;
        }
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
  }
  .tip {
    width: 81px;
    height: 34px;
    background-color: #191919;
    position: absolute;
    text-align: center;
    color: #fff;
    font-size: 12px;
    line-height: 34px;
    border-radius: 5px;
    top: -35px;
    left: 1370px;
    box-shadow: 0px -1px 16px -5px #281406;
    z-index: 99;
  }

  .volume-bar {
    width: 32px;
    height: 103px;
    background-color: #040506;
    position: absolute;
    top: -103px;
    left: 1365px;
    z-index: 9;
  }

  .point {
    width: 4px;
    height: 80px;
    text-align: right;
    background-color: #c70c0c;
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
}
</style>