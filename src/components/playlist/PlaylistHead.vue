<!--
 * @Author: your name
 * @Date: 2022-03-09 21:27:42
 * @LastEditTime: 2022-03-09 21:56:46
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\components\playlist\PlaylistHead.vue
-->
<template>
  <div class="playlist-head">
    <div class="left">
      <div class="text">热门</div>
      <div class="category">选择分类</div>
    </div>
    <div class="right">
      <div class="hot">热门</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayllistHead",
  props: {
    title: String,
  },
};
</script>

<style lang="scss" scoped>
.playlist-head {
  width: 900px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: solid 2px red;
  .left {
    display: flex;
    .text {
      color: #333;
      font-size: 24px;
      font-weight: 400;
      line-height: 40px;
    }
    .category {
      margin-left: 20px;
    }
  }
}
</style>