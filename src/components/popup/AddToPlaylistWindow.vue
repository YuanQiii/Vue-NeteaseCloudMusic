<!--
 * @Author: your name
 * @Date: 2021-12-15 15:58:06
 * @LastEditTime: 2021-12-29 22:33:57
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\components\popup\AddToPlaylist.vue
-->
<template>
  <div class="add-to-playlist-window">
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
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
import AddToPlaylistIcon from "../../ui/Icon/AddToPlaylistIcon.vue";

import { playlistTracksApi } from "@/api/playlist.js";

export default {
  name: "AddToPlaylistWindow",
  components: {
    AddToPlaylistIcon,
  },
  computed: {
    ...mapState("user", ["userOperateSong"]),
    ...mapGetters("user", ["userCreatedPlaylist"]),
    ...mapGetters("playlist", ["playlistTrackIds"]),
  },
  methods: {
    ...mapMutations(["UPDATE_POPUP_TYPE", "UPDATE_MESSAGE_TIP_INFO"]),
    ...mapGetters("playlist", ["playlistTrackIds"]),
    ...mapActions("playlist", ["getPlaylistDetail"]),

    CreatePlaylist() {
      this.UPDATE_POPUP_TYPE("createPlaylist");
    },
    addToPlaylist(id) {
      this.getPlaylistDetail(id).then(() => {
        if (this.decideSongExist(id)) {
        } else {
          playlistTracksApi("add", id, this.userOperateSong).then(
            (response) => {
              if (response["data"]["status"] == 200) {
                this.UPDATE_POPUP_TYPE(null);
                this.UPDATE_MESSAGE_TIP_INFO({
                  text: "收藏成功",
                  type: "correct",
                  show: true,
                });
              } else {
                this.UPDATE_POPUP_TYPE(null);
                this.UPDATE_MESSAGE_TIP_INFO({
                  text: "歌曲已存在！",
                  type: "error",
                  show: true,
                });
              }
            }
          );
        }
      });
    },
    decideSongExist(data) {
      return this.playlistTrackIds.some((element) => {
        return element["id"] == data;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.add-to-playlist-window {
  width: 480px;
  height: 375px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 4px;

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
