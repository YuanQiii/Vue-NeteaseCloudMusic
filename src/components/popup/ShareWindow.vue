<!--
 * @Author: your name
 * @Date: 2021-12-23 22:08:25
 * @LastEditTime: 2022-01-06 17:52:17
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\components\popup\ShareWindow.vue
-->
<template>
  <div class="share-window">
    <div class="content">
      <div class="nav">
        <selected-tab text="分享给大家" />
        <selected-tab text="私信分享" />
      </div>
      <div class="edit">
        <div-editable
          class="area"
          :value="editContent"
          @input="input"
          @focusFunc="focusFunc"
          @blurFunc="blurFunc"
        />
        <div class="thide">
          <div class="text">单曲：雅俗共赏 - 许嵩</div>
        </div>
      </div>
      <div class="operation">
        <emotion-icon class="emotion" @click.native="updateEmotionShow" />
        <share-emotion-list
          class="emotion-list"
          @getEmotion="getEmotion"
          v-show="emotionShow"
        />

        <at-icon class="at" @click.native="updateAtShow" />
        <share-follows-list
          class="follows-list"
          v-show="followMode"
          :style="followListStyle"
          :userFollows="userFollows"
          :followMode="followMode"
          @getFollowNickname="getFollowNickname"
        />

        <image-upload-icon class="upload" />
        <div class="count" :style="editWordCountStyle">{{ editWordCount }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";

import { userFollowsApi } from "@/api/user.js";

import AtIcon from "../../ui/Icon/AtIcon.vue";
import EmotionIcon from "../../ui/Icon/EmotionIcon.vue";
import ImageUploadIcon from "../../ui/Icon/ImageUploadIcon.vue";
import SelectedTab from "../../ui/Tab/SelectedTab.vue";
import ShareFollowsList from "../../ui/List/ShareFollowsList.vue";
import ShareEmotionList from "../../ui/List/ShareEmotionList.vue";
import DivEditable from "../../ui/Input/DivEditable.vue";

export default {
  name: "ShareWindow",
  components: {
    SelectedTab,
    EmotionIcon,
    AtIcon,
    ImageUploadIcon,
    ShareFollowsList,
    ShareEmotionList,
    DivEditable,
  },
  data() {
    return {
      editContent: "嘻嘻",
      emotionShow: false,
      userFollows: [],
      followMode: "",
      followLeft: 10,
      followTop: -170,
      searchKey: "",
      lastEditContent: "",

      left: 800,
      top: 400,
      diffX: 0,
      diffY: 0,
      moveEnable: false,
    };
  },
  watch: {
    editContent(newValue, oldValue) {
      if (this.getKeyWord(newValue, oldValue) == "@") {
        this.followMode = "select";
        this.getUserFollows();
      } else {
        this.followMode = "";
        this.lastEditContent = "";
      }
    },
  },
  computed: {
    ...mapState(["popupDownloadShow"]),
    ...mapGetters("user", ["userId"]),

    followListStyle() {
      return {
        left: `${this.followLeft}px`,
        top: `${this.followTop}px`,
      };
    },
    windowStyle() {
      return {
        left: `${this.left}px`,
        top: `${this.top}px`,
      };
    },
    editWordCount() {
      let bracketsCount = 0;
      for (let index = 0; index < this.editContent.length; index++) {
        const element = this.editContent[index];
        if (element == "[" || element == "]") {
          bracketsCount++;
        }
      }
      return 150 - this.editContent.length + Math.floor(bracketsCount / 2);
    },
    editWordCountStyle() {
      return this.editWordCount < 0 ? { color: "#c20c2c" } : {};
    },
  },
  methods: {
    ...mapMutations(["UPDATE_POPUP_DOWNLOAD_SHOW"]),

    input(value) {
      this.editContent = value;
      if (this.followMode) {
        this.getSearchKeyWord(value);
      }
    },

    blurFunc() {
      this.followMode = "";
    },

    focusFunc() {
      if (this.editContent.endsWith("@")) {
        this.followMode = "search";
      }
    },

    getKeyWord(newValue, oldValue, count = 0) {
      let length1 = newValue.length;
      let length2 = oldValue.length;
      if (length1 > length2) {
        return newValue.slice(length2, length1 + count);
      } else {
        return oldValue.slice(length1 - 1, length2 - 1);
      }
    },

    getSearchKeyWord(newValue) {
      if (!this.lastEditContent) {
        this.lastEditContent = newValue;
      }

      console.log(newValue.length - newValue.lastIndexOf("@") - 1);

      // console.log(
      //   this.getKeyWord(
      //     newValue,
      //     this.lastEditContent,
      //     newValue.length - newValue.lastIndexOf("@")
      //   )
      // );

      let selection = document.getSelection();
      let range = selection.getRangeAt(0);
      let rect = range.getBoundingClientRect();
      console.log(rect);
    },

    updateEmotionShow() {
      this.emotionShow = !this.emotionShow;
    },
    getEmotion(value) {
      this.editContent += `[${value}]`;
      this.emotionShow = false;
    },

    updateAtShow() {
      this.editContent += "@";
      this.getUserFollows();
    },
    getFollowNickname(value) {
      this.editContent += `[${value}] `;
      this.followMode = "";
    },

    getUserFollows() {
      userFollowsApi(this.userId)
        .then((response) => {
          console.log(response);
          if (response["data"]["code"] == 200) {
            this.userFollows = this.userFollows.concat(
              response["data"]["follow"]
            );
            if (response["data"]["more"]) {
              this.getUserFollows();
            }
          }
        })
        .catch((error) => {
          this.followMore = false;
          console.log(error);
        });
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
      .follows-list {
        position: absolute;
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