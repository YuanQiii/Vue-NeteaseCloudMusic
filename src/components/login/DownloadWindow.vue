<!--
 * @Author: your name
 * @Date: 2021-12-11 19:53:52
 * @LastEditTime: 2021-12-11 21:15:54
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\components\login\DownloadWindow.vue
-->
<template>
  <div class="download-window">
    <div class="head">
      <div class="text1">使用网易云客户端</div>
      <div class="text2">即可无限下载高品质音乐</div>
    </div>
    <div class="main">
      <div class="button">
        <download-client-button
          @click.native="downloadClient"
          class="download"
        />
        <installed-client-button
          @click.native="UPDATE_LOGIN_WINDOW_SHOW(false)"
        />
      </div>
      <div class="scan">
        <div class="code"></div>
        <div class="text">扫描下载手机版</div>
      </div>
    </div>
  </div>
</template>

<script>
import DownloadClientButton from "@/ui/Button/DownloadClientButton.vue";
import InstalledClientButton from "@/ui/Button/InstalledClientButton.vue";
import { mapMutations } from "vuex";
export default {
  name: "DownloadWindow",
  components: { DownloadClientButton, InstalledClientButton },
  methods: {
    ...mapMutations("login", ["UPDATE_LOGIN_WINDOW_SHOW"]),
    downloadClient() {
      window.open(
        "https://d1.music.126.net/dmusic/cloudmusicsetup2.7.5.198554.exe",
        "_blank"
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.download-window {
  width: 418px;
  .head {
    text-align: center;
    margin-top: 20px;
    .text1 {
      font-size: 20px;
      font-weight: 700;
      color: #333;
    }
    .text2 {
      color: #666;
      font-size: 12px;
      font-weight: 700;
      margin-top: 10px;
    }
  }
  .main {
    display: flex;
    margin-bottom: 36px;
    .button {
      padding-top: 24px;
      margin-left: 36px;
      margin-top: 16px;
      width: 181px;
      height: 162px;
      border-right: 1px dotted #ccc;
      .download {
        margin-bottom: 16px;
      }
    }
    .scan {
      .code {
        width: 86px;
        height: 86px;
        background-image: url(https://s2.music.126.net/style/web2/img/qtcode86.png);
        margin-left: 39px;
        margin-top: 38px;
      }
      .text {
        color: #666;
        font-size: 12px;
        margin-top: 14px;
        width: 164px;
        height: 16px;
        line-height: 16px;
        text-align: center;
      }
    }
  }
}
</style>