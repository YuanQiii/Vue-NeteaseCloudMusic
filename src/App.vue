<template>
  <div>
    <navigation-bar />
    <div><router-view /></div>
  </div>
</template>

<script>
import NavigationBar from "./components/navigation/NavigationBar.vue";

export default {
  components: {
    NavigationBar,
  },
};
</script>
