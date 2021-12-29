<template>
  <div class="create-playlist-window">
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
        <send-button
          text="取消"
          class="button2"
          @click.native="UPDATE_POPUP_TYPE(null)"
        />
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
      playlistName: "",
      text: "新建",
    };
  },
  computed: {
    ...mapState("user", ["userOperateSong"]),
    ...mapGetters("user", ["userCreatedPlaylist"]),
  },
  methods: {
    ...mapMutations(["UPDATE_POPUP_TYPE", "UPDATE_MESSAGE_TIP_INFO"]),

    createPlaylist() {
      this.text = "新建中...";

      let pid = this.checkPlaylistExist(this.playlistName);

      if (pid) {
        playlistTracksApi("add", pid, this.userOperateSong)
          .then((response) => {
            if (response["data"]["status"] == 200) {
              console.log("创建歌单添加歌曲");
              this.UPDATE_POPUP_TYPE(null);
              this.UPDATE_MESSAGE_TIP_INFO({
                text: "收藏成功",
                type: "correct",
                show: true,
              });
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
              this.UPDATE_POPUP_TYPE(null);
              this.UPDATE_MESSAGE_TIP_INFO({
                text: "收藏成功",
                type: "correct",
                show: true,
              });
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
  },
};
</script>

<style lang="scss" scoped>
.create-playlist-window {
  width: 480px;
  height: 210px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 4px;

  .content {
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