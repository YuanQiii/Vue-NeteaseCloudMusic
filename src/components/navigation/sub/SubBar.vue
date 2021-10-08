<template>
  <div class="sub-bar">
    <div class="sub-bar-show" v-show="currentSubBarItem">
      <div
        class="sub-bar-item"
        v-for="(value, index) in subBarItemNames"
        :key="index"
      >
        <sub-bar-item
          :subBarItemName="value"
          :currentSubBarItem.sync="currentSubBarItem"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SubBarItem from "./SubBarItem.vue";
export default {
  components: { SubBarItem },
  name: "SubBar",
  data() {
    return {
      subBarItemNames: [
        "推荐",
        "排行榜",
        "歌单",
        "主播电台",
        "歌手",
        "新碟上架",
      ],
      currentSubBarItem: "推荐",
    };
  },
};
</script>

<style lang="scss" scoped>
.sub-bar-show {
  background-color: #c20c0c;
  height: 35px;
  display: flex;
  justify-content: center;
  margin-left: -145px;
}
</style>