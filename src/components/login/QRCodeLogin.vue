<!--
 * @Author: your name
 * @Date: 2021-11-10 09:37:19
 * @LastEditTime: 2022-03-09 21:23:34
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Projects\NeteaseCloudMusic\Vue-NeteaseCloudMusic\src\components\login\QRCodeLogin.vue
-->
<template>
  <div class="qr-code-login">
    <div class="main">
      <div class="step-one" v-show="code == 800 || code == 801">
        <div class="normal">
          <div class="guide">
            <img class="image" src="../../assets/login/qr_guide.png" alt="" />
          </div>
          <div class="qr">
            <div class="text">扫码登录</div>
            <img class="image" src="" alt="" ref="QRImage" />
            <div class="link-text">
              使用
              <a class="link-download" target="_blank" href="/download"
                >网易云音乐APP</a
              >
              扫码登录
            </div>
          </div>
        </div>

        <div class="tip" v-show="code == 800">
          <div class="text">二维码已失效</div>
          <div class="refresh" @click="getQRImage">点击刷新</div>
        </div>
      </div>

      <div class="step-two" v-show="code == 802 || code == 803">
        <img class="image" src="../../assets/login/scan_success.png" alt="" />
        <div class="text1">扫描成功</div>
        <div class="text2">请在手机上确认登录</div>
      </div>
    </div>

    <div class="mode" @click="UPDATE_LOGIN_MODE('menu')">
      <div class="text">选择其他登录模式</div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

import { QRKeyApi, QRCreateApi, QRCheckApi } from "@/api/login.js";

export default {
  name: "QRCodeLogin",
  created() {
    this.getQRImage();
    // this.getUserInfo();
  },
  beforeDestroy() {
    clearInterval(this.checkInterval);
  },
  data() {
    return {
      uniKey: "",
      code: 801,
      checkInterval: null,
    };
  },
  methods: {
    ...mapMutations("login", ["UPDATE_LOGIN_MODE", "UPDATE_LOGIN_WINDOW_SHOW"]),
    ...mapMutations("user", ["UPDATE_USER_LOGIN"]),
    ...mapActions("user", ["getUserInfo"]),

    getQRImage() {
      QRKeyApi(this.getTimestamp())
        .then((response) => {
          this.uniKey = response["data"]["data"]["unikey"];
          return QRCreateApi(this.uniKey, true, this.getTimestamp());
        })
        .then((response) => {
          this.$refs.QRImage.src = response["data"]["data"]["qrimg"];
          this.checkQRStatus();
        });
    },
    checkQRStatus() {
      if (this.checkInterval) {
        clearInterval(this.checkInterval);
      }

      this.checkInterval = setInterval(() => {
        QRCheckApi(this.uniKey, this.getTimestamp()).then((response) => {
          this.handleQRCode(response["data"]["code"]);
        });
      }, 500);
    },
    handleQRCode(code) {
      if (code == 800) {
        clearInterval(this.checkInterval);
        console.log("二维码已过期");
      } else if (code == 803) {
        this.code = code;
        this.getUserInfo();
        this.UPDATE_LOGIN_WINDOW_SHOW(false);
      } else {
        this.code = code;
      }
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
  width: 528px;

  .main {
    display: block;
    height: 265px;

    .step-one {
      position: relative;
      .normal {
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

            .link-download {
              $link-download-color: #0c73c2;
              cursor: pointer;

              color: $link-download-color;

              &:link {
                text-decoration: none;
                color: $link-download-color;
              }
              &:visited {
                text-decoration: none;
                color: $link-download-color;
              }
              &:hover {
                text-decoration-line: underline;
              }
            }
          }
        }
      }

      .tip {
        display: block;
        width: 140px;
        height: 140px;
        background: rgba(255, 255, 255, 0.9);
        position: absolute;
        left: 275px;
        top: 40px;
        text-align: center;

        .text {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.8);
          font-weight: 500;
          margin-top: 40px;
        }
        .refresh {
          display: block;
          margin: 0 auto;
          margin-top: 10px;
          padding-right: 0;
          width: 64px;
          height: 24px;
          line-height: 24px;
          text-align: center;
          border-radius: 4px;
          background: linear-gradient(180deg, #81dd81 0%, #55a055 100%);
          border: 1 px solid #5baf5b;
          box-shadow: inset 0 -1px 1px 1px rgb(185 230 185 / 31%);
          color: #fff;
          font-size: 12px;
          cursor: pointer;
        }
      }
    }

    .step-two {
      text-align: center;
      margin-top: 40px;
      .image {
        width: 140px;
        height: 140px;
      }
      .text1 {
        margin-top: 12px;
        font-size: 18px;
        font-weight: 450;
        line-height: 24px;
        color: rgba(0, 0, 0, 0.8);
      }
      .text2 {
        margin-top: 4px;
        margin-bottom: 20px;
        font-size: 14px;
        color: #333;
      }
    }
  }

  .mode {
    font-size: 12px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    margin-bottom: 20px;

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