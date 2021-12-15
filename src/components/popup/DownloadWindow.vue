<!--
 * @Author: your name
 * @Date: 2021-12-15 15:40:35
 * @LastEditTime: 2021-12-15 15:56:44
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\components\popup\DownloadWindow.vue
-->
<template>
  <div
    class="download-window"
    :style="windowStyle"
    @mousemove="move"
    @mouseup="afterMove"
    v-if="popupDownloadShow"
  >
    <div class="header" @mousedown="beforeMove">
      <div class="mode">下载</div>
      <div class="close" @click="closeWindow">x</div>
    </div>
    <div class="content">
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
  </div>
</template>

<script>
import DownloadClientButton from "@/ui/Button/DownloadClientButton.vue";
import InstalledClientButton from "@/ui/Button/InstalledClientButton.vue";
import { mapState, mapMutations } from "vuex";

export default {
  components: { DownloadClientButton, InstalledClientButton },
  name: "DownloadWindow",
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
    ...mapState(["popupDownloadShow"]),
    windowStyle() {
      return {
        left: `${this.left}px`,
        top: `${this.top}px`,
      };
    },
  },
  methods: {
    ...mapMutations(["UPDATE_POPUP_DOWNLOAD_SHOW"]),

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
}
</style>
