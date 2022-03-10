<!--
 * @Author: your name
 * @Date: 2022-03-09 21:57:38
 * @LastEditTime: 2022-03-10 17:54:45
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\components\playlist\PlaylistCategory.vue
-->
<template>
  <div class="playlist-category">
    <div class="top">全部风格</div>
    <div class="bottom">
      <div class="left">
        <div
          class="item"
          v-for="(value, key, index) in categories"
          :key="index"
        >
          <div class="image"></div>
          <div class="title">{{ key }}</div>
        </div>
      </div>
      <div class="right">
        <div
          class="detail"
          v-for="(value, key, index) in categories"
          :key="index"
        >
          <div
            class="item"
            v-for="(value1, index1) in value"
            :key="index1"
            @click="getPlaylistTop(value1)"
          >
            {{ value1 }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { playlistCatlistApi, playlistTopApi } from "@/api/playlist.js";

export default {
  name: "PlaylistCategory",
  created() {
    this.getPlaylistCatlist();
  },
  data() {
    return {
      categories: {},
      playlist: [],
      imagePositions: [{ left: "0", right: "0" }],
    };
  },
  methods: {
    getPlaylistCatlist() {
      playlistCatlistApi()
        .then((response) => {
          if (response["data"]["code"] == 200) {
            let cate = response["data"]["categories"];
            let temp = {};
            for (let i in cate) {
              temp[cate[i]] = [];
            }
            let cateList = response["data"]["sub"];
            cateList.forEach((element) => {
              temp[cate[element["category"]]].push(element["name"]);
            });
            this.categories = temp;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getPlaylistTop(cat) {
      playlistTopApi(cat, this.offset)
        .then((response) => {
          if (response["data"]["code"] == 200) {
            this.playlist = this.playlist.concat(response["data"]["playlists"]);
            this.$emit("getPlaylist", this.playlist);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.playlist-category {
  width: 1200px;
  height: 300px;
  border: solid 1px #ccc;
  .bottom {
    display: flex;
    .left {
      margin-right: 30px;
      .item {
        margin-top: 20px;
      }
    }
    .right {
      .detail {
        display: flex;
        margin-top: 20px;
        .item {
          display: flex;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>