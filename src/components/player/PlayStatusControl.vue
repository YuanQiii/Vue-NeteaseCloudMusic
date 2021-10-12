<template>
  <div class="play-control">
    <div class="play-control-previous" @click="togglePlayMusic(-1)">
      <img src="../../assets/player/next.png" alt />
    </div>
    <div class="play-control-pause">
      <img
        src="../../assets/player/musicpause.png"
        v-show="playStatus == 'pause'"
        @click="switchPlayStatus()"
      />
      <img
        src="../../assets/player/musicplay.png"
        v-show="playStatus == 'play'"
        @click="switchPlayStatus()"
      />
    </div>
    <div class="play-control-next" @click="togglePlayMusic(1)">
      <img src="../../assets/player/next.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayStatusControl",
  data() {
    return {
      playStatus: "pause",
    };
  },
  methods: {
    switchPlayMusic(value) {
      console.log(value);
    },
    switchPlayStatus() {
      this.playStatus = this.playStatus == "pause" ? "play" : "pause";
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