<!--
 * @Author: your name
 * @Date: 2021-12-23 22:08:25
 * @LastEditTime: 2022-01-25 11:10:10
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\components\popup\ShareWindow.vue
-->
<template>
  <div class="share-window">
    <div class="content">
      <div class="nav" @click="changeShareMode">
        <selected-tab text="分享给大家" :active="shareMode == 1" />
        <selected-tab text="私信分享" :active="shareMode == 0" />
      </div>

      <div class="edit" v-if="shareMode">
        <div-editable
          class="area"
          id="divEditable"
          :value="editContent"
          placeholder="说点什么吧"
          @input="input"
          @focusFunc="focusFunc"
          @blurFunc="blurFunc"
        />
        <div class="thide">
          <div class="text">
            {{ userOperateType }}：{{ userOperateName }} -
            {{ userOperateCreator }}
          </div>
        </div>
      </div>
      <div class="edit" v-else>
        <div-editable
          class="friend"
          :value="friendName"
          placeholder="选择或输入好友昵称"
          @click.native="showFriendList"
        />

        <div-editable
          class="private-area"
          :value="editContent"
          placeholder="说点什么吧"
          @input="input"
        />

        <div class="thide">
          <div class="text">
            {{ userOperateType }}：{{ userOperateName }} -
            {{ userOperateCreator }}
          </div>
        </div>
        <div class="friend-list" v-show="friendListShow">
          <div
            class="friend-item"
            v-for="follow in userFollows"
            @click="chooseFriend(follow)"
          >
            <img class="image" :src="follow['avatarUrl']" />
            <div class="name">{{ follow["nickname"] }}</div>
          </div>
        </div>
      </div>

      <div class="operation">
        <emotion-icon class="emotion" @click.native="updateEmotionShow" />
        <share-emotion-list
          class="emotion-list"
          @getEmotion="getEmotion"
          v-show="emotionShow"
        />

        <at-icon class="at" @click.native="updateAtShow" v-show="shareMode" />
        <share-follows-list
          class="follows-list"
          v-show="followMode && shareMode"
          :style="followListStyle"
          :follows="userFollowsFilter"
          @getFollowNickname="getFollowNickname"
        />

        <image-upload-icon class="upload" v-show="shareMode" />

        <div class="count" :style="editWordCountStyle">
          {{ editWordCount }}
        </div>
      </div>
      <div class="button">
        <div class="left">
          <login-button @click.native="share" class="share" :text="shareText" />
          <register-button
            @click.native="UPDATE_POPUP_TYPE(null)"
            class="cancel"
            text="取消"
          />
        </div>
        <div class="right" v-show="shareMode">
          <div class="text">同时分享到：</div>
          <img src="../../assets/recommend/p1.png" />
        </div>
      </div>

      <div class="tip" v-show="editWordCount < 0">
        <error-icon class="icon" />
        <div class="text">字数超过140个字符</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";

import {
  userFollowsApi,
  userShareResoureApi,
  userSendSongApi,
  userSendAlbumApi,
  userSendPlaylistApi,
} from "@/api/user.js";

import AtIcon from "../../ui/Icon/AtIcon.vue";
import EmotionIcon from "../../ui/Icon/EmotionIcon.vue";
import ImageUploadIcon from "../../ui/Icon/ImageUploadIcon.vue";
import SelectedTab from "../../ui/Tab/SelectedTab.vue";
import ShareFollowsList from "../../ui/List/ShareFollowsList.vue";
import ShareEmotionList from "../../ui/List/ShareEmotionList.vue";
import DivEditable from "../../ui/Input/DivEditable.vue";

import LoginButton from "../../ui/Button/LoginButton.vue";
import RegisterButton from "../../ui/Button/RegisterButton.vue";
import ErrorIcon from "../../ui/Icon/ErrorIcon.vue";
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
    LoginButton,
    RegisterButton,
    ErrorIcon,
  },
  created() {
    this.getUserFollows();
  },
  data() {
    return {
      editContent: "",
      friendName: "",
      emotionShow: false,
      userFollows: [],
      userFollowsFilter: [],
      followMode: "",
      followLeft: 10,
      followTop: -170,
      searchKey: "",
      lastEditContent: "",
      isClick: false,
      shareText: "分享",
      shareMode: 1,
      shareFriendId: 0,
      friendListShow: false,

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
      let keyWrod = this.getKeyWord(newValue, oldValue);

      if (keyWrod == "@") {
        this.followMode = "select";
        this.filterUserFollows();
      } else {
        if (this.followMode) {
          this.getSearchKeyWord(newValue, oldValue);
          this.followMode = "search";
          this.filterUserFollows();
        } else {
          this.followMode = "";
          this.lastEditContent = "";
        }
      }
      this.getStyle();
    },

    shareMode() {
      this.editContent = "";
    },
  },
  computed: {
    ...mapState(["popupDownloadShow"]),
    ...mapGetters("user", [
      "userId",
      "userOperateType",
      "userOperateENType",
      "userOperateId",
      "userOperateName",
      "userOperateCreator",
    ]),

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
      return 140 - this.editContent.length + Math.floor(bracketsCount / 2);
    },
    editWordCountStyle() {
      let style = {};

      if (this.editWordCount < 0) {
        style["color"] = "#c20c2c";
      }

      if (!this.shareMode) {
        style["marginLeft"] = "407px";
      }

      return style;
    },
  },
  methods: {
    ...mapMutations([
      "UPDATE_POPUP_DOWNLOAD_SHOW",
      "UPDATE_MESSAGE_TIP_INFO",
      "UPDATE_POPUP_TYPE",
    ]),

    changeShareMode(e) {
      if (e.target.innerHTML == "分享给大家") {
        this.shareMode = 1;
      } else {
        this.shareMode = 0;
      }
    },

    showFriendList() {
      this.friendListShow = true;
    },

    chooseFriend(follow) {
      this.shareFriendId = follow["userId"];
      this.friendListShow = false;
      this.friendName = follow["nickname"];
    },

    input(value) {
      this.editContent = value;
    },

    blurFunc() {
      setTimeout(() => {
        if (!this.isClick) {
          this.followMode = "";
        }
        this.isClick = false;
      }, 200);
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
      console.log(this.userFollows);
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
    getSearchKeyWord(newValue, oldValue) {
      if (!this.lastEditContent) {
        this.lastEditContent = newValue;
      }
      let keyWordLength = newValue.length - newValue.lastIndexOf("@") + 1;

      let tempStr = newValue;
      if (newValue.length < oldValue.length) {
        tempStr = oldValue;
      }

      this.searchKey = tempStr.slice(
        this.lastEditContent.length - 1,
        keyWordLength + 2
      );
    },

    getStyle() {
      let selection = document.getSelection();
      let range = selection.getRangeAt(0);
      let rect = range.getBoundingClientRect();
      this.followLeft = rect["x"] - this.left - 40;
      this.followTop = rect["y"] - this.top - 270;
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
      this.isClick = true;
      this.editContent += "@";
    },

    // 获取选择的名字
    getFollowNickname(value) {
      if (this.followMode == "select") {
        this.editContent += `${value} `;
        this.followMode = "";
      } else {
        let index = this.editContent.lastIndexOf(this.searchKey);
        let originContent = this.editContent.slice(0, index);
        this.editContent = `${originContent}${value} `;
      }
    },

    share() {
      this.shareText = "分享中...";

      if (this.shareMode) {
        this.shareOpen();
      } else {
        this.sharePrivate();
      }
    },

    shareOpen() {
      userShareResoureApi(
        this.userOperateId,
        this.userOperateENType,
        this.editContent
      )
        .then((response) => {
          if (response["data"]["code"] == 200) {
            this.shareSuccess();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    sharePrivate() {
      let apiMethods = {
        song: userSendSongApi,
        album: userSendAlbumApi,
        playlist: userSendPlaylistApi,
      };

      for (const key in apiMethods) {
        if (Object.hasOwnProperty.call(apiMethods, key)) {
          const element = apiMethods[key];

          if (key == this.userOperateENType) {
            element(this.shareFriendId, this.userOperateId, this.editContent)
              .then((response) => {
                if (response["data"]["code"] == 200) {
                  this.shareSuccess();
                }
              })
              .catch((error) => {
                console.log(error);
              });
          }
        }
      }
    },

    shareSuccess() {
      this.UPDATE_POPUP_TYPE(null);
      this.UPDATE_MESSAGE_TIP_INFO({
        text: "分享成功",
        type: "correct",
        show: true,
      });
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

      .friend {
        font-size: 12px;
        width: 444px;
        height: 18px;
        line-height: 18px;
      }
      .friend-list {
        width: 448px;
        height: 222px;
        overflow: scroll;
        margin-top: 10px;
        border: 1px solid #a8a8a8;
        padding-left: 5px;
        margin-left: -5px;
        .friend-item {
          display: flex;
          cursor: pointer;
          &:hover {
            background-color: #eee;
          }

          .image {
            width: 30px;
            height: 30px;
          }
          .name {
            color: #333;
            font-size: 12px;
            line-height: 42px;
            margin-left: 10px;
          }
        }
      }

      .private-area {
        margin-top: 10px;
        font-size: 12px;
        border-top: 1px solid #e5e5e5;
        width: 444px;
        height: 75px;
        overflow: auto;
        padding-top: 5px;
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
    .button {
      display: flex;
      margin-top: 30px;
      .left {
        display: flex;
        .share {
          width: 80px;
          height: 31px;
        }
        .cancel {
          width: 80px;
          height: 31px;
          margin-left: 10px;
        }
      }
      .right {
        display: flex;
        .text {
          margin-top: 4px;
          margin-left: 155px;
          display: block;
          font-size: 12px;
          line-height: 22px;
          width: 80px;
          height: 22px;
          color: #666;
        }
      }
    }
    .tip {
      display: flex;
      margin-top: 10px;
      .icon {
        transform: scale(0.78);
      }
      .text {
        font-size: 12px;
        line-height: 17px;
        color: #e33232;
        margin-top: 2px;
        margin-left: 8px;
      }
    }
  }
}
</style>