<!--
 * @Author: your name
 * @Date: 2022-03-09 21:57:38
 * @LastEditTime: 2022-03-09 22:53:17
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\components\playlist\PlaylistCategory.vue
-->
<template>
  <div class="playlist-category">
    <div class="top">全部风格</div>
    <div class="bottom">
      <div class="left"></div>
    </div>
  </div>
</template>

<script>
import { playlistCatlistApi } from "@/api/playlist.js";

export default {
  name: "PlaylistCategory",
  created() {
    this.getPlaylistCatlist();
  },
  data() {
    return {
      categories: {},
    };
  },
  methods: {
    getPlaylistCatlist() {
      playlistCatlistApi()
        .then((response) => {
          if (response["data"]["code"] == 200) {
            let cate = response["data"]["categories"];
            for (let i in cate) {
              this.categories[cate[i]] = [];
            }
            let cateList = response["data"]["sub"];
            cateList.forEach((element) => {
              this.categories[cate[element["category"]]].push(element["name"]);
            });
            console.log("categories", this.categories);
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
</style>