<!--
 * @Author: your name
 * @Date: 2022-02-16 14:06:47
 * @LastEditTime: 2022-02-24 21:20:33
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\components\side\UserInfo.vue
-->
<template>
  <div class="recommend-user-info">
    <div class="top">
      <div class="avatar">
        <img class="image" :src="userAvatarUrl" alt="" />
      </div>
      <div class="info">
        <div class="name">{{ userNickname }}</div>
        <img
          class="level"
          :src="vipUrl[userVipType][userVipLevel - 1]"
          alt=""
        />
        <div class="user-level">
          <div class="text">9</div>
        </div>
        <login-button text="签到" class="sign" @click.native="dailySignin" />
      </div>
    </div>
    <div class="bottom">
      <div class="item">
        <div class="count">{{ userEventCount }}</div>
        <div class="text">动态</div>
      </div>
      <div class="item">
        <div class="count">{{ userFollows }}</div>
        <div class="text">关注</div>
      </div>
      <div class="item last">
        <div class="count">{{ userFolloweds }}</div>
        <div class="text">粉丝</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import LoginButton from "../../ui/Button/LoginButton.vue";

import { userDailySigninApi } from "@/api/user.js";

export default {
  components: { LoginButton },
  name: "RecommendUserInfo",
  created() {
    this.dailySignin();
  },
  data() {
    return {
      vipUrl: [
        [
          "https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4357872257/9f40/483a/0341/78d106c94bf17f8f1e98a2f6748061c4.png",
          "https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4357872312/f49a/5cad/ebcd/c1021f3f3e918f6b92b2b2bb58d4719e.png",
          "https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4357872358/af06/17be/49e1/a2d7fbd01fff86b32fe74dde994fefbc.png",
          "https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4357872414/467c/7865/9a62/932764dea99f7c5cdc594321de6990ec.png",
          "https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4357872480/66ee/6807/a53f/715860bc3c2f229a123c2c69eacd2eea.png",
          "https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4357872529/0766/4eb6/679e/e0f3d42996afe78da1f3ff6d2ca1f8c6.png",
          "https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4357872580/55e9/7d26/05e3/ba00bb88da839e5cf475e5ec66df8bc7.png",
        ],
        [
          "https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4357872221/9d6a/d637/06f3/b5b315ab3c14de2043abd28a2b2af5af.png",
          "https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4357872290/55e5/e93b/f4a8/600868af71326408c1f905867f142520.png",
          "https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4357872333/eb74/6e09/3b0f/fd6e21661e1d32e1c52658173ffd42b6.png",
          "https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4357872387/95c0/0077/be84/015a47320318cb4199b67a3cbc063a09.png",
          "https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4357872479/15d6/b1b3/dff8/209585a9a787b00717324e75e55851d7.png",
          "https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4357872499/0cd3/2985/4070/5951d11609c60e3aa96ebddeb6bb8284.png",
          "https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4357872559/f8a0/e230/60ba/3590b48db520d952cba92bf9fd72590e.png",
        ],
      ],
    };
  },
  computed: {
    ...mapState("user", ["userDetail"]),
    ...mapGetters("user", [
      "userAvatarUrl",
      "userNickname",
      "userVipType",
      "userVipLevel",
      "userEventCount",
      "userFollows",
      "userFolloweds",
    ]),
  },
  methods: {
    dailySignin() {
      userDailySigninApi().then((response) => {
        console.log(
          "🚀 ~ file: RecommendUserInfo.vue ~ line 98 ~ userDailySigninApi ~ response",
          response
        );
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.recommend-user-info {
  width: 248px;
  height: 185px;
  background-color: #f7f7f7;
  .top {
    margin-left: 20px;
    margin-top: 20px;
    display: flex;
    .avatar {
      .image {
        width: 80px;
        height: 80px;
        padding: 2px;
        border: 1px solid #dadada;
        cursor: pointer;
      }
    }
    .info {
      margin-left: 20px;
      display: flex;
      .name {
        font-size: 14px;
        font-weight: 600;
        width: 60px;
        height: 20px;
        line-height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        cursor: pointer;
        border-bottom: solid 1px #f7f7f7;
        &:hover {
          border-bottom: solid 1px #000;
        }
      }
      .level {
        width: 43px;
        height: 16px;
      }
      .user-level {
        background: url(https://s2.music.126.net/style/web2/img/icon2.png);
        background-position: -130px -64px;
        display: block;
        width: 30px;
        height: 18px;
        position: relative;
        top: 25px;
        left: -102px;
        .text {
          font-size: 12px;
          font-style: italic;
          font-weight: 700;
          line-height: 18px;
          color: #999;
          margin-left: 25px;
        }
      }
      .sign {
        width: 100px;
        height: 30px;
        position: relative;
        top: 60px;
        left: -135px;
      }
    }
  }
  .bottom {
    display: flex;
    margin-left: 5px;
    margin-top: 20px;
    .item {
      color: #666;
      margin-left: 20px;
      width: 45px;
      height: 50px;
      border-right: solid 1px #ccc;
      cursor: pointer;
      &:hover {
        color: #0c73c2;
      }
      .count {
        font-size: 20px;
      }
    }
    .last {
      border-right: none;
    }
  }
}
</style>