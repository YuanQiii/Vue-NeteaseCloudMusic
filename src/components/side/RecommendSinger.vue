<!--
 * @Author: your name
 * @Date: 2022-02-22 20:53:44
 * @LastEditTime: 2022-02-24 21:09:05
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\components\side\RcommendSinger.vue
-->
<template>
  <div class="recommend-singer">
    <div class="head">
      <div class="text">入驻歌手</div>
      <div class="more">查看全部 ></div>
    </div>
    <div class="main" v-if="sucessIndex == 5">
      <recommend-singer-item
        v-for="(value, index) in artistsId"
        :key="index"
        :artistDetail="artistsDetail[value]"
        @click.native="toPage(value)"
      />

      <register-button
        class="btn"
        text="申请成为网易音乐人"
        @click.native="jumpPage"
      />
    </div>
  </div>
</template>

<script>
import { artistDetailApi } from "@/api/artist.js";

import RecommendSingerItem from "./RecommendSingerItem.vue";
import RegisterButton from "../../ui/Button/RegisterButton.vue";
export default {
  components: { RecommendSingerItem, RegisterButton },
  name: "RecommendSinger",
  created() {
    this.getArtistDetail();
  },
  data() {
    return {
      artistsId: [10559, 1160085, 5345, 6731, 3669],
      artistsDetail: {
        10559: null,
        1160085: null,
        5345: null,
        6731: null,
        3669: null,
      },
      sucessIndex: 0,
    };
  },
  methods: {
    getArtistDetail() {
      this.artistsId.forEach((element) => {
        artistDetailApi(element).then((response) => {
          if (response["data"]["code"] == 200) {
            console.log(response);
            this.artistsDetail[element];

            this.$set(this.artistsDetail, element, {
              id: element,
              name: response["data"]["data"]["artist"]["name"],
              description: response["data"]["data"]["user"]["description"],
              imageUrl: response["data"]["data"]["artist"]["cover"],
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
    jumpPage() {
      window.location.href = "https://music.163.com/st/musician";
    },
  },
};
</script>

<style lang="scss" scoped>
.recommend-singer {
  font-size: 12px;
  display: flex;
  flex-direction: column;
  width: 210px;
  margin-left: 20px;
  margin-top: 20px;
  .head {
    display: flex;
    justify-content: space-between;
    border-bottom: solid 1px #ccc;

    .text {
      color: #333;
      line-height: 23px;
      font-weight: 700;
    }
    .more {
      height: 12px;
      margin-top: 4px;
      border-bottom: solid 1px #fff;
      cursor: pointer;
      &:hover {
        border-bottom: solid 1px #000;
      }
    }
  }
  .main {
    .btn {
      width: 210px;
      height: 30px;
      margin-top: 10px;
    }
  }
}
</style>