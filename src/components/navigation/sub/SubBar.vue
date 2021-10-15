<template>
  <div class="sub-bar">
    <div class="show" v-if="subBarShow">
      <div
        class="sub-bar-item"
        v-for="(value, key, index) in subBarItemNames"
        :key="index"
      >
        <sub-bar-item
          :subBarItemName="value"
          :currentSubBarItem="currentPageName"
        />
      </div>
    </div>
    <div class="line" v-else></div>
  </div>
</template>

<script>
import SubBarItem from "./SubBarItem.vue";
export default {
  components: { SubBarItem },
  name: "SubBar",
  data() {
    return {
      subBarItemNames: {
        Recommend: "推荐",
        TopList: "排行榜",
        PlayList: "歌单",
        DJ: "主播电台",
        Artist: "歌手",
        Album: "新碟上架",
      },
      currentSubBarItem: "推荐",
    };
  },
  computed: {
    subBarShow() {
      let currentPageName = this.$store.state.navigation.currentPageName;
      let subBarItemNamesKeys = Object.keys(this.subBarItemNames);
      return subBarItemNamesKeys.indexOf(currentPageName) > -1 ? true : false;
    },
    currentPageName() {
      return this.subBarItemNames[this.$route.name];
    },
  },
};
</script>

<style lang="scss" scoped>
.show {
  background-color: #c20c0c;
  height: 35px;
  display: flex;
  justify-content: center;
  margin-left: -145px;
}
.line {
  background-color: #c20c0c;
  height: 5px;
}
</style>