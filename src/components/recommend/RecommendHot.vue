<!--
 * @Author: your name
 * @Date: 2022-01-26 09:52:08
 * @LastEditTime: 2022-02-14 11:41:58
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\components\recommend\RecommendHot.vue
-->
<template>
  <div class="recommend-hot">
    <recommend-nav :title="title" :tabList="tabList" :moreUrl="moreUrl" />
    <div class="recommend-content">
      <recommend-hot-item
        v-for="(value, index) in recommendList"
        :key="index"
        :playlist="value"
        @click.native="toPage(value['id'])"
        @jumpPage="jumpPage"
      />
    </div>
  </div>
</template>

<script>
import { personalizedPlaylistApi } from "@/api/recommend.js";

import RecommendNav from "../../ui/Navigation/RecommendNav.vue";
import RecommendHotItem from "./RecommendHotItem.vue";
export default {
  components: { RecommendNav, RecommendHotItem },
  created() {
    this.getPersonalizedPlaylist();
  },
  data() {
    return {
      title: "热门推荐",
      tabList: [
        { name: "华语", url: "" },
        { name: "流行", url: "" },
        { name: "摇滚", url: "" },
        { name: "民谣", url: "" },
        { name: "电子", url: "" },
      ],
      moreUrl: "PlayList/all",
      recommendList: [],
      isJump: true,
    };
  },
  methods: {
    getPersonalizedPlaylist() {
      personalizedPlaylistApi(8)
        .then((response) => {
          if (response["status"] == 200) {
            this.recommendList = response["data"]["result"];
            console.log(this.recommendList);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    toPage(id) {
      if (this.$route.name != "playlistDetail" && this.isJump) {
        this.$router.push({
          name: "playlistDetail",
          params: {
            id,
          },
        });
      } else {
        this.isJump = true;
      }
    },
    jumpPage(value) {
      this.isJump = value;
    },
  },
};
</script>

<style lang="scss" scoped>
.recommend-hot {
  width: 690px;
  height: 468px;
  display: block;
  .recommend-content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: -43px;
    margin-top: 20px;
  }
}
</style>