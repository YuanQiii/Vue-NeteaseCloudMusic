<!--
 * @Author: your name
 * @Date: 2021-12-16 23:00:33
 * @LastEditTime: 2021-12-16 23:12:58
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\components\tip\MessageTip.vue
-->
<template>
  <div class="mesaage-tip" v-show="messageTipText">{{ messageTipText }}</div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "MessageTip",
  computed: {
    ...mapState(["messageTipText"]),
  },
};
</script>

<style lang="scss" scoped>
.mesaage-tip {
  position: absolute;
  left: 34%;
  top: 34%;
  z-index: 999;
  padding: 10px 50px;
  text-align: center;
  background-color: #fff;
  color: #000;
  border-radius: 4px;
  box-shadow: 0 5px 16px rgb(0 0 0 / 80%);
}
</style>