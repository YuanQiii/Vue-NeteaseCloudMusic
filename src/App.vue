<template>
  <div>
    <navigation-bar />
    <div><router-view /></div>
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
};
</script>
