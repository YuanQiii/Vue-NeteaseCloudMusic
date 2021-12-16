<template>
  <div
    class="create-playlist-window"
    :style="windowStyle"
    @mousemove="move"
    @mouseup="afterMove"
    v-if="popupCreatePlaylistShow"
  >
    <div class="header" @mousedown="beforeMove">
      <div class="mode">新建歌单</div>
      <div class="close" @click="UPDATE_POPUP_CREATE_PLAYLIST(false)">x</div>
    </div>
    <div class="content">
      <div class="name">
        <div class="text">歌单名：</div>
        <div><input type="text" class="input" v-model="playlistName" /></div>
      </div>
      <div class="tip">可通过“收藏”将音乐添加到新歌单中</div>
      <div class="footer">
        <login-button
          :text="text"
          class="button1"
          @click.native="createPlaylist"
        />
        <send-button text="取消" class="button2" @click.native="cancelWindow" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import LoginButton from "../../ui/Button/LoginButton.vue";
import SendButton from "../../ui/Button/SendButton.vue";

import { playlistCreateApi, playlistTracksApi } from "@/api/playlist.js";

export default {
  name: "DownloadWindow",
  components: {
    LoginButton,
    SendButton,
  },
  data() {
    return {
      left: 800,
      top: 400,
      diffX: 0,
      diffY: 0,
      moveEnable: false,
      text: "新建",
      playlistName: "",
    };
  },
  computed: {
    ...mapState(["popupCreatePlaylistShow"]),
    ...mapState("user", ["userOperateSong"]),
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
      "UPDATE_POPUP_CREATE_PLAYLIST",
      "UPDATE_MESSAGE_TIP_TEXT",
    ]),

    createPlaylist() {
      this.text = "新建中...";

      let pid = this.checkPlaylistExist(this.playlistName);

      if (pid) {
        playlistTracksApi("add", pid, this.userOperateSong)
          .then((response) => {
            if (response["data"]["status"] == 200) {
              console.log("已创建的歌单添加歌曲");
              this.UPDATE_POPUP_CREATE_PLAYLIST(false);
              this.UPDATE_MESSAGE_TIP_TEXT("已收藏");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        playlistCreateApi(this.playlistName)
          .then((response) => {
            if (response["data"]["code"] == 200) {
              console.log("已创建歌单");
              return playlistTracksApi(
                "add",
                response["data"]["id"],
                this.userOperateSong
              );
            }
          })
          .then((response) => {
            if (response["data"]["status"] == 200) {
              console.log("已创建的歌单添加歌曲");
              this.UPDATE_POPUP_CREATE_PLAYLIST(false);
              this.UPDATE_MESSAGE_TIP_TEXT("已收藏");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },

    checkPlaylistExist(playlistName) {
      for (const playlist in this.userCreatedPlaylist) {
        if (Object.hasOwnProperty.call(this.userCreatedPlaylist, playlist)) {
          const element = this.userCreatedPlaylist[playlist];
          if (element["name"] == playlistName) {
            return element["id"];
          }
        }
      }
      return 0;
    },

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
      this.UPDATE_POPUP_DOWNLOAD_SHOW(false);
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
  },
};
</script>

<style lang="scss" scoped>
.create-playlist-window {
  max-width: 480px;
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
    height: 210px;
    padding-left: 40px;
    .name {
      display: flex;
      font-size: 12px;
      color: #333;
      margin-top: 40px;
      .text {
        line-height: 32px;
      }
      .input {
        width: 330px;
        height: 19px;
        vertical-align: middle;
        border-radius: 2px;
        outline: none;
        padding: 5px 6px 6px;
        text-decoration: none;
        border: solid 1px rgb(205, 205, 205);
      }
    }

    .tip {
      font-size: 12px;
      color: #999;
      margin-left: 50px;
      margin-top: 30px;
    }

    .footer {
      display: flex;
      margin-left: 50px;
      margin-top: 20px;
      .button1 {
        width: 80px;
        margin-right: 20px;
      }
      .button2 {
        width: 80px;
      }
    }
  }
}
</style>