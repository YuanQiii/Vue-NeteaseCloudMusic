<!--
 * @Author: your name
 * @Date: 2021-10-28 15:17:26
 * @LastEditTime: 2021-10-29 17:30:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Projects\NeteaseCloudMusic\Vue-NeteaseCloudMusic\src\components\operation\Operate.vue
-->
<template>
  <div class="song-operation">
    <div class="add" @click="add">
      <img class="image" src="../../assets/operation/add.png" alt="" />
    </div>
    <div class="collect" @click="collect">
      <img class="image" src="../../assets/operation/collect.png" alt="" />
    </div>
    <div class="share" @click="share">
      <img class="image" src="../../assets/operation/share.png" alt="" />
    </div>
    <div class="download" @click="download">
      <img class="image" src="../../assets/operation/download.png" alt="" />
    </div>
    <div class="remove" @click="remove">
      <img class="image" src="../../assets/operation/remove.png" alt="" />
    </div>
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
    collect() {
      console.log("collect");
    },
    share() {
      console.log("share");
    },
    download() {
      console.log("download");
    },
    remove() {
      this.$store.commit("deletePlayListSongsAndId", this.songDetail["id"]);
    },
  },
};
</script>

<style lang="scss" scoped>
.song-operation {
  display: flex;

  .image {
    width: 16px;
    height: 16px;
    margin-right: 5px;
    cursor: pointer;
  }
}
</style>