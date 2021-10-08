<template>
  <div>
    <div>
      <navigation-search-bar />
    </div>
    <div>
      <search-suggestion />
    </div>
  </div>
</template>

<script>
import NavigationSearchBar from "./bar/NavigationSearchBar.vue";
import SearchSuggestion from "./suggestion/SearchSuggestion.vue";
export default {
  components: { NavigationSearchBar, SearchSuggestion },
  name: "search",
};
</script>

<style lang="scss" scoped>
</style>
