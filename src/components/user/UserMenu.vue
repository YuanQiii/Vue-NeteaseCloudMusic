<!--
 * @Author: your name
 * @Date: 2021-12-07 11:06:45
 * @LastEditTime: 2021-12-08 16:26:59
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\components\user\user.vue
-->
<template>
  <div
    class="user-menu"
    @mouseenter="updateMenuShow(true)"
    @mouseleave="updateMenuShow(false)"
  >
    <div class="head">
      <div v-if="userLogin">
        <img :src="userAvatarUrl" alt="" class="image" />
      </div>
      <div v-else class="text" @click="UPDATE_LOGIN_WINDOW_SHOW(true)">
        登录
      </div>
      <message-icon
        class="icon"
        :count="userNewMsgCount"
        v-show="!menuShow && userLogin"
      />
    </div>
    <div class="menu" v-show="menuShow && userLogin">
      <div
        class="item"
        v-for="(value, index) in menuList"
        :key="index"
        @click="toPage(value, index)"
      >
        <div
          class="icon"
          :style="{ backgroundPosition: value['position'] }"
        ></div>
        <div class="name">{{ value["name"] }}</div>
      </div>
      <message-icon class="icon" :count="userNewMsgCount" />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import MessageIcon from "../../ui/Icon/MessageIcon.vue";
export default {
  components: { MessageIcon },
  name: "UserMenu",
  data() {
    return {
      menuShow: false,
      menuList: [
        {
          position: "0px -80px",
          name: "我的主页",
          pathName: "Home",
        },
        {
          position: "-20px -120px",
          name: "我的消息",
          pathName: "Message",
        },
        {
          position: "0px -100px",
          name: "我的等级",
          pathName: "",
        },
        {
          position: "0px -221px",
          name: "VIP会员",
          pathName: "",
        },
        {
          position: "0px -140px",
          name: "个人设置",
          pathName: "",
        },
        {
          position: "-20px -142px",
          name: "实名认证",
          pathName: "",
        },
        {
          position: "0px -200px",
          name: "退出",
        },
      ],
    };
  },
  computed: {
    ...mapState("user", ["userLogin"]),
    ...mapGetters("user", ["userAvatarUrl", "userNewMsgCount"]),
  },
  methods: {
    ...mapMutations("login", ["UPDATE_LOGIN_WINDOW_SHOW"]),
    ...mapMutations("user", ["UPDATE_USER_LOGIN"]),
    updateMenuShow(value) {
      this.menuShow = value;
    },
    toPage(value, index) {
      if (index == 6) {
        this.UPDATE_USER_LOGIN(false);
      } else {
        this.$router.push({ name: value["pathName"] });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.user-menu {
  .head {
    cursor: pointer;
    margin-left: 20px;
    position: relative;
    .image {
      width: 30px;
      height: 30px;
      border-radius: 30px;
      margin-top: 20px;
    }
    .text {
      color: #999;
      font-size: 12px;
      margin-top: 30px;
      text-decoration: none;
      &:hover {
        color: #787878;
        border-bottom: solid 1px #787878;
      }
    }
    .icon {
      position: absolute;
      left: 20px;
      top: 15px;
    }
  }
  .menu {
    position: absolute;
    display: flex;
    left: 68%;
    flex-direction: column;
    z-index: 999;
    width: 160px;
    height: 242px;
    background-color: #2b2b2b;
    border: solid 1px #202020;
    border-radius: 4px;
    box-shadow: #000 0px 8px 24px 0px;
    color: #ccc;
    font-size: 12px;
    cursor: pointer;
    .item {
      display: flex;
      .icon {
        background: url(https://s2.music.126.net/style/web2/img/frame/toplist.png?ed5722c073bd0c14238e70c68dbf5e82);
        width: 18px;
        height: 18px;
        margin-left: 24px;
        margin-top: 8px;
      }
      &:hover {
        color: #fff;
        background-color: #353535;
      }

      .name {
        width: 100px;
        height: 34px;
        line-height: 34px;
        margin-left: 10px;
      }
    }
    > .icon {
      position: absolute;
      left: 110px;
      top: 42px;
    }
  }
}
</style>