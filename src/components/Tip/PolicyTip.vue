<!--
 * @Author: your name
 * @Date: 2021-11-17 10:17:41
 * @LastEditTime: 2021-11-17 10:58:09
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Projects\NeteaseCloudMusic\Vue-NeteaseCloudMusic\src\components\Tip\PolicyTip.vue
-->
<template>
  <div class="policy-tip" v-show="loginPolicyShow">
    请勾选同意《服务条款》、《隐私政策》、《儿童隐私政策》
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "PolicyTip",
  computed: {
    ...mapState("login", ["loginPolicyShow"]),
  },
};
</script>

<style lang="scss" scoped>
.policy-tip {
  position: absolute;
  z-index: 999;
  top: calc(50% - 29px);
  left: calc(50% - 236px);
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.4);
}
</style>