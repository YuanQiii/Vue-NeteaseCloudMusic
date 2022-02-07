<!--
 * @Author: your name
 * @Date: 2022-01-25 11:28:22
 * @LastEditTime: 2022-02-07 16:49:29
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\components\recommend\RecommedContent.vue
-->
<template>
  <div class="recommend-content">
    <div class="main">
      <recommend-hot />
      <new-album class="new-album" />
    </div>
    <div class="side"></div>
  </div>
</template>

<script>
import RecommendHot from "./RecommendHot.vue";
import NewAlbum from "./NewAlbum.vue";
export default {
  components: { RecommendHot, NewAlbum },
};
</script>
<style lang="scss" scoped>
.recommend-content {
  display: flex;
  background-color: #999;
  justify-content: center;
  .main {
    display: flex;
    flex-direction: column;
    width: 690px;
    background-color: #fff;
    padding: 20px;
    .new-album {
      margin-top: 50px;
    }
  }
  .side {
    width: 250px;
    background-color: #fff;
  }
}
</style>