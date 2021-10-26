<template>
  <div>
    <div class="PlaylistDetail">
      <div v-if="!playListSongsId.length" class="tip">
        <img src="../../../assets/player/listen.png" class="image" />
        <span>你还没有添加任何歌曲</span>
        <br />
        <span>
          去首页
          <span class="link" @click="toPage('Recommend')">发现音乐</span>，或在
          <span class="link" @click="toPage('My')">我的音乐</span
          >收听自己收藏的歌单。
        </span>
      </div>

      <div v-else class="list">
        <div class="bg">
          <!-- <img :src="musicAudioDetail.songs[0].al.picUrl" ref="bgimg" /> -->
        </div>

        <div
          class="item"
          v-for="(value, index) in playListSongsId"
          :key="index"
          @click="changeCurrentPLayIndex(index)"
        >
          <img
            src="../../../assets/player/triangle.png"
            v-show="currentPlaySongId == value"
          />
          <div>
            {{ playListSongs[value]["name"] }}
          </div>
          <div>
            <!-- <operate :sendShow="sendShow" /> -->
          </div>
          <div>
            {{ playListSongs[value]["ar"][0]["name"] }}
          </div>
          <div>
            {{ parseDurationTime(playListSongs[value]["dt"]) }}
          </div>
          <img src="../../../assets/player/link.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

import { parseDurationTime } from "@/utils/parseDurationTime.js";

export default {
  name: "PlaylistDetail",
  data() {
    return {
      musicAudioId: null,
    };
  },
  computed: {
    ...mapState({
      playListSongs: (state) => state.player.playListSongs,
      playListSongsId: (state) => state.player.playListSongsId,
    }),

    ...mapGetters(["currentPlaySongId"]),
  },
  methods: {
    toPage(pageName) {
      if (this.$route.name != pageName) {
        this.$router.push({
          name: pageName,
        });
      }
      this.$store.commit("updatePlaylistShow", false);
    },

    changeCurrentPLayIndex(index) {
      this.$store.commit("updateCurrentPLayIndex", index);
    },

    parseDurationTime(time) {
      return parseDurationTime(time);
    },
  },
};
</script>

<style scoped>
.tip {
  margin-top: 20px;
}
img:hover {
  opacity: 1;
}
img {
  opacity: 0.7;
  cursor: pointer;
}
.list {
  display: flex;
  flex-direction: column;
  color: #fff;
  margin-top: -45px;
}
.item {
  display: flex;
  height: 28px;
  font-size: 12px;
  position: relative;
}
.item > div {
  line-height: 28px;
  padding: 0 10px;
  opacity: 0.7;
}
.item:hover {
  background-color: #131211;
}
.item:hover > div {
  opacity: 1;
}
.item > div:first-of-type {
  width: 246px;
  text-align: left;
  margin-right: 50px;
  margin-left: 30px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
}
.item > div:nth-of-type(2) {
  position: relative;
  left: -385px;
  top: -5px;
  opacity: 0;
}
.item:hover > div:nth-of-type(2) {
  opacity: 1;
}

.item > div:nth-of-type(3) {
  width: 70px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.item > div:nth-of-type(4) {
  padding-left: 0;
}
.item > img:first-of-type {
  opacity: 1;
  width: 10px;
  height: 13px;
  position: absolute;
  top: 7px;
  margin-left: 10px;
  margin-right: 10px;
}
.item > img:last-of-type {
  width: 14px;
  height: 16px;
  position: relative;
  top: 7px;
  margin-left: 10px;
  margin-right: 10px;
}
.link {
  border-bottom: solid 1px;
  cursor: pointer;
}
.image {
  width: 36px;
  height: 29px;
  position: relative;
  top: 10px;
  left: -5px;
  opacity: 1;
  cursor: default;
}
.PlaylistDetail {
  text-align: center;
  padding-top: 8%;
  border-right: #0b0b0b solid 5px;
  width: 553px;
  height: 215px;
  color: #aaa;
  font-size: 12px;
  line-height: 50px;
  overflow: auto;
}
.bg > img {
  position: relative;
  top: 30px;
  height: 160px;
  width: 458px;
  opacity: 0.3;
  filter: blur(100px);
}
.bg {
  position: absolute;
  height: 260px;
  width: 558px;
}

.PlaylistDetail::-webkit-scrollbar {
  background-color: #101010;
  width: 7px;
}
.PlaylistDetail::-webkit-scrollbar-thumb {
  background-color: #454546;
  border-radius: 5px;
}
</style>