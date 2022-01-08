<!--
 * @Author: your name
 * @Date: 2021-12-23 22:08:25
 * @LastEditTime: 2022-01-08 15:16:44
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
        <selected-tab :text="followMode" />
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
          :follows="userFollowsFilter"
          @getFollowNickname="getFollowNickname"
        />

        <image-upload-icon class="upload" />

        <div class="count" :style="editWordCountStyle">
          {{ editWordCount }}
        </div>
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
  created() {
    this.getUserFollows();
  },
  data() {
    return {
      editContent: "",
      emotionShow: false,
      userFollows: [],
      userFollowsFilter: [],
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
    // 监听变化
    editContent(newValue, oldValue) {
      if (this.getKeyWord(newValue, oldValue) == "@") {
        this.followMode = "select";
        this.filterUserFollows();
      } else {
        if (this.followMode) {
          this.getSearchKeyWord(newValue);
          this.followMode = "search";
          this.filterUserFollows();
        } else {
          this.followMode = "";
          this.lastEditContent = "";
        }
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
    },

    blurFunc() {
      this.followMode = "";
    },

    focusFunc() {
      if (this.editContent.endsWith("@")) {
        this.followMode = "select";
      }
    },

    // 筛选结果
    filterUserFollows() {
      if (this.followMode == "select") {
        this.userFollowsFilter =
          this.userFollows.length > 10
            ? this.userFollows.slice(0, 10)
            : this.userFollows;
      }

      if (this.followMode == "search") {
        this.userFollowsFilter = this.getsearchFollows();
      }
    },

    // 获得编辑过后变化的词
    getKeyWord(newValue, oldValue) {
      let length1 = newValue.length;
      let length2 = oldValue.length;
      if (length1 > length2) {
        return newValue.slice(length2, length1);
      } else {
        return oldValue.slice(length1 - 1, length2 - 1);
      }
    },

    // 获得@符号后的关键词
    getSearchKeyWord(newValue) {
      if (!this.lastEditContent) {
        this.lastEditContent = newValue;
      }
      let keyWordLength = newValue.length - newValue.lastIndexOf("@") + 1;
      this.searchKey = newValue.slice(
        this.lastEditContent.length - 1,
        keyWordLength + 1
      );
    },

    getStyle() {
      let selection = document.getSelection();
      let range = selection.getRangeAt(0);
      let rect = range.getBoundingClientRect();
      console.log(rect);
    },

    // 获得查找结果
    getsearchFollows() {
      let search = [];
      this.userFollows.forEach((element) => {
        let name = element.nickname.toLowerCase();
        let key = this.searchKey.toLowerCase();
        if (name.includes(key)) {
          search.push(element);
        }
      });

      return search;
    },

    updateEmotionShow() {
      this.emotionShow = !this.emotionShow;
    },
    getEmotion(value) {
      this.editContent += `[${value}]`;
      this.emotionShow = false;
    },

    // 点击添加@符号，给出列表选择
    updateAtShow() {
      this.editContent += "@";
    },

    // 获取选择的名字
    getFollowNickname(value) {
      this.editContent += `${value} `;
      this.followMode = "";
    },

    // 获得全部follows结果
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