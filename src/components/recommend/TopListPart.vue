<!--
 * @Author: your name
 * @Date: 2022-02-11 11:45:36
 * @LastEditTime: 2022-02-11 17:55:22
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\components\recommend\TopList.vue
-->
<template>
  <div class="top-list-part">
    <recommend-nav :title="title" :tabList="[]" :moreUrl="moreUrl" />
    <div class="main">
      <div class="item">
        <top-list-item
          v-for="(item, index) in toplistDetail"
          :key="index"
          :toplistDetail="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { toplistApi } from "@/api/toplist.js";
import { playlistDetailApi } from "@/api/playlist.js";

import RecommendNav from "../../ui/Navigation/RecommendNav.vue";
import TopListItem from "./TopListItem.vue";
import { mapMutations, mapState } from "vuex";
export default {
  components: { RecommendNav, TopListItem },
  name: "TopListPart",
  created() {
    this.getToplist();
  },
  data() {
    return {
      title: "榜单",
      moreUrl: "null",
      picUrlList: [
        "http://p4.music.126.net/pcYHpMkdC69VVvWiynNklA==/109951166952713766.jpg?param=100y100",
      ],
      toplistModes: ["飙升榜", "飙升榜", "飙升榜"],
      toplistDetail: [],
    };
  },
  computed: {
    ...mapState("toplist", ["toplist"]),
  },
  methods: {
    ...mapMutations("toplist", ["UPDATE_TOPLIST"]),

    getToplist() {
      toplistApi()
        .then((response) => {
          if (response["status"] == 200) {
            this.UPDATE_TOPLIST(response["data"]["list"]);
            this.toplistModes.forEach((element) => {
              this.getToplistDetail(this.getToplistId(element));
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getToplistId(name) {
      for (let index = 0; index < this.toplist.length; index++) {
        const element = this.toplist[index];
        if (element["name"] == name) {
          return element["id"];
        }
      }
    },

    getToplistDetail(id) {
      playlistDetailApi(id)
        .then((response) => {
          if (response["status"] == 200) {
            let playlist = response["data"]["playlist"];
            this.toplistDetail.push({
              name: playlist["name"],
              songs: playlist["tracks"],
              image: playlist["coverImgUrl"],
            });
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
.top-list-part {
  margin-top: 40px;
  .main {
    background-color: #f4f4f4;
    display: flex;
    flex-direction: row;
    width: 690px;
    height: 310px;
    border: 1px solid #ccc;
    border-right: none;
    margin-top: 20px;
    .item {
      display: flex;
    }
  }
}
</style>
