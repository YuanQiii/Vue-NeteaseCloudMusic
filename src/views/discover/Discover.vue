<template>
  <div class="discover">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "Discover",
};
</script>

<style lang="scss" scoped>
.discover {
  display: flex;
  justify-content: center;
}
</style>