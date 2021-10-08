<template>
  <div>
    <top-bar />
    <sub-bar />
  </div>
</template>

<script>
import SubBar from "./sub/SubBar.vue";
import TopBar from "./top/TopBar.vue";
export default {
  name: "NavigationBar",
  components: { SubBar, TopBar },
};
</script>

<style lang="scss" scoped></style>
