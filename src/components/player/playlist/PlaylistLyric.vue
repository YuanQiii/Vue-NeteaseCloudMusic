<template>
  <div class="play-list-lyric">
    <img src="../../../assets/player/unknown.png" class="image" />
    <div v-for="(value, key, index) in lyric" :key="index">
      <div class="item">{{ value }}</div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: "PlaylistLyric",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      playListSongsLyric: (state) => state.player.playListSongsLyric,
    }),

    ...mapGetters(["currentPlaySongId"]),

    lyric() {
      let lyricList =
        this.playListSongsLyric[this.currentPlaySongId].split("\n");
      let timeLyric = {};

      lyricList.forEach((element) => {
        let key = element.slice(0, 11);
        let value = element.slice(11, element.length);
        timeLyric[key] = value;

        this.handleTimeStr(key);
      });

      return timeLyric;
    },
  },
  methods: {
    handleTimeStr(str) {
      let minute = Number(str.slice(1, 3));
      let second = Number(str.slice(4, str.length - 1));
      console.log(
        "🚀 ~ file: PlaylistLyric.vue ~ line 46 ~ handleTimeStr ~ minute * 60 + second",
        minute * 60 + second
      );
      return minute * 60 + second;
    },
  },
};
</script>
<style lang='scss' scoped>
.play-list-lyric {
  color: #989898;
  font-size: 12px;
  line-height: 32px;
  width: 470px;
  overflow: auto;
  height: 240px;
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
    text-align: center;
  }
}
</style>