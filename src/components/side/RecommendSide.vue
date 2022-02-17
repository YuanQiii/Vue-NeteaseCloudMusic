<!--
 * @Author: your name
 * @Date: 2022-02-16 14:11:05
 * @LastEditTime: 2022-02-16 16:07:25
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\components\side\RecommendSide.vue
-->
<template>
  <div class="recommend-side">
    <recommend-user-info />
  </div>
</template>

<script>
import RecommendUserInfo from "./RecommendUserInfo.vue";

export default {
  components: { RecommendUserInfo },

  name: "RecommendSide",
};
</script>

<style lang="scss" scoped>
.recommend-side {
  width: 248px;
  // height: 980ex;
  display: flex;
  background-color: #fff;
  border: solid 1px #ccc;
}
</style>