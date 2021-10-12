<template>
  <div>
    <div class="search-bar">
      <img src="@/assets/navigation/search.png" />
      <input
        type="text"
        placeholder="音乐/视频/电台/用户"
        v-model="searchKeyWords"
        @blur="suggestDisappear"
        @focus="suggestAppear"
        @keydown.enter="toSearchDetail"
      />
    </div>
    <div class="search-suggestion">
      <search-suggestion
        :searchResult="searchResult"
        :searchKeyWords="searchKeyWords"
        :v-show="suggestShow"
      />
    </div>
  </div>
</template>

<script>
import SearchSuggestion from "../suggestion/SearchSuggestion.vue";
import { searchSuggest } from "@/api/search.js";
export default {
  name: "NavigationSearchBar",
  components: {
    SearchSuggestion,
  },
  data() {
    return {
      searchKeyWords: "",
      searchResult: {
        songs: [],
        albums: [],
        artists: [],
        order: [],
      },
      suggestShow: false,
    };
  },
  computed: {
    searchCurrentCatName() {
      return this.$store.state.searchCurrentCatName;
    },
  },
  watch: {
    searchKeyWords(newValue) {
      let params = {
        keywords: newValue,
      };

      searchSuggest(params).then((response) => {
        console.log(response.data.result);
        this.searchResult = response.data.result;
      });
    },
  },
  methods: {
    suggestDisappear() {
      setTimeout(() => {
        this.suggestShow = false;
      }, 100);
    },
    suggestAppear() {
      this.suggestShow = true;
    },
    toSearchDetail() {
      this.$router.push({
        name: this.searchCurrentCatName,
        params: {
          kw: this.searchKeyWords,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.search-bar {
  position: relative;
  background-color: #fff;
  height: 22px;
  border-radius: 16px;
  z-index: 99;
  margin-top: 20px;
  padding: 5px;
  padding-left: 20px;
  width: 138px;
  margin-left: 100px;
  font-size: 12px;
  color: #9b9b9b;

  img {
    height: 20px;
    margin-top: 3px;
    margin-left: -10px;
  }

  input {
    outline: none;
    border: 0px;
    margin-top: 0px;
    width: 120px;
    height: 22px;
    position: absolute;

    &:focus::-webkit-input-placeholder {
      color: transparent;
    }
  }
}
</style>
