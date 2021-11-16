<!--
 * @Author: your name
 * @Date: 2021-11-15 09:48:10
 * @LastEditTime: 2021-11-16 16:37:56
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Projects\NeteaseCloudMusic\Vue-NeteaseCloudMusic\src\components\login\LoginMenu.vue
-->
<template>
  <div class="login-menu">
    <div class="main">
      <div class="phone-login">
        <img src="../../assets/login/platform.png" alt="" />
        <div class="phone">
          <img class="image" src="../../assets/login/phone_button.png" alt="" />
          <div class="text">手机号登录</div>
        </div>
        <div class="register">
          <img
            class="image"
            src="../../assets/login/regiter_button.png"
            alt=""
          />
          <div class="text">注册</div>
        </div>
      </div>
      <div class="other-login">
        <div class="">微信登录</div>
        <div class="">微信登录</div>
        <div class="">微信登录</div>
        <div class="">微信登录</div>
      </div>
    </div>
    <div class="foot">
      <div class="policy">政策</div>
      <div class="scan">扫码</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginMenu",
};
</script>

<style lang="scss" scoped>
.login-menu {
  .main {
    display: flex;
    margin-left: 40px;
    margin-top: 40px;
    .phone-login {
      text-align: center;

      .phone,
      .register {
        width: 219px;
        height: 31px;
        cursor: pointer;
        margin-top: 10px;
        &:hover {
          opacity: 0.8;
        }
        .image {
          width: 219px;
          height: 31px;
        }
        .text {
          position: relative;
          top: -25px;
          font-size: 12px;
        }
      }

      .phone {
        .text {
          color: #fff;
        }
      }
      .register {
        .text {
          color: #333;
        }
      }
    }
  }
  .foot {
    display: flex;
  }
}
</style>