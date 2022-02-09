<!--
 * @Author: your name
 * @Date: 2022-02-07 16:42:11
 * @LastEditTime: 2022-02-09 17:56:57
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\components\recommend\NewAlbum.vue
-->
<template>
  <div class="new-album">
    <recommend-nav :title="title" :tabList="[]" :moreUrl="moreUrl" />
    <div class="main">
      <div class="content">
        <div class="slider" :style="sliderStyle">
          <div class="item" v-for="(value, index) in albumList">
            <div class="bg"></div>
          </div>
        </div>
      </div>
      <div class="icon1" @click="last"></div>
      <div class="icon2" @click="next"></div>
    </div>
  </div>
</template>

<script>
import { albumNewestApi } from "@/api/recommend.js";

import RecommendNav from "../../ui/Navigation/RecommendNav.vue";
export default {
  name: "NewAlbum",
  components: { RecommendNav },
  created() {
    this.getTopAlbum();
  },
  data() {
    return {
      title: "新碟上架",
      moreUrl: "null",
      albumList: [],
      marginLeft: 0,
      transition: 1,
      gap: 650,
      currentIndex: 0,
      clickEnable: true,
    };
  },
  computed: {
    sliderStyle() {
      return {
        marginLeft: `${this.marginLeft}px`,
        transition: `${this.transition}s`,
      };
    },
  },
  methods: {
    getTopAlbum() {
      albumNewestApi()
        .then((response) => {
          if (response["status"] == 200) {
            let temp1 = response["data"]["albums"].slice(0, 10);
            let temp2 = response["data"]["albums"].slice(0, 5);
            this.albumList = temp1.concat(temp2);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    last() {},
    next() {
      if (this.clickEnable) {
        this.clickEnable = false;
        this.currentIndex += 1;
        this.marginLeft -= this.gap;
        setTimeout(() => {
          this.clickEnable = true;
          if (this.currentIndex == 2) {
            this.transition = 0;
            this.marginLeft = 0;
            this.currentIndex = 0;
            setTimeout(() => {
              this.transition = 1;
            }, 100);
          }
        }, 1000);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.new-album {
  .main {
    display: block;
    width: 654px;
    height: 184px;
    padding: 16px;
    background: #f5f5f5;
    border: 1px solid #ccc;
    margin-top: 20px;
    position: relative;

    .content {
      width: 635px;
      height: 130px;
      background-color: rgb(177, 28, 28);
      padding: 10px;
      .slider {
        display: flex;
        .item {
          margin-right: 15px;
          .bg {
            width: 115px;
            height: 100px;
            background: url(https://s2.music.126.net/style/web2/img/coverall.png);
            background-position: 0 -570px;
          }
        }
      }
    }

    .icon1 {
      background: url(https://s2.music.126.net/style/web2/img/index/index.png);
      background-position: -260px -75px;
      width: 17px;
      height: 17px;
      position: absolute;
      top: 65px;
      left: 0;
      cursor: pointer;
      &:hover {
        background-position: -280px -75px;
      }
    }
    .icon2 {
      background: url(https://s2.music.126.net/style/web2/img/index/index.png);
      background-position: -300px -75px;
      width: 17px;
      height: 17px;
      cursor: pointer;
      position: absolute;
      top: 65px;
      left: 670px;
      &:hover {
        background-position: -320px -75px;
      }
    }
  }
}
</style>