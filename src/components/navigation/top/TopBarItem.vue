<template>
  <div class="top-bar-item">
    <slot />
  </div>
</template>

<script>
export default {
  name: "TopBarItem",
};
</script>

<style lang='scss' scoped>
.top-bar-item {
  height: 70px;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  transition: 0.1s;
  position: relative;
  color: #ccc;

  &:hover {
    background-color: #000;
  }
}
</style>
