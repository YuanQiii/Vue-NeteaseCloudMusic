<!--
 * @Author: your name
 * @Date: 2022-02-23 22:45:00
 * @LastEditTime: 2022-02-24 21:10:10
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\components\side\RecommendRadio.vue
-->
<template>
  <div class="recommend-radio">
    <div class="head">
      <div class="text">热门主播</div>
    </div>
    <div class="main" v-if="sucessIndex == 5">
      <recommend-rdio-item
        v-for="(value, index) in artistsId"
        :key="index"
        :artistDetail="artistsDetail[value]"
        @click.native="toPage(value)"
      />
    </div>
  </div>
</template>

<script>
import { userDetailApi } from "@/api/user.js";

import RecommendRdioItem from "./RecommendRdioItem.vue";
export default {
  components: { RecommendRdioItem },
  name: "RecommendRdio",
  created() {
    this.getArtistDetail();
  },
  data() {
    return {
      artistsId: [278438485, 559210341, 259292486, 1450418799, 2688170],
      artistsDetail: {
        278438485: null,
        559210341: null,
        259292486: null,
        1450418799: null,
        2688170: null,
      },
      sucessIndex: 0,
    };
  },
  methods: {
    getArtistDetail() {
      this.artistsId.forEach((element) => {
        userDetailApi(element).then((response) => {
          if (response["status"] == 200) {
            console.log(response);
            this.artistsDetail[element];
            this.$set(this.artistsDetail, element, {
              id: element,
              name: response["data"]["profile"]["nickname"],
              description: response["data"]["profile"]["description"],
              imageUrl: response["data"]["profile"]["avatarUrl"],
            });
            this.sucessIndex++;
          }
        });
      });
    },
    toPage(id) {
      if (this.$route.name != "userDetail") {
        this.$router.push({
          name: "userDetail",
          params: {
            id,
          },
        });
      } else {
        this.isJump = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.recommend-radio {
  font-size: 12px;
  display: flex;
  flex-direction: column;
  width: 210px;
  height: 700px;
  margin-left: 20px;
  margin-top: 20px;
  .head {
    display: flex;
    justify-content: space-between;
    border-bottom: solid 1px #ccc;
    margin-bottom: 15px;

    .text {
      color: #333;
      line-height: 23px;
      font-weight: 700;
    }
  }
}
</style>