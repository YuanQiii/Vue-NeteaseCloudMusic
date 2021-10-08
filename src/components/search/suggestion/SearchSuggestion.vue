<template>
  <div class="search-suggestion">
    <div v-show="searchKeyWords">
      <div
        @click="
          toSearchResultDetail('/searchpage/users', '1002', searchKeyWords)
        "
        class="user"
      >
        <span>搜索"{{ searchKeyWords }}"相关用户</span>>
      </div>

      <div>
        <div v-for="(value, index) in searchTypes" :key="index">
          <search-suggestion-item
            :resultType="value"
            :searchResult="searchResult"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SearchSuggestionItem from "./SearchSuggestionItem.vue";

export default {
  name: "SearchSuggestion",
  components: { SearchSuggestionItem },
  props: {
    searchResult: {},
    searchKeyWords: "",
  },
  data() {
    return {
      searchTypes: ["songs", "artists", "albums", "playlists"],
    };
  },
  methods: {
    isShow(item) {
      return this.searchResult.order.some((ele) => {
        return ele == item;
      });
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
    toSearchDetail(path, id) {
      this.$router.push({
        name: path,
        params: {
          id: id,
        },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.search-suggestion {
  height: auto;
  width: 235px;
  margin-left: 39%;
  margin-top: 5px;
  background-color: #fff;
  z-index: 99;
  border-radius: 3px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.8);
  color: black;
}
.user {
  height: 40px;
  line-height: 40px;
  font-size: 12px;
  padding-left: 10px;
  border-bottom: 1px solid #e2e2e2;
  cursor: pointer;

  span:hover {
    background-color: #e3e5e7;
  }
}
</style>
