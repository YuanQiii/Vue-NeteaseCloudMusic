<!--
 * @Author: your name
 * @Date: 2021-12-15 15:58:06
 * @LastEditTime: 2021-12-21 14:53:22
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\components\popup\AddToPlaylist.vue
-->
<template>
  <div
    class="add-to-playlist-window"
    :style="windowStyle"
    @mousemove="move"
    @mouseup="afterMove"
    v-if="popupAddToPlaylistShow"
  >
    <div class="header" @mousedown="beforeMove">
      <div class="mode">添加到歌单</div>
      <div class="close" @click="closeWindow">x</div>
    </div>
    <div class="content">
      <div class="add" @click="CreatePlaylist">
        <add-to-playlist-icon class="icon" />
        <div class="text">新歌单</div>
      </div>
      <div
        class="item"
        v-for="(value, index) in userCreatedPlaylist"
        :key="index"
        @click="addToPlaylist(value['id'])"
      >
        <img class="image" :src="value['coverImgUrl']" />
        <div class="info">
          <div class="name">{{ value["name"] }}</div>
          <div class="count">{{ value["trackCount"] }}首</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import AddToPlaylistIcon from "../../ui/Icon/AddToPlaylistIcon.vue";

import { playlistTrackAllApi } from "@/api/playlist.js";

export default {
  name: "AddToPlaylistWindow",
  components: {
    AddToPlaylistIcon,
  },
  data() {
    return {
      left: 800,
      top: 400,
      diffX: 0,
      diffY: 0,
      moveEnable: false,
    };
  },
  computed: {
    ...mapState(["popupAddToPlaylistShow"]),
    ...mapGetters("user", ["userCreatedPlaylist"]),
    windowStyle() {
      return {
        left: `${this.left}px`,
        top: `${this.top}px`,
      };
    },
  },
  methods: {
    ...mapMutations([
      "UPDATE_POPUP_ADD_TO_PLAYLIST",
      "UPDATE_POPUP_CREATE_PLAYLIST",
    ]),

    beforeMove(e) {
      this.diffX = e["offsetX"];
      this.diffY = e["offsetY"];
      this.moveEnable = true;
    },
    move(e) {
      if (this.moveEnable) {
        this.left = this.limitPosition(
          e["clientX"] - this.diffX,
          window.innerWidth - 530
        );
        this.top = this.limitPosition(
          e["clientY"] - this.diffY,
          window.innerHeight - 332
        );
      }
    },
    afterMove() {
      this.moveEnable = false;
    },
    closeWindow() {
      this.UPDATE_POPUP_ADD_TO_PLAYLIST(false);
    },
    limitPosition(value, max) {
      if (value <= 0) {
        return 0;
      } else if (value >= max) {
        return max;
      } else {
        return value;
      }
    },
    CreatePlaylist() {
      this.UPDATE_POPUP_ADD_TO_PLAYLIST(false);
      this.UPDATE_POPUP_CREATE_PLAYLIST(true);
    },
    addToPlaylist(id) {
      playlistTrackAllApi(id).then((response) => {
        console.log(response);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.add-to-playlist-window {
  max-width: 530px;
  min-height: 315px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  box-shadow: 0 5px 16px rgb(0 0 0 / 80%);
  z-index: 999;
  position: absolute;
  user-select: none;

  .header {
    color: #fff;
    height: 38 px;
    line-height: 38px;
    display: flex;
    background: #2d2d2d;
    justify-content: space-between;
    cursor: move;
    border-radius: 4px 4px 0 0;
  }

  .mode {
    margin-left: 18px;
  }

  .close {
    margin-right: 18px;
    cursor: pointer;
  }

  .content {
    width: 480px;
    height: 380px;
    overflow-y: scroll;
    cursor: pointer;
    .add {
      display: flex;
      background: #e6e6e6;
      height: 56px;
      line-height: 56px;
      .icon {
        margin-left: 35px;
        margin-top: 12px;
        margin-right: 10px;
      }
      .text {
        font-size: 12px;
        color: #333;
      }
    }
    .item {
      height: 55px;
      padding-left: 35px;
      display: flex;
      font-size: 12px;
      border-bottom: solid 1px rgb(224, 224, 224);

      &:hover {
        background-color: #e6e6e6;
      }

      .image {
        width: 40px;
        height: 40px;
        margin-top: 8px;
        margin-right: 10px;
      }
      .info {
        margin-top: 8px;
        .count {
          color: #666;
          margin-top: 12px;
        }
      }
    }
  }
}
</style>
