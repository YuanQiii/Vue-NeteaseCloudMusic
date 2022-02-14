<!--
 * @Author: your name
 * @Date: 2022-02-07 16:42:11
 * @LastEditTime: 2022-02-14 15:18:59
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
          <div
            class="item"
            v-for="(value, index) in albumList"
            :key="index"
            @click="toPage(value['id'])"
            @mouseenter="updatePlayIconShow(true, index)"
            @mouseleave="updatePlayIconShow(false, index)"
          >
            <img class="pic" :src="value['picUrl']" />
            <div class="bg"></div>
            <div
              class="play"
              v-show="playIconShow == index"
              @click="play(value['id'])"
            ></div>
            <div class="name">{{ value["name"] }}</div>
            <div class="artist">{{ getArtistName(value["artists"]) }}</div>
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
import { playPlaylist } from "@/utils/operate.js";

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
      moreUrl: "Album",
      albumList: [],
      marginLeft: -1300,
      transition: 1,
      gap: 650,
      currentIndex: 0,
      clickEnable: true,
      playIconShow: false,
      isJump: true,
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
            console.log(response["data"]["albums"]);
            let temp1 = response["data"]["albums"].slice(0, 5);
            let temp2 = response["data"]["albums"].slice(5, 10);
            this.albumList = temp1
              .concat(temp2)
              .concat(temp1)
              .concat(temp2)
              .concat(temp1);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getArtistName(artists) {
      let names = [];
      artists.forEach((element) => {
        names.push(element["name"]);
      });
      if (names.length == 1) {
        return names[0];
      } else {
        return names.join(" / ");
      }
    },
    updatePlayIconShow(value, index) {
      if (value) {
        this.playIconShow = index;
      } else {
        this.playIconShow = -1;
      }
    },
    toPage(id) {
      let name = "albumDetail";
      if (this.$route.name != name && this.isJump) {
        this.$router.push({ name, params: { id } });
      }
      this.isJump = true;
    },
    play(id) {
      this.isJump = false;
      playPlaylist(id, "album");
    },
    last() {
      if (this.clickEnable) {
        this.clickEnable = false;
        this.currentIndex -= 1;
        this.marginLeft += this.gap;
        setTimeout(() => {
          this.clickEnable = true;
          if (this.currentIndex == -2) {
            this.transition = 0;
            this.marginLeft = -1300;
            this.currentIndex = 0;
            setTimeout(() => {
              this.transition = 1;
            }, 100);
          }
        }, 1000);
      }
    },
    next() {
      if (this.clickEnable) {
        this.clickEnable = false;
        this.currentIndex += 1;
        this.marginLeft -= this.gap;
        setTimeout(() => {
          this.clickEnable = true;
          if (this.currentIndex == 2) {
            this.transition = 0;
            this.marginLeft = -1300;
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
    height: 162px;
    padding: 16px;
    background: #f5f5f5;
    border: 1px solid #ccc;
    margin-top: 20px;
    position: relative;

    .content {
      width: 635px;
      height: 140px;
      overflow: hidden;
      padding: 10px;
      .slider {
        display: flex;
        .item {
          margin-right: 15px;
          position: relative;
          cursor: pointer;
          .pic {
            width: 100px;
            height: 100px;
            margin-right: 15px;
          }
          .bg {
            width: 115px;
            height: 100px;
            background: url(https://s2.music.126.net/style/web2/img/coverall.png);
            background-position: 0 -570px;
            position: absolute;
            top: 0;
          }
          .play {
            background: url(https://s2.music.126.net/style/web2/img/iconall.png);
            background-position: 0 -85px;
            display: block;
            position: absolute;
            top: 75px;
            left: 75px;
            width: 22px;
            height: 22px;
            &:hover {
              background-position: 0 -110px;
            }
          }
          .name {
            margin-top: 5px;
            font-size: 12px;
            line-height: 18px;
            display: block;
            width: 100px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .artist {
            color: #666;
            font-size: 12px;
            line-height: 18px;
            display: block;
            width: 100px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
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
      left: 665px;
      &:hover {
        background-position: -320px -75px;
      }
    }
  }
}
</style>