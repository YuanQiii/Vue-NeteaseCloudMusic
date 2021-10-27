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
        <div
          v-for="(value, index) in playListSongsId"
          :key="index"
          :class="elementIsActive(currentPlaySongId, value)"
          @click="changeCurrentPLayIndex(index)"
        >
          <div class="item">
            <img
              class="arrow-image"
              src="../../../assets/player/triangle.png"
              v-show="currentPlaySongId == value"
            />
            <div class="song-name">
              {{ playListSongs[value]["name"] }}
            </div>
            <div class="operate">
              <!-- <operate :sendShow="sendShow" /> -->
            </div>
            <div class="artist-name">
              {{ playListSongs[value]["ar"][0]["name"] }}
            </div>
            <div class="duration">
              {{ parseDurationTime(playListSongs[value]["dt"]) }}
            </div>
            <img class="link-image" src="../../../assets/player/link.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

import { parseDurationTime } from "@/utils/parseDurationTime.js";
import { elementIsActive } from "@/utils/elementIsActive.js";

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
    elementIsActive(current, self) {
      return elementIsActive(current, self);
    },
  },
};
</script>

<style lang='scss' scoped>
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
  &::-webkit-scrollbar {
    background-color: #101010;
    width: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #454546;
    border-radius: 5px;
  }

  .active {
    opacity: 1;
  }

  .deactive {
    opacity: 0.7;
  }

  .image {
    cursor: pointer;
  }

  .tip {
    margin-top: 20px;

    .image {
      width: 36px;
      height: 29px;
      position: relative;
      top: 10px;
      left: -5px;
      opacity: 1;
      cursor: default;
    }

    .link {
      cursor: pointer;
      border-bottom: #aaa solid 1px;
    }
  }

  .list {
    display: flex;
    flex-direction: column;
    color: #fff;
    margin-top: -45px;

    .item {
      display: flex;
      height: 28px;
      font-size: 12px;
      position: relative;

      &:hover {
        background-color: #131211;
      }

      .song-name,
      .operate,
      .artist-name,
      .duration {
        line-height: 28px;
        padding: 0 10px;
      }

      .song-name {
        width: 246px;
        text-align: left;
        margin-right: 50px;
        margin-left: 30px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        cursor: pointer;
      }

      .operate {
        position: relative;
        left: -385px;
        top: -5px;
        opacity: 0;
      }

      .artist-name {
        width: 70px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }

      .duration {
        padding-left: 0;
      }

      .arrow-image {
        opacity: 1;
        width: 10px;
        height: 13px;
        position: absolute;
        top: 7px;
        margin-left: 10px;
        margin-right: 10px;
      }

      .link-image {
        width: 14px;
        height: 16px;
        position: relative;
        top: 7px;
        margin-left: 10px;
        margin-right: 10px;
      }
    }
  }
}
</style>