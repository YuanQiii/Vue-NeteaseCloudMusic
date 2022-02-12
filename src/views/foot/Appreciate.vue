<!--
 * @Author: your name
 * @Date: 2022-02-12 16:04:50
 * @LastEditTime: 2022-02-12 17:56:12
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\views\foot\Appreciate.vue
-->
<template>
  <div class="footmain">
    <div class="item" v-for="(item, index) in iconList">
      <a class="footitem" :key="index" :href="item['href']" />
      <div class="image" :style="item['position']"></div>
      <span>{{ item["name"] }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Appreciate",
  data() {
    return {
      iconList: [
        {
          name: "amped studio",
          position: { backgroundPosition: "-120px -902px" },
          href: "https://web-amped.music.163.com/",
        },
        {
          name: "用户认证",
          position: { backgroundPosition: "-120px -902px" },
          href: "https://music.163.com/st/userbasic#/auth",
        },
        {
          name: "独立音乐人",
          position: { backgroundPosition: "-120px -902px" },
          href: "https://music.163.com/nmusician/web/index#/",
        },
        {
          name: "赞赏",
          position: { backgroundPosition: "-120px -902px" },
          href: "https://music.163.com/web/reward",
        },
        {
          name: "视频奖励",
          position: { backgroundPosition: "-120px -902px" },
          href: "https://music.163.com/#/login?targetUrl=https%3A%2F%2Fmusic.163.com%2Fuservideo%23%2Fplan",
        },
      ],
    };
  },
};
</script>
<style lang='scss' scoped>
.footmain {
  display: flex;
  font-size: 12px;
  color: #8e8e8e;
  margin: auto 0;
  border-top: none;
  .item {
    .footitem {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 30px;
      .image {
        width: 50px;
        height: 45px;
        cursor: pointer;
        display: block;
        background: url(https://s2.music.126.net/style/web2/img/foot_enter_new.png);
      }
    }
  }
}
</style>