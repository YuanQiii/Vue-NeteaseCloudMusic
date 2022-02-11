<!--
 * @Author: your name
 * @Date: 2022-02-11 14:47:30
 * @LastEditTime: 2022-02-11 17:49:39
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
        <div class="title">{{ title }}</div>
        <div class="icon">
          <div class="play"></div>
          <div class="collect"></div>
        </div>
      </div>
    </div>
    <div class="content"></div>
  </div>
</template>

<script>
export default {
  name: "TopListItem",
  props: {
    toplistDetail: Object,
  },
};
</script>

<style lang="scss" scoped>
.top-list-item {
  border-right: solid 1px #ccc;
  width: 189px;
  padding: 20px;
  .head {
    position: relative;
    display: flex;
    .image {
      margin-right: 10px;
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
}
</style>