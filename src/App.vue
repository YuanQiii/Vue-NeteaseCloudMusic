<template>
  <div @mouseup="updateIsMouseDown">
    <navigation-bar />
    <div>
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
    <music-player />
  </div>
</template>

<script>
import NavigationBar from "./components/navigation/NavigationBar.vue";
import MusicPlayer from "./components/player/MusicPlayer.vue";

export default {
  components: {
    NavigationBar,
    MusicPlayer,
  },
  methods: {
    updateIsMouseDown() {
      this.$store.commit("updateIsMouseDown", false);
      console.log(123);
    },
  },
};
</script>
