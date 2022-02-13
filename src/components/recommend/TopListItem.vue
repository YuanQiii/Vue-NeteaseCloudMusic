<!--
 * @Author: your name
 * @Date: 2022-02-11 14:47:30
 * @LastEditTime: 2022-02-13 23:43:45
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\components\recommend\TopListItem.vue
-->
<template>
  <div class="top-list-item">
    <div class="head">
      <div class="image">
        <img :src="toplistDetail['image']" class="pic" />
        <div class="cover"></div>
      </div>
      <div class="op">
        <div class="title" @click="toPage('TopList', toplistId)">
          {{ toplistDetail["name"] }}
        </div>
        <div class="icon">
          <div class="play"></div>
          <div class="collect"></div>
        </div>
      </div>
    </div>
    <div class="content">
      <div
        class="item"
        v-for="(value, index) in toplistDetail['songs']"
        :key="index"
        :style="getNameStyle(index)"
      >
        <div class="num" :style="getNumStyle(index)">{{ index + 1 }}</div>
        <div class="name" @click="toPage('songDetail', value['id'])">
          {{ value["name"] }}
        </div>
      </div>
      <div class="more">
        <div class="text" @click="toPage('TopList', toplistId)">查看全部></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopListItem",
  props: {
    toplistDetail: Object,
    toplistId: String,
  },
  methods: {
    getNumStyle(index) {
      return index < 3 ? { color: "#c10d0c" } : { color: "#000" };
    },
    getNameStyle(index) {
      return index % 2
        ? { backgroundColor: "#f4f4f4" }
        : { backgroundColor: "#e8e8e8" };
    },
    toPage(name, id) {
      if (this.$route.name != name) {
        this.$router.push({ name: name, params: { id } });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.top-list-item {
  border-right: solid 1px #ccc;
  width: 229px;
  height: 487px;
  .head {
    position: relative;
    display: flex;
    margin-bottom: 20px;
    margin-left: 20px;
    margin-top: 20px;
    .image {
      margin-right: 10px;
      cursor: pointer;
      .pic {
        width: 80px;
        height: 80px;
      }
      .cover {
        display: block;
        background: url(https://s2.music.126.net/style/web2/img/coverall.png);
        background-position: -145px -57px;
        width: 80px;
        height: 80px;
        position: absolute;
        top: 0;
      }
    }
    .op {
      margin-top: 10px;
      .title {
        font-size: 14px;
        color: #333;
        font-weight: 700;
        cursor: pointer;
      }
      .icon {
        display: flex;
        .play {
          cursor: pointer;
          background: url(https://s2.music.126.net/style/web2/img/index/index.png);
          background-position: -267px -205px;
          width: 22px;
          height: 22px;
          display: block;
          margin-top: 10px;
          &:hover {
            background-position: -267px -235px;
          }
        }
        .collect {
          cursor: pointer;
          background: url(https://s2.music.126.net/style/web2/img/index/index.png);
          background-position: -300px -205px;
          width: 22px;
          height: 22px;
          display: block;
          margin-top: 10px;
          margin-left: 10px;
          &:hover {
            background-position: -300px -235px;
          }
        }
      }
    }
  }
  .item {
    display: flex;
    .num {
      width: 35px;
      height: 32px;
      line-height: 32px;
      font-size: 16px;
      margin-left: 20px;
    }
    .name {
      width: 170px;
      height: 32px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
      font-size: 12px;
      line-height: 32px;
      margin-left: -10px;
      border-bottom: solid 1px transparent;
      cursor: pointer;
      &:hover {
        border-bottom: solid 1px #000;
      }
    }
  }
  .more {
    background-color: #e8e8e8;
    .text {
      font-size: 12px;
      line-height: 32px;
      margin-left: 140px;
      display: block;
      cursor: pointer;
    }
  }
}
</style>