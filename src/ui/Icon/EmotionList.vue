<!--
 * @Author: your name
 * @Date: 2022-01-02 22:38:20
 * @LastEditTime: 2022-01-02 23:24:05
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\ui\Icon\EmotionList.vue
-->
<template>
  <div class="emotion-list">
    <div class="bg"></div>
    <div class="emotion">
      <div
        class="icon"
        v-for="(value, index) in emotionCode[currentEmotionIndex]"
        :key="index"
      >
        <img class="image" :src="getImageSrc(value)" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmotionList",
  data() {
    return {
      currentEmotionIndex: 0,
      emotionCode: [
        [
          86, 85, 359, 95, 363, 96, 356, 362, 352, 342, 343, 348, 353, 361, 341,
          97, 346, 354, 350, 351, 357, 355, 115, 360, 94, 87, 358, 33, 34, 303,
          309, 314, 89, 13, 372, 14, 379, 380, 374, 262, 106, 376, 367, 81, 78,
          100, 459, 450, 461, 116,
        ],
        [411, 101, 52, 107, 0, 1, 337, 186, 312, 313],
      ],
    };
  },
  computed: {
    currentEmotionCode() {
      return this.currentEmotionIndex;
    },
  },
  methods: {
    getImageSrc(value) {
      return `http://s1.music.126.net/style/web2/emt/emoji_${value}.png`;
    },
  },
};
</script>

<style lang="scss" scoped>
.emotion-list {
  z-index: 999;
  position: relative;
  .bg {
    width: 280px;
    height: 180px;
    background: url(https://s2.music.126.net/style/web2/img/emtbg.png);
    background-position: 0 0;
  }
  .emotion {
    position: relative;
    top: -200px;
    display: flex;
    width: 280px;
    height: 106px;
    flex-wrap: wrap;
    margin-left: 12px;
    margin-top: 40px;
    .icon {
      width: 21px;
      height: 21px;
      margin: 1px 2px 2px 1px;
      border: 1px solid #fff;
      cursor: pointer;
      &:hover {
        border-color: #3d91ec;
      }
    }
  }
}
</style>