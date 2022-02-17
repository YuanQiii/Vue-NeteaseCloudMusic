<!--
 * @Author: your name
 * @Date: 2021-10-19 09:48:46
 * @LastEditTime: 2022-02-16 15:47:50
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\views\discover\Recommend.vue
-->
<template>
  <div class="recommend">
    <banner />
    <recommed-content class="content" />
  </div>
</template>

<script>
import Banner from "../../components/recommend/Banner.vue";
import RecommedContent from "../../components/recommend/RecommedContent.vue";

export default {
  components: { Banner, RecommedContent },
  name: "Recommend",
};
</script>

<style lang="scss" scoped>
.recommned {
  display: flex;
  flex-direction: column;
}
</style>
