<!--
 * @Author: your name
 * @Date: 2021-11-21 17:10:40
 * @LastEditTime: 2021-11-22 10:14:55
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\components\Tip\Captcha.vue
-->
<template>
  <div class="captcha-tip" v-show="loginCaptchaTipShow">验证码已发送</div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "CaptchaTip",
  computed: {
    ...mapState("login", ["loginCaptchaTipShow"]),
  },
};
</script>

<style lang="scss" scoped>
.captcha-tip {
  position: absolute;
  left: 34%;
  top: 34%;
  z-index: 99;
  padding: 10px 50px;
  text-align: center;
  background-color: #fff;
  color: #000;
  border-radius: 4px;
  box-shadow: 0 5px 16px rgb(0 0 0 / 80%);
}
</style>
