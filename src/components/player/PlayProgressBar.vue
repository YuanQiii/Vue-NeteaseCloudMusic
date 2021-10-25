<template>
  <div class="play-progress-bar">
    <div class="song-image">
      <img src="../../assets/player/note.png" class="image" />
    </div>

    <div class="play-progress" @mousemove="getMoveDistance">
      <div class="info">
        <div class="title" v-show="playSongInfoShow">
          <span class="song-name">{{ playSongTitleName }}</span>
        </div>
        <div class="artist" v-show="playSongInfoShow">
          <span class="artist-name">{{ playSongArtistName }}</span>
        </div>
        <div class="link" v-show="playSongInfoShow">
          <img src="../../assets/player/link.png" class="image" />
        </div>
      </div>

      <div class="bar">
        <div @mousedown="getPlayTime">
          <div class="all-bar" ref="playProgressBar" />
          <div class="elapsed-bar" :style="elapsedBarStyle" />
        </div>

        <div
          class="point"
          ref="progressBarPoint"
          draggable="false"
          :style="pointStyle"
          @mousedown="getStartPosition"
        >
          <div class="white"></div>
          <div class="red"></div>
        </div>
      </div>
    </div>

    <div class="duration-time">
      <span class="elapsed">{{ elapsedTimeStr }}</span>
      <span class="duration">/ {{ durationTimeStr }}</span>
    </div>
  </div>
</template>

<script>
import { parseDurationTime } from "@/utils/parseDurationTime.js";

import { mapGetters, mapState } from "vuex";

export default {
  name: "PlayProgressBar",
  data() {
    return {
      marginLeft: 0,
      width: 0,
      pointHalfWidth: 10,
      barWidth: 500,
    };
  },
  computed: {
    ...mapState({
      playListSongs: (state) => state.player.playListSongs,
      currentPLayIndex: (state) => state.player.currentPLayIndex,
      currentPlayTime: (state) => state.player.currentPlayTime,

      audio: (state) => state.player.audio,

      isMouseDown: (state) => state.isMouseDown,
    }),

    ...mapGetters(["playSongDurationTime"]),

    // 歌曲信息
    playSongInfoShow() {
      return Object.keys(this.playListSongs).length;
    },
    playSongTitleName() {
      if (this.playListSongs.hasOwnProperty(this.currentPLayIndex)) {
        return this.playListSongs[this.currentPLayIndex]["name"];
      } else {
        return "";
      }
    },
    playSongArtistName() {
      if (this.playListSongs.hasOwnProperty(this.currentPLayIndex)) {
        return this.playListSongs[this.currentPLayIndex]["ar"][0]["name"];
      } else {
        return "";
      }
    },

    // 样式
    pointStyle() {
      return {
        marginLeft: `${this.marginLeft - this.pointHalfWidth}px`,
      };
    },
    elapsedBarStyle() {
      return {
        width: `${this.width}px`,
      };
    },

    // 播放时间
    durationTimeStr() {
      return this.parseDurationTime(this.playSongDurationTime);
    },
    elapsedTimeStr() {
      return this.parseDurationTime(this.currentPlayTime * 1000);
    },

    // 播放条
    progressBarInfo() {
      return this.$refs.playProgressBar.getBoundingClientRect();
    },
    progressBarInfoX() {
      return this.progressBarInfo["x"];
    },
    progressBarInfoWidth() {
      return this.progressBarInfo["width"];
    },
  },
  watch: {
    currentPlayTime: {
      handler(newValue, oldValue) {
        let currentRate = (newValue * 1000) / this.playSongDurationTime;
        this.handleCurrentTime(currentRate);
      },
    },
  },
  methods: {
    // 时间样式解析
    parseDurationTime(time) {
      return parseDurationTime(time);
    },
    handleCurrentTime(currentRate) {
      this.marginLeft = this.width = this.barWidth * currentRate;
    },
    // 根据进度获取时间
    getPlayTime(e) {
      let currentX = e["clientX"];
      let diff = currentX - this.progressBarInfoX;

      if (diff >= 0 && diff <= 500) {
        let currentRate =
          (currentX - this.progressBarInfoX) / this.progressBarInfoWidth;

        this.handleCurrentTime(currentRate);
        this.audio.currentTime =
          Math.round(this.playSongDurationTime * currentRate) / 1000;
      }
    },
    getStartPosition(e) {
      this.$store.commit("updateIsMouseDown", true);
    },
    getMoveDistance(e) {
      if (this.isMouseDown) {
        this.getPlayTime(e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.play-progress-bar {
  display: flex;
  margin-left: 30px;
}

.song-image {
  width: 35px;
  height: 35px;
  cursor: pointer;
  background-color: transparent;
  border: solid 1px;
  border-radius: 3px;
  margin-top: 7px;
  margin-right: 10px;

  .image {
    width: 35px;
    height: 35px;
    opacity: 1;
    cursor: default;
  }
}

.play-progress {
  display: flex;
  flex-direction: column;

  .info {
    margin-left: 20px;
    margin-top: 10px;
    display: flex;
    color: #e8e8e8;
    font-size: 12px;
    height: 17px;
    user-select: none;

    .title {
      margin-right: 15px;
      &:hover {
        .song-name {
          border-bottom: solid 1px;
          cursor: pointer;
        }
      }
    }
    .artist {
      color: #989898;
      &:hover {
        .artist-name {
          border-bottom: solid 1px;
          cursor: pointer;
        }
      }
    }

    .link {
      .image {
        position: relative;
        top: 1px;
        width: 15px;
        height: 15px;
        margin-left: 15px;
      }
    }
  }

  .bar {
    margin-left: 10px;
    margin-top: 5px;

    .all-bar {
      width: 500px;
      height: 10px;
      background-color: #131414;
      border-radius: 10px;
    }

    .elapsed-bar {
      height: 10px;
      background-color: #c70c0c;
      border-radius: 10px;
      position: relative;
      top: -10px;
    }

    .point {
      width: 0px;
      margin-top: -20px;
      height: 10px;
      z-index: 99;
      background-color: #c70c0c;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      position: relative;

      .white {
        position: absolute;
        top: -3px;
        background-color: #fff;
        width: 16px;
        height: 16px;
        border-radius: 50%;
      }

      .red {
        position: absolute;
        left: 5px;
        top: 2px;
        width: 6px;
        height: 6px;
        background-color: #c70c0c;
        border-radius: 50%;
      }
    }
  }
}

.duration-time {
  font-size: 12px;
  margin-left: 10px;
  margin-top: 30px;
  user-select: none;

  .elapsed {
    color: #a1a1a1;
  }
  .duration {
    color: #797979;
  }
}
</style>
