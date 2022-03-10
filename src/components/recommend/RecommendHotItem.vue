<!--
 * @Author: your name
 * @Date: 2022-02-07 13:55:11
 * @LastEditTime: 2022-03-10 17:12:08
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\components\recommend\RecommendHotItem.vue
-->
<template>
  <div class="recommend-hot-item">
    <div class="main">
      <div class="pic">
        <img
          class="image"
          :src="playlist['picUrl'] || playlist['coverImgUrl']"
          alt=""
        />
      </div>
      <div class="mask"></div>
      <div class="bottom">
        <div class="icon"></div>
        <div class="icon1"></div>
        <div class="count">{{ count }}</div>
        <div class="icon2" @click="play"></div>
      </div>
    </div>
    <div class="title">
      <span class="name">{{ playlist["name"] }}</span>
    </div>
  </div>
</template>

<script>
import { playPlaylist } from "@/utils/operate.js";

export default {
  name: "RecommendHotItem",
  props: {
    playlist: Object,
  },
  computed: {
    count() {
      if (this.playlist["playCount"] < 10000) {
        return `${this.playlist["playCount"]}`;
      } else {
        let num = parseInt(this.playlist["playCount"] / 10000);
        return `${num}万`;
      }
    },
  },
  methods: {
    play() {
      this.$emit("jumpPage", false);
      playPlaylist(this.playlist["id"]);
    },
  },
};
</script>

<style lang="scss" scoped>
.recommend-hot-item {
  width: 140px;
  height: 234px;
  display: flex;
  margin-left: 43px;
  flex-direction: column;
  cursor: pointer;
  .main {
    .mask {
      display: block;
      width: 140px;
      height: 140px;
      background: url(https://s2.music.126.net/style/web2/img/coverall.png);
      background-position: 0px 0px;
      margin-top: -143px;
    }
    .pic {
      .image {
        width: 140px;
        height: 140px;
      }
    }
    .bottom {
      display: flex;
      margin-top: -27px;
      position: relative;
      cursor: default;
      .icon {
        background: url(https://s2.music.126.net/style/web2/img/coverall.png);
        background-position: 0 -537px;
        width: 140px;
        height: 27px;
      }

      .icon1 {
        width: 14px;
        height: 11px;
        background: url(https://s2.music.126.net/style/web2/img/iconall.png);
        background-position: 0 -24px;
        position: absolute;
        margin-top: 10px;
        margin-left: 10px;
      }

      .count {
        color: #ccc;
        font-size: 12px;
        position: absolute;
        top: 10px;
        left: 31px;
      }

      .icon2 {
        background: url(https://s2.music.126.net/style/web2/img/iconall.png);
        background-position: 0 0;
        width: 16px;
        height: 16px;
        position: absolute;
        top: 6px;
        left: 117px;
        cursor: pointer;
        &:hover {
          background-position: 0 -60px;
        }
      }
    }
  }
  .title {
    font-size: 14px;
    width: 140px;
    margin-top: 10px;
    .name {
      border-bottom: solid 1px #fff;
      &:hover {
        border-bottom: solid 1px #000;
      }
    }
  }
}
</style>