<!--
 * @Author: your name
 * @Date: 2021-11-10 09:37:19
 * @LastEditTime: 2021-11-11 18:02:17
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Projects\NeteaseCloudMusic\Vue-NeteaseCloudMusic\src\components\login\QRCodeLogin.vue
-->
<template>
  <div class="qr-code-login">
    <div class="main">
      <div class="guide">
        <img class="image" src="../../assets/login/qr_guide.png" alt="" />
      </div>
      <div class="qr">
        <div class="text">扫码登录</div>
        <img class="image" src="" alt="" ref="QRImage" />
        <div class="link-text">使用 网易云音乐APP 扫码登录</div>
      </div>
    </div>

    <div class="mode">
      <div class="text">选择其他登录模式</div>
    </div>
  </div>
</template>

<script>
import { QRKeyApi } from "@/api/login.js";
import { QRCreateApi } from "@/api/login.js";
import { QRCheckApi } from "@/api/login.js";

export default {
  name: "QRCodeLogin",
  created() {
    this.getQRImage();
  },
  data() {
    return {
      uniKey: "",
      QRImg: "",
      checkCode: 0,
      cookie: "",
      checkInterval: null,
      validity: true,
    };
  },
  methods: {
    getQRImage() {
      let params = {
        timestamp: this.getTimestamp(),
      };
      QRKeyApi(params)
        .then((response) => {
          this.uniKey = response["data"]["data"]["unikey"];
          this.validity = true;
          this.checkQRStatus();
          return this.unikey;
        })
        .then((key) => {
          let params = {
            key,
            timestamp: this.getTimestamp(),
            qrimg: "true",
          };
          QRCreateApi(params).then((response) => {
            this.QRImg = response["data"]["data"]["qrimg"];
            this.$refs.QRImage.src = this.QRImg;
          });
        });
    },
    checkQRStatus() {
      if (this.checkInterval) {
        clearInterval(this.checkInterval);
      }

      this.checkInterval = setInterval(() => {
        let params = {
          key: this.uniKey,
          timestamp: this.getTimestamp(),
        };

        QRCheckApi(params).then((response) => {
          this.checkCode = response["data"]["code"];
          if (this.checkCode == 803) {
            this.cookie = response["data"]["cookie"];
            clearInterval(this.checkInterval);
          } else if (this.checkCode == 800) {
            this.validity = false;
          }
        });
      }, 1000);
    },
    getTimestamp() {
      return new Date().valueOf();
    },
  },
};
</script>

<style lang="scss" scoped>
.qr-code-login {
  display: flex;
  flex-direction: column;
  justify-content: center;

  .main {
    display: flex;
    justify-content: center;
    margin-top: 30px;

    .guide {
      .image {
        width: 125px;
        height: 220px;
        margin-right: 80px;
      }
    }
    .qr {
      .image {
        width: 140px;
        height: 140px;
        margin-left: -35px;
        margin-top: 10px;
      }
      .text {
        color: #333;
        font-size: 18px;
        font-weight: 500;
      }
      .link-text {
        font-size: 12px;
        margin-left: -47px;
        margin-top: 10px;
      }
    }
  }

  .mode {
    font-size: 12px;
    display: flex;
    justify-content: center;

    .text {
      display: block;
      width: 110px;
      height: 18px;
      text-align: center;
      border: 1px solid #979797;
      border-radius: 15px;
      line-height: 18px;
      padding: 5px;
    }
  }
}
</style>