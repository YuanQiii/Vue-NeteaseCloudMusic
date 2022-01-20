<!--
 * @Author: your name
 * @Date: 2022-01-05 10:22:45
 * @LastEditTime: 2022-01-13 10:01:27
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\ui\List\ShareFollowsList.vue
-->
<template>
  <div class="share-follows-list">
    <div class="header">选择最近@的人或直接输入</div>
    <div class="list" @click="getFollowNickname">
      <div
        class="item"
        v-for="(value, index) in follows"
        :data-nickname="value['nickname']"
        :key="index"
      >
        {{ value["nickname"] }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShareFollowsList",
  props: {
    follows: Array,
  },
  methods: {
    getFollowNickname(e) {
      this.$emit("getFollowNickname", e.target.getAttribute("data-nickname"));
    },
  },
};
</script>

<style lang="scss" scoped>
.share-follows-list {
  width: 165px;
  border: 1px solid #cdcdcd;
  background: #fff;
  z-index: 999;
  font-size: 12px;
  color: #333;
  display: flex;
  flex-direction: column;
  .header {
    margin-bottom: 7px;
    margin-left: 10px;
    margin-top: 10px;
  }
  .list {
    display: flex;
    flex-direction: column;
    .item {
      padding-left: 10px;
      width: 155px;
      height: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
      cursor: pointer;
      margin-bottom: 7px;
      line-height: 20px;
      &:hover {
        background-color: #eee;
      }
    }
  }
}
</style>