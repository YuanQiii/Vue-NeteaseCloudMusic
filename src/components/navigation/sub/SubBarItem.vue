<template>
  <div class="sub-bar-item">
    <div
      id="sub-bar-item-name"
      :class="elementIsActive(currentSubBarItem, subBarItemName)"
      @click="toDiscoverItemPage(subBarItemName)"
    >
      {{ subBarItemName }}
    </div>
  </div>
</template>

<script>
import { elementIsActive } from "@/utils/elementIsActive.js";
export default {
  name: "SubBarItem",
  props: {
    subBarItemName: String,
    currentSubBarItem: String,
  },
  data() {
    return {
      pageNames: {
        推荐: "Recommend",
        排行榜: "TopList",
        歌单: "PlayList",
        主播电台: "DJ",
        歌手: "Artist",
        新碟上架: "Album",
      },
    };
  },
  methods: {
    elementIsActive(current, self) {
      return elementIsActive(current, self);
    },
    toDiscoverItemPage(name) {
      let pageName = this.pageNames[name];
      if (pageName != this.$route.name) {
        this.$router.push({ name: pageName });
      }
    },
  },
};
</script>

<style lang='scss' scoped>
.sub-bar-item {
  height: 35px;
  margin: 0 17px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  transition: 0.1s;
  position: relative;
  color: #fff;
  font-size: 12px;

  #sub-bar-item-name {
    padding: 3px 10px;
    border-radius: 10px;

    &:hover {
      background-color: #9b0909;
    }
  }

  .active {
    background-color: #9b0909;
  }

  .deactive {
    background-color: #c20c0c;
  }
}
</style>