<!--
 * @Author: your name
 * @Date: 2022-01-02 22:38:20
 * @LastEditTime: 2022-01-04 16:00:52
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
        @click="getEmotion"
      >
        <img
          class="image"
          :src="getImageSrc(Object.keys(value)[0])"
          :data-type="value[Object.keys(value)[0]]"
          :title="value[Object.keys(value)[0]]"
        />
      </div>
    </div>
    <div class="page">
      <emotion-left-arrow-button
        class="left"
        @click.native="updateCurrentEmotionIndex(-1)"
      />
      <div class="num">{{ currentEmotionIndex + 1 }}/2</div>
      <emotion-right-arrow-button
        class="right"
        @click.native="updateCurrentEmotionIndex(1)"
      />
    </div>
  </div>
</template>

<script>
import EmotionLeftArrowButton from "../Button/EmotionLeftArrowButton.vue";
import EmotionRightArrowButton from "../Button/EmotionRightArrowButton.vue";
export default {
  components: { EmotionLeftArrowButton, EmotionRightArrowButton },
  name: "EmotionList",
  data() {
    return {
      currentEmotionIndex: 0,

      emotionCode: [
        [
          {
            86: "大笑",
          },
          {
            85: "可爱",
          },
          {
            359: "憨笑",
          },
          {
            95: "色",
          },
          {
            363: "亲亲",
          },
          {
            96: "惊恐",
          },
          {
            356: "流泪",
          },
          {
            362: "亲",
          },
          {
            352: "呆",
          },
          {
            342: "哀伤",
          },
          {
            343: "呲牙",
          },
          {
            348: "吐舌",
          },
          {
            353: "撇嘴",
          },
          {
            361: "怒",
          },
          {
            341: "奸笑",
          },
          {
            97: "汗",
          },
          {
            346: "痛苦",
          },
          {
            354: "惶恐",
          },
          {
            350: "生病",
          },
          {
            351: "口罩",
          },
          {
            357: "大哭",
          },
          {
            355: "晕",
          },
          {
            115: "发怒",
          },
          {
            360: "开心",
          },
          {
            94: "鬼脸",
          },
          {
            87: "皱眉",
          },
          {
            358: "流感",
          },
          {
            33: "爱心",
          },
          {
            34: "心碎",
          },
          {
            303: "钟情",
          },
          {
            309: "星星",
          },
          {
            314: "生气",
          },
          {
            89: "便便",
          },
          {
            13: "强",
          },
          {
            372: "弱",
          },
          {
            14: "拜",
          },
          {
            379: "牵手",
          },
          {
            380: "跳舞",
          },
          {
            374: "禁止",
          },
          {
            262: "这边",
          },
          {
            106: "爱意",
          },
          {
            376: "示爱",
          },
          {
            367: "嘴唇",
          },
          {
            81: "狗",
          },
          {
            78: "猫",
          },
          {
            100: "猪",
          },
          {
            459: "兔子",
          },
          {
            450: "小鸡",
          },
          {
            461: "公鸡",
          },
          {
            116: "幽灵",
          },
        ],

        [
          {
            411: "圣诞",
          },
          {
            101: "外星",
          },
          {
            52: "礼物",
          },
          {
            107: "钻石",
          },
          {
            0: "男孩",
          },
          {
            1: "女孩",
          },
          {
            337: "蛋糕",
          },
          {
            186: "18",
          },
          {
            312: "圈",
          },
          {
            313: "叉",
          },
        ],
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
    updateCurrentEmotionIndex(value) {
      if (
        this.currentEmotionIndex + value > -1 &&
        this.currentEmotionIndex + value < 2
      ) {
        this.currentEmotionIndex += value;
      }
    },
    getEmotion(e) {
      this.$emit("getEmotion", e.target.getAttribute("data-type"));
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
  .page {
    .num {
      position: relative;
      color: #666;
      font-size: 12px;
      line-height: 16px;
      top: -185px;
      left: 133px;
    }

    .left {
      position: relative;
      display: block;
      width: 9px;
      height: 9px;
      top: -172px;
      left: 95px;
    }
    .right {
      position: relative;
      display: block;
      width: 9px;
      height: 9px;
      top: -197px;
      left: 185px;
    }
  }
}
</style>