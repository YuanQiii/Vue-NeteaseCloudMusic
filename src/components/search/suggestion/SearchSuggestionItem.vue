<template>
  <div class="result" v-if="isShow()">
    <div class="title">
      <img class="image" src="@/assets/navigation/resalb.png" />
      <span>{{ getTitleName() }}</span>
    </div>
    <div class="detail">
      <div
        class="name"
        v-for="(value, index) in searchResult[resultType]"
        :key="index"
        @click="toSearchDetail('digitalsingle', value.id)"
      >
        <span v-if="resultType == 'songs'"
          >{{ value.name }}-{{ value.artists[0].name }}</span
        >
        <span v-if="resultType == 'artists'">{{ value.name }}</span>
        <span v-if="resultType == 'albums'"
          >{{ value.name }}-{{ value.artist.name }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchSuggestionItem",
  props: {
    resultType: String,
    searchResult: Object,
  },
  data() {
    return {
      titleNames: {
        songs: "单曲",
        artists: "歌手",
        albums: "专辑",
        playlists: "歌单",
      },
    };
  },
  methods: {
    isShow() {
      if (this.searchResult) {
        return this.searchResult.order.some((ele) => {
          return ele == this.resultType;
        });
      } else {
        return false;
      }
    },
    getTitleName() {
      return this.titleNames[this.resultType];
    },
    toSearchResultDetail(path, type, kw) {
      // this.$store.commit('changeValue', {
      //   type: 'key',
      //   value: kw
      // })
      // request({
      //   // url: "/search?keywords=%20" + this.searchKeyWords + "&type=" + type,
      //   url: `/search?keywords=%20${this.searchKeyWords}&type=${type}`,
      // }).then((response) => {
      //   if (path == "/searchpage/single") {
      //     this.$store.commit("changeValue", {
      //       type: "searchIndex",
      //       value: 0,
      //     });
      //   }
      //   if (path == "/searchpage/singer") {
      //     this.$store.commit("changeValue", {
      //       type: "searchIndex",
      //       value: 1,
      //     });
      //   }
      //   if (path == "/searchpage/alb") {
      //     this.$store.commit("changeValue", {
      //       type: "searchIndex",
      //       value: 2,
      //     });
      //   }
      //   if (path == "/searchpage/playlis") {
      //     this.$store.commit("changeValue", {
      //       type: "searchIndex",
      //       value: 5,
      //     });
      //   }
      //   if (path == "/searchpage/users") {
      //     this.$store.commit("changeValue", {
      //       type: "searchIndex",
      //       value: 7,
      //     });
      //   }
      //   this.$router.push({
      //     name: 'users',
      //     params: {
      //       kw: kw
      //     }
      //   });
      // });
    },
  },
};
</script>

<style lang="scss" scoped>
.result {
  line-height: 23px;
  display: flex;
}

.title {
  margin-top: 5px;
  border-right: solid 1px #e2e2e2;
  padding-right: 10px;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  .image {
    height: 15px;
    width: 15px;
    margin-right: 5px;
    margin-left: 5px;
    margin-top: 5px;
  }
}

.detail {
  font-size: 12px;
  border-bottom: solid 1px #e2e2e2;
  padding: 5px 0px;

  .name {
    padding-left: 10px;
    width: 160px;
    height: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;

    &:hover {
      background-color: #e3e5e7;
    }
  }
}
</style>
