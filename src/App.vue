<!--
 * @Author: your name
 * @Date: 2021-10-19 09:48:46
 * @LastEditTime: 2021-12-29 15:56:09
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Projects\NeteaseCloudMusic\Vue-NeteaseCloudMusic\src\App.vue
-->
<template>
  <div @mouseup="updateIsMouseDown" class="app">
    <navigation-bar />

    <div>
      <login-window />
    </div>

    <div>
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>

    <div>
      <message-tip />

      <popup-window v-if="popupType" :title="popupType['title']">
        <download-window v-if="popupType['type'] == 'downnload'" />
        <create-playlist-window v-if="popupType['type'] == 'createPlaylist'" />
        <add-to-playlist-window v-if="popupType['type'] == 'addToPlaylist'" />
      </popup-window>
    </div>

    <music-player />
  </div>
</template>

<script>
import DownloadWindow from "./components/popup/DownloadWindow.vue";
import AddToPlaylistWindow from "./components/popup/AddToPlaylistWindow.vue";
import LoginWindow from "./components/login/LoginWindow.vue";
import NavigationBar from "./components/navigation/NavigationBar.vue";
import MusicPlayer from "./components/player/MusicPlayer.vue";
import CreatePlaylistWindow from "./components/popup/CreatePlaylistWindow.vue";
import MessageTip from "./components/tip/MessageTip.vue";
import PopupWindow from "./components/popup/PopupWindow.vue";
import { mapState } from "vuex";

export default {
  components: {
    NavigationBar,
    MusicPlayer,
    LoginWindow,
    DownloadWindow,
    AddToPlaylistWindow,
    CreatePlaylistWindow,
    MessageTip,
    PopupWindow,
  },
  computed: {
    ...mapState(["popupType"]),
  },
  methods: {
    updateIsMouseDown() {
      this.$store.commit("updateIsMouseDown", false);
      this.$store.commit("login/UPDATE_LOGIN_WINDOW_MOVE", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.app {
  display: block;
  width: 100vw;
  height: 100%;
  overflow: hidden;
}
</style>
