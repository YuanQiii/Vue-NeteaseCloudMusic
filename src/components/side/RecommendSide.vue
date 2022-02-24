<!--
 * @Author: your name
 * @Date: 2022-02-16 14:11:05
 * @LastEditTime: 2022-02-24 21:14:00
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\components\side\RecommendSide.vue
-->
<template>
  <div class="recommend-side">
    <recommend-user-info />
    <recommend-singer />
    <recommend-radio />
  </div>
</template>

<script>
import RecommendUserInfo from "./RecommendUserInfo.vue";
import RecommendSinger from "./RecommendSinger.vue";
import RecommendRadio from "./RecommendRadio.vue";

export default {
  components: { RecommendUserInfo, RecommendSinger, RecommendRadio },
  name: "RecommendSide",
};
</script>

<style lang="scss" scoped>
.recommend-side {
  width: 248px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-right: solid 1px #d7d7d7;
}
</style>