<!--
 * @Author: your name
 * @Date: 2022-03-10 16:58:06
 * @LastEditTime: 2022-03-10 18:00:03
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\components\playlist\PlaylistDisplay.vue
-->
<template>
  <div class="playlist-display">
    <div class="content">
      <recommend-hot-item
        v-for="(value, index) in playlist"
        :key="index"
        :playlist="value"
        @click.native="toPage(value['id'])"
        @jumpPage="jumpPage"
      />
    </div>
  </div>
</template>

<script>
import RecommendHotItem from "../recommend/RecommendHotItem.vue";
export default {
  components: { RecommendHotItem },
  name: "PlaylistDisplay",
  props: {
    playlist: Array,
  },
  data() {
    return {
      isJump: true,
    };
  },
  methods: {
    prevClick(value) {
      this.offset = value;
    },
    toPage(id) {
      this.$router.push({
        name: "playlistDetail",
        params: {
          id,
        },
      });
    },
    jumpPage(value) {
      this.isJump = value;
    },
  },
};
</script>

<style lang="scss" scoped>
.playlist-display {
  .content {
    display: flex;
  }
}
</style>