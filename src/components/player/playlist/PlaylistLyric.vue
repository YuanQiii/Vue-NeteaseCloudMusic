<!--
 * @Author: your name
 * @Date: 2021-10-26 09:40:15
 * @LastEditTime: 2021-11-02 16:41:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Projects\NeteaseCloudMusic\Vue-NeteaseCloudMusic\src\components\player\playlist\PlaylistLyric.vue
-->
<template>
  <div class="play-list-lyric" ref="playlistLyric">
    <img src="../../../assets/player/unknown.png" class="image" />
    <div v-for="(value, key, index) in lyric" :key="index">
      <div :class="elementIsActive(lyricIndex, index, 'item')">{{ value }}</div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";

import { elementIsActive } from "@/utils/elementIsActive.js";

export default {
  name: "PlaylistLyric",
  data() {
    return {
      lyricTimestamp: [],
      lastLyricIndex: 0,

      ITEM_HEIGHT: 32,

      lyricBox: {}, //歌词元素对象
      lastScrollTop: 0, //记录上一次的滚动位置
    };
  },
  mounted() {
    this.lyricBox = this.$refs.playlistLyric;
  },
  computed: {
    ...mapState({
      playListSongsLyric: (state) => state.player.playListSongsLyric,
      currentPlayTime: (state) => state.player.currentPlayTime,
    }),

    ...mapGetters(["currentPlaySongId"]),

    /**
     * @description: 歌词对象，时间戳为键，歌词为值
     * 创建歌词时间戳数组
     * @param {*}
     * @return {*}
     */
    lyric() {
      let songLyric = this.playListSongsLyric[this.currentPlaySongId];

      if (songLyric) {
        let lyricList = songLyric.split("\n");
        let timeLyric = {};

        lyricList.forEach((element) => {
          let timestampStr = element.slice(0, 11);
          this.lyricTimestamp.push(this.handleTimestampStr(timestampStr));

          let key = timestampStr;
          let value = element.slice(11, element.length);
          timeLyric[key] = value;
        });
        return timeLyric;
      }

      return {};
    },

    /**
     * @description: 当前歌词索引
     * @param {*}
     * @return {*}
     */
    lyricIndex() {
      let timestampIndex = 0;
      for (
        let index = this.lastLyricIndex;
        index < this.lyricTimestamp.length;
        index++
      ) {
        const value = this.lyricTimestamp[index];
        if (this.currentPlayTime <= value) {
          timestampIndex = index;
          break;
        }
      }
      return timestampIndex;
    },
  },
  watch: {
    /**
     * @description: 更新滚动条距离
     * @param {*} newValue
     * @param {*} oldValue
     * @return {*}
     */
    lyricIndex(newValue, oldValue) {
      if (newValue < 3) {
        this.lyricBox["scrollTop"] = 0;
      } else if (newValue > this.lyricTimestamp.length - 4) {
        this.lyricBox["scrollTop"] = this.lastScrollTop;
      } else {
        this.lyricBox["scrollTop"] = this.ITEM_HEIGHT * (newValue - 3);
      }

      this.lastScrollTop = this.lyricBox["scrollTop"];
    },
  },
  methods: {
    /**
     * @description: 时间戳转换为秒
     * @param {*} str
     * @return {*}
     */
    handleTimestampStr(str) {
      let minute = Number(str.slice(1, 3));
      let second = Number(str.slice(4, str.length - 1));
      return minute * 60 + second;
    },
    elementIsActive(current, self, origin) {
      return elementIsActive(current, self, origin);
    },
  },
};
</script>
<style lang='scss' scoped>
.play-list-lyric {
  width: 470px;
  overflow: auto;
  height: 230px;
  margin-top: 20px;
  position: relative;
  display: flex;
  flex-direction: column;

  &::-webkit-scrollbar {
    background-color: #101010;
    width: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #454546;
    border-radius: 5px;
  }

  .image {
    width: 21px;
    height: 21px;
    opacity: 0.5;
    position: fixed;
    left: 68%;
    top: 58%;

    &:hover {
      opacity: 1;
      cursor: pointer;
    }
  }

  .item {
    color: #989898;
    font-size: 12px;
    line-height: 32px;
    text-align: center;
    transition: 0.5s;
  }

  .active {
    color: #fff;
    font-size: 15px;
  }
}
</style>