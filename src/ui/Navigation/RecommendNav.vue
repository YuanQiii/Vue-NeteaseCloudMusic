<!--
 * @Author: your name
 * @Date: 2022-01-25 11:15:39
 * @LastEditTime: 2022-02-13 22:53:43
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\ui\Navigation\RecommendNav.vue
-->
<template>
  <div class="recommend-nav">
    <div class="left">
      <div class="image"></div>
      <div class="title">{{ title }}</div>
      <div class="tab" v-if="tabList.length">
        <div
          class="item"
          v-for="(item, index) in tabList"
          :key="index"
          @click="toPage(item['name'])"
        >
          <span class="name">
            {{ item["name"] }}
          </span>
          <span class="line" v-if="index < tabList.length - 1">|</span>
        </div>
      </div>
    </div>
    <div class="right" v-if="moreUrl">
      <div class="text" @click="toPageMore(moreUrl)">更多</div>
      <div class="image"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    tabList: Array,
    moreUrl: String,
  },
  methods: {
    toPage(category) {
      if (this.$route.name != "PlayList") {
        this.$router.push({
          name: "PlayList",
          params: {
            category,
          },
        });
      }
    },
    toPageMore(url) {
      if (url.includes("/")) {
        if (url.split("/")[1] == "all") {
          let name = url.split("/")[0];
          let category = url.split("/")[1];
          if (this.$route.name != name) {
            this.$router.push({ name, params: { category } });
          }
        } else {
          let name = url.split("/")[0];
          let id = url.split("/")[1];

          if (this.$route.name != name) {
            this.$router.push({ name, params: { id } });
          }
        }
      } else {
        if (this.$route.name != url) {
          this.$router.push({ name: url });
        }
      }
    },
  },
};
</script>

<style <style lang="scss">
.recommend-nav {
  border-bottom: 2px solid #c10d0c;
  width: 689px;
  height: 35px;
  display: flex;
  justify-content: space-between;
  .left {
    display: flex;
    .image {
      display: block;
      background: url(https://s2.music.126.net/style/web2/img/index/index.png);
      background-position: -225px -156px;
      width: 33px;
      height: 33px;
    }
    .title {
      font-size: 20px;
      line-height: 28px;
    }
    .tab {
      display: flex;
      color: #666;
      font-size: 12px;
      margin-left: 20px;
      margin-top: 10px;

      .item {
        .name {
          border-bottom: 1px solid #fff;
          cursor: pointer;
          &:hover {
            border-bottom: 1px solid #666;
          }
        }
        .line {
          margin-left: 10px;
          margin-right: 10px;
        }
      }
    }
  }
  .right {
    display: flex;
    margin-right: 10px;
    margin-top: 10px;
    .text {
      font-size: 12px;
      color: #666;
      cursor: pointer;
    }
    .image {
      display: block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background: url(https://s2.music.126.net/style/web2/img/index/index.png);
      background-position: 0 -240px;
    }
  }
}
</style>

