<template>
  <div
    class="create-playlist-window"
    :style="windowStyle"
    @mousemove="move"
    @mouseup="afterMove"
    v-if="popupCreatePlaylistShow"
  >
    <div class="header" @mousedown="beforeMove">
      <div class="mode">新建歌单</div>
      <div class="close" @click="closeWindow">x</div>
    </div>
    <div class="content"></div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";

export default {
  name: "DownloadWindow",
  data() {
    return {
      left: 800,
      top: 400,
      diffX: 0,
      diffY: 0,
      moveEnable: false,
    };
  },
  computed: {
    ...mapState(["popupCreatePlaylistShow"]),
    windowStyle() {
      return {
        left: `${this.left}px`,
        top: `${this.top}px`,
      };
    },
  },
  methods: {
    ...mapMutations(["UPDATE_POPUP_CREATE_PLAYLIST"]),

    beforeMove(e) {
      this.diffX = e["offsetX"];
      this.diffY = e["offsetY"];
      this.moveEnable = true;
    },
    move(e) {
      if (this.moveEnable) {
        this.left = this.limitPosition(
          e["clientX"] - this.diffX,
          window.innerWidth - 530
        );
        this.top = this.limitPosition(
          e["clientY"] - this.diffY,
          window.innerHeight - 332
        );
      }
    },
    afterMove() {
      this.moveEnable = false;
    },
    closeWindow() {
      this.UPDATE_POPUP_DOWNLOAD_SHOW(false);
    },
    limitPosition(value, max) {
      if (value <= 0) {
        return 0;
      } else if (value >= max) {
        return max;
      } else {
        return value;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.create-playlist-window {
  max-width: 530px;
  min-height: 315px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  box-shadow: 0 5px 16px rgb(0 0 0 / 80%);
  z-index: 999;
  position: absolute;
  user-select: none;

  .header {
    color: #fff;
    height: 38 px;
    line-height: 38px;
    display: flex;
    background: #2d2d2d;
    justify-content: space-between;
    cursor: move;
    border-radius: 4px 4px 0 0;
  }

  .mode {
    margin-left: 18px;
  }

  .close {
    margin-right: 18px;
    cursor: pointer;
  }

  .content {
    width: 480px;
    height: 210px;
  }
}
</style>