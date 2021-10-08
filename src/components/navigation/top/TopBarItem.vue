<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  name: "TopBarItem",
};
</script>

<style scoped>
div {
  height: 70px;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  transition: 0.1s;
  position: relative;
  color: #ccc;
}
div:hover {
  background-color: #000;
}
</style>
