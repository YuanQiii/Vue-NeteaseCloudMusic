<!--
 * @Author: your name
 * @Date: 2021-12-07 11:06:45
 * @LastEditTime: 2021-12-07 11:23:41
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\components\user\user.vue
-->
<template>
  <div class="user-center">
    <div class="head">
      <div v-if="userLogin" class="image"><img src="" alt="" /></div>
      <div v-else class="text" @click="UPDATE_LOGIN_WINDOW_SHOW(true)">
        登录
      </div>
    </div>
    <div class="menu"></div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "UserCenter",
  computed: {
    ...mapState("user", "userLogin"),
  },
  methods: {
    ...mapMutations("login", ["UPDATE_LOGIN_WINDOW_SHOW"]),
  },
};
</script>

<style lang="scss" scoped>
.user-center {
  .head {
    cursor: pointer;

    .text {
      color: #999;
      font-size: 12px;
      margin-top: 30px;
      margin-left: 20px;
      text-decoration: none;

      &:hover {
        color: #787878;
        border-bottom: solid 1px #787878;
      }
    }
  }
}
</style>