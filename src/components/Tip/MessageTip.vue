<!--
 * @Author: your name
 * @Date: 2021-12-16 23:00:33
 * @LastEditTime: 2021-12-21 14:28:11
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\components\tip\MessageTip.vue
-->
<template>
  <div class="mesaage-tip" v-show="messageTipInfo['show']">
    <div class="icon">
      <correct-icon v-show="messageTipInfo['type'] == 'correct'" />
      <error-icon v-show="messageTipInfo['type'] == 'error'" />
    </div>
    <div class="text">{{ messageTipInfo["text"] }}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CorrectIcon from "../../ui/Icon/CorrectIcon.vue";
import ErrorIcon from "../../ui/Icon/ErrorIcon.vue";

export default {
  name: "MessageTip",
  components: {
    CorrectIcon,
    ErrorIcon,
  },
  computed: {
    ...mapState(["messageTipInfo"]),
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
  display: flex;
  .icon {
    margin-top: 2px;
    margin-right: 10px;
  }
  .text {
    margin-top: 1px;
  }
}
</style>