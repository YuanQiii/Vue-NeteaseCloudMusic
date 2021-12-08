<template>
  <div>
    <div class="top-bar">
      <img class="logo" src="@/assets/navigation/logo.png" />
      <top-bar-item
        v-for="(value, index) in topBarNames"
        :key="index"
        @click.native="toPage(index)"
        :class="isActive(index)"
      >
        {{ value }}
        <span id="top-bar-item-span" :class="isActive(index)"></span>
      </top-bar-item>
      <search />
      <div class="center">创作者中心</div>
      <user-menu />
    </div>
  </div>
</template>

<script>
import Search from "../../search/search.vue";
import UserMenu from "../../user/UserMenu.vue";
import TopBarItem from "./TopBarItem.vue";

export default {
  name: "TopBar",
  components: {
    TopBarItem,
    Search,
    UserMenu,
  },
  data() {
    return {
      topBarNames: [
        "发现音乐",
        "我的音乐",
        "朋友",
        "商城",
        "音乐人",
        "下载客户端",
      ],
      topBarPathNames: [
        "Recommend",
        "My",
        "Friend",
        "Market",
        "Musician",
        "Download",
      ],
      isShow: false,
      count: 0,
    };
  },
  computed: {
    currentIndex() {
      return this.topBarPathNames.indexOf(this.$route.name);
    },
  },
  methods: {
    toPage(index) {
      this.currentIndex = index;

      let pathName = this.topBarPathNames[index];
      if (pathName != this.$route.name) {
        this.$router.push({ name: pathName });
      }
    },
    isActive(index) {
      return index == this.currentIndex ? "active" : "";
    },
  },
};
</script>

<style lang="scss" scoped>
.top-bar {
  display: flex;
  justify-content: center;
  font-size: 14px;
  background-color: #242424;
  color: #fff;
  height: 70px;

  .logo {
    margin-top: 20px;
    padding-right: 20px;
    height: 30px;
    object-fit: cover;
  }

  .active {
    background-color: #000;
    color: #fff;
  }

  .center {
    border: 1px solid #4f4f4f;
    padding: 0 16px;
    border-radius: 20px;
    height: 32px;
    font-size: 5px;
    color: #ccc;
    display: flex;
    align-items: center;
    margin: 19px 0 0 12px;
    cursor: pointer;
    &:hover {
      border: 1px solid #ccc;
    }
  }
}

#top-bar-item-span {
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  border: 8px solid;
  border-color: transparent;
  position: absolute;
  top: 55px;
  left: 40%;

  &.active {
    border-color: transparent transparent #c20c0c;
  }
}
</style>
