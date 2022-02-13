<!--
 * @Author: your name
 * @Date: 2022-02-12 16:04:50
 * @LastEditTime: 2022-02-13 21:21:03
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\views\foot\Foot.vue
-->
<template>
  <div class="footmain">
    <terms />
    <appreciate />
  </div>
</template>
<script>
import Terms from "./Terms";
import Appreciate from "./Appreciate";
export default {
  name: "Foot",
  components: {
    Terms,
    Appreciate,
  },
};
</script>

<style scoped>
.footmain {
  display: flex;
  justify-content: center;
  background-color: #f2f2f2;
  border-top: solid 1px #d3d3d3;
}
</style>