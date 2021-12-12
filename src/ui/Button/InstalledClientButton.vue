<!--
 * @Author: your name
 * @Date: 2021-12-11 20:21:09
 * @LastEditTime: 2021-12-11 21:05:38
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\ui\Button\InstalledClientButton.vue
-->
<template>
  <div class="installed-client">
    <div class="text">已安装PC版</div>
  </div>
</template>

<script>
export default {
  name: "InstalledClientButton",
};
</script>

<style lang="scss" scoped>
.installed-client {
  background-color: #e5e5e5;
  width: 146px;
  height: 40px;
  color: #666666;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
}
</style>