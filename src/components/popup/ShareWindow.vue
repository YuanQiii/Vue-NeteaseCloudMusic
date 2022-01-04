<!--
 * @Author: your name
 * @Date: 2021-12-23 22:08:25
 * @LastEditTime: 2022-01-04 16:00:50
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\components\popup\ShareWindow.vue
-->
<template>
  <div
    class="share-window"
    :style="windowStyle"
    @mousemove="move"
    @mouseup="afterMove"
  >
    <div class="header" @mousedown="beforeMove">
      <div class="mode">分享</div>
      <div class="close" @click="closeWindow">x</div>
    </div>
    <div class="content">
      <div class="nav">
        <selected-tab text="分享给大家" />
        <selected-tab text="私信分享" />
      </div>
      <div class="edit">
        <textarea class="area" placeholder="说点什么吧" v-model="editContent" />
        <div class="thide">
          <div class="text">单曲：予你 - 队长</div>
        </div>
      </div>
      <div class="operation">
        <emotion-icon class="emotion" @click="updateEmotionShow" />
        <emotion-list class="emotion-list" @getEmotion="getEmotion" />

        <at-icon class="at" />
        <image-upload-icon class="upload" />
        <div class="count" :style="editCountStyle">{{ editCount }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import AtIcon from "../../ui/Icon/AtIcon.vue";
import EmotionIcon from "../../ui/Icon/EmotionIcon.vue";
import EmotionList from "../../ui/Icon/EmotionList.vue";
import ImageUploadIcon from "../../ui/Icon/ImageUploadIcon.vue";
import SelectedTab from "../../ui/Tab/SelectedTab.vue";

export default {
  components: {
    SelectedTab,
    EmotionIcon,
    AtIcon,
    ImageUploadIcon,
    EmotionList,
  },
  name: "ShareWindow",
  data() {
    return {
      editContent: "嘻嘻",
      emotionShow: false,

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
    editCount() {
      return 150 - this.editContent.length;
    },
    editCountStyle() {
      return this.editCount < 0 ? { color: "#c20c2c" } : {};
    },
  },
  methods: {
    ...mapMutations(["UPDATE_POPUP_DOWNLOAD_SHOW"]),

    updateEmotionShow() {
      this.emotionShow = !this.emotionShow;
    },

    getEmotion(value) {
      console.log(value);
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
.share-window {
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
    width: 530px;
    padding: 20px 40px 30px;
    .nav {
      display: flex;
    }
    .edit {
      width: 446px;
      padding: 5px;
      border: 1px solid #e5e5e5;
      .area {
        width: 432px;
        height: 117px;
        outline: none;
        border: none;
        resize: none;
        font-size: 12px;
        color: #333;
        padding: 5px 6px 6px;
      }
      .thide {
        .text {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-wrap: normal;
          border-top: 1px solid #e5e5e5;
          width: 426px;
          height: 45px;
          line-height: 45px;
          color: #333;
          font-size: 14px;
          padding-left: 10px;
        }
      }
    }
    .operation {
      margin-top: 10px;
      display: flex;
      position: relative;
      .emotion {
        margin-right: 10px;
      }
      .emotion-list {
        position: absolute;
        left: -12px;
        top: 20px;
      }
      .at {
        margin-right: 10px;
      }
      .count {
        color: #999;
        font-size: 12px;
        line-height: 18px;
        margin-left: 362px;
        text-align: right;
      }
    }
  }
}
</style>