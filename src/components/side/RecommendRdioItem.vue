<!--
 * @Author: your name
 * @Date: 2022-02-23 22:46:54
 * @LastEditTime: 2022-02-23 23:25:18
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\components\side\RecommendRdioItem.vue
-->
<template>
  <div class="recommend-radio-item">
    <div class="left">
      <img class="image" :src="artistDetail['imageUrl']" />
    </div>
    <div class="right">
      <div class="name">{{ artistDetail["name"] }}</div>
      <div class="desc">{{ artistDetail["description"] }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendRdioItem",
  props: {
    artistDetail: Object,
  },
};
</script>

<style lang="scss" scoped>
.recommend-radio-item {
  margin-top: 7px;

  display: flex;
  font-size: 12px;
  .left {
    .image {
      width: 40px;
      height: 40px;
      cursor: pointer;
    }
  }
  .right {
    width: 150px;
    margin-left: 10px;
    .name {
      display: inline-block;
      cursor: pointer;
      border-bottom: solid 1px #fff;
      &:hover {
        border-bottom: solid 1px #000;
      }
    }
    .desc {
      color: #666;
      margin-top: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
    }
  }
}
</style>