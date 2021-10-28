<!--
 * @Author: your name
 * @Date: 2021-10-28 15:17:26
 * @LastEditTime: 2021-10-28 17:34:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Projects\NeteaseCloudMusic\Vue-NeteaseCloudMusic\src\components\operation\Operate.vue
-->
<template>
  <div class="song-operation">
    <div class="add" @click="add">add</div>
    <div class="collect">collect</div>
    <div class="share">share</div>
    <div class="download">download</div>
    <div class="clear">clear</div>
  </div>
</template>

<script>
export default {
  name: "SongOperation",
  props: {
    songDetail: Object,
  },
  methods: {
    add() {
      this.$store.commit("updatePlayListSongsAndId", this.songDetail);
    },
  },
};
</script>

<style lang="scss" scoped>
.song-operation {
  display: flex;
}
</style>