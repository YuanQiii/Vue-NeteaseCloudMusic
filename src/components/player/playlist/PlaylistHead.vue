<template>
  <div class="playlist-head">
    <div class="operate">
      <div class="count">
        <span>播放列表({{ playSongsCount }})</span>
      </div>
      <div class="collect">
        <img class="image" src="../../../assets/player/musiccollect.png" alt />
        <span class="text">收藏全部</span>
      </div>
      <div class="clear" @click="clearPlaylist">
        <img class="image" src="../../../assets/player/clear.png" alt />
        <span class="text">清除</span>
      </div>
    </div>
    <div class="info">
      <div class="name">
        {{ currentPLaySongName }}
      </div>
      <div @click="closePlaylistShow" class="close">&Chi;</div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapState } from "vuex";
export default {
  name: "PlaylistHead",
  data() {
    return {};
  },
  computed: {
    ...mapState("player", ["playlistShow"]),
    ...mapGetters("player", ["currentPLaySongName", "playSongsCount"]),
  },
  methods: {
    ...mapMutations("player", [
      "DELETE_PLAYLIST_SONGS_INFO",
      "UPDATE_PLAYLIST_SHOW",
    ]),
    clearPlaylist() {
      this.DELETE_PLAYLIST_SONGS_INFO(null);
    },
    closePlaylistShow() {
      this.UPDATE_PLAYLIST_SHOW(false);
    },
  },
};
</script>
<style lang='scss' scoped>
.playlist-head {
  width: 100%;
  height: 40px;
  background: #181818;
  border-radius: 5px;
  display: flex;

  .operate {
    width: 558px;
    display: flex;

    .count {
      color: #fff;
      font-size: 14px;
      margin-top: 8px;
      margin-left: 25px;
    }

    .collect {
      margin-left: 305px;
      margin-right: 15px;

      opacity: 0.7;
      font-size: 12px;
      color: #ccc;
      margin-top: 5px;
      position: relative;

      .image {
        width: 20px;
        height: 20px;
        position: relative;
        top: 4px;
        margin-right: 3px;
      }

      &:hover {
        opacity: 1;
        cursor: pointer;
        .text {
          border-bottom: solid 1px;
          color: #e2e2e2;
        }
      }
    }

    .clear {
      opacity: 0.7;
      font-size: 12px;
      color: #ccc;
      margin-top: 5px;
      position: relative;

      .image {
        width: 20px;
        height: 20px;
        position: relative;
        top: 4px;
        margin-right: 3px;
      }

      &:hover {
        opacity: 1;
        cursor: pointer;
        .text {
          border-bottom: solid 1px;
          color: #e2e2e2;
        }
      }
    }
  }

  .info {
    display: flex;
    justify-content: center;
    width: 411px;
    color: #fff;

    .name {
      line-height: 40px;
      font-size: 14px;
    }
    .close {
      position: absolute;
      color: #7c7c7c;
      cursor: pointer;
      left: 97.5%;
      top: 2%;
      opacity: 0.7;

      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>