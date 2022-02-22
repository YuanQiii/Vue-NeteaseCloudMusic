<!--
 * @Author: your name
 * @Date: 2022-02-22 21:08:49
 * @LastEditTime: 2022-02-22 22:35:03
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\components\side\RecommendSingerItem.vue
-->
<template>
  <div class="recommend-singer-item">
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
  name: "RecommendSingerItem",
  props: {
    artistDetail: Object,
  },
};
</script>

<style lang="scss" scoped>
.recommend-singer-item {
  margin-top: 20px;
  background-color: #fafafa;
  border: solid 1px #e9e9e9;
  cursor: pointer;
  display: flex;
  &:hover {
    background-color: #eee;
  }
  .left {
    .image {
      width: 62px;
      height: 62px;
    }
  }
  .right {
    width: 150px;
    margin-left: 10px;
    .name {
      font-size: 14px;
      font-weight: 700;
      margin-top: 10px;
    }
    .desc {
      color: #666;
      margin-top: 15px;
    }
  }
}
</style>