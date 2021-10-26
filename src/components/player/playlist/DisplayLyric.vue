<template>
  <div class="displaylyric" ref="displaylyric">
    <img src="../../../assets/player/unknown.png" alt />
    <img :src="musicAudioDetail.songs[0].al.picUrl" class="lyricbg" />
    <div class="lys">
      <!-- <p
        v-for="(value, index) in allLyric"
        :key="index"
        :class="value === currentTxt && index === currentNum?'ly active':'ly'"
      >{{value}}</p> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "DisplayLyric",
  data() {
    return {
      lyrics: null,
      lines: null,
      timeExp: /\[(\d{2,}):(\d{2,3})(?:\.(\d{2,3}))?]/g,
      allLyric: [],
      currentNum: "",
      currentTxt: "",
      timer: null,
      lyricParser: null,
      first: 0,
      last: 0,
    };
  },
  computed: {
    musicId() {
      return this.$store.state.musicAudioId;
    },
    musicList() {
      return this.$store.state.musicAudioList;
    },
    musicAudioIndex() {
      return this.$store.state.musicAudioIndex;
    },
    musicAudioDetail() {
      return this.$store.state.musicAudioDetail;
    },
    musicAudioLyric() {
      return this.$store.state.musicAudioLyric;
    },
    musicAudioLyricList() {
      return this.$store.state.musicAudioLyricList;
    },
    musicLyricIsPlay() {
      return this.$store.state.musicLyricIsPlay;
    },
  },
  watch: {
    // musicId(newVal, oldVal) {
    //   this.getLyric();
    // },
    // musicLyricIsPlay(newVal, oldVal){
    //   this.lyricParser.togglePlay()
    // }
  },
  methods: {
    // playCurrentMusic() {},
    // getLyric() {
    //   this.lyrics = this.musicAudioLyric.lrc.lyric;
    //   this.totalLyric();
    //   document.querySelector(".displaylyric").scrollTop = 0;
    //   if (this.lyricParser !== null) {
    //     this.lyricParser.stop();
    //     this.lyricParser = null
    //   }
    //   this.lyricParser = new Lyric(this.lyrics, this.handler);
    //   this.lyricParser.play();
    // },
    // handler(obj) {
    //   this.currentTxt = obj.txt
    //   this.currentNum = obj.lineNum;
    //   var dl = document.querySelector(".displaylyric");
    //   if (obj.lineNum > 3) {
    //     dl.scrollTop += 32;
    //   }
    // },
    // totalLyric() {
    //   // 通过换行符，拆解歌词
    //   const lines = this.lyrics.split("\n");
    //   this.allLyric = [];
    //   for (let i = 0; i < lines.length; i++) {
    //     const line = lines[i];
    //     // 匹配时间戳
    //     let result = this.timeExp.exec(line);
    //     if (result) {
    //       // 去掉时间，只留下文字部分
    //       const txt = line.replace(this.timeExp, "").trim();
    //       this.allLyric.push(txt);
    //       this.allLyric = this.allLyric.filter((ele) => {
    //         return ele !== "";
    //       });
    //     }
    //   }
    // },
  },
};
</script>
<style scoped>
.lyricbg {
  position: absolute;
  width: 311px;
  height: 120px;
  left: 600px;
  top: 90px;
  filter: blur(50px);
  opacity: 0.5;
}
.displaylyric {
  color: #c70c0c;
  width: 470px;
  overflow: auto;
  height: 240px;
  margin-top: 20px;
}
.lys {
  position: relative;
}
.ly {
  text-align: center;
  font-size: 12px;
  color: #989898;
  line-height: 32px;
  transition: 0.5s;
  filter: none;
}

.ly.active {
  font-size: 14px;
  height: 32px;
  color: #fff;
}
.displaylyric > img:first-of-type {
  position: fixed;
  width: 21px;
  height: 21px;
  opacity: 0.6;
  left: 1410px;
  top: 670px;
}
.displaylyric > img:first-of-type:hover {
  opacity: 1;
  cursor: pointer;
}
.displaylyric::-webkit-scrollbar {
  background-color: #101010;
  width: 7px;
}
.displaylyric::-webkit-scrollbar-thumb {
  background-color: #454546;
  border-radius: 5px;
}
</style>