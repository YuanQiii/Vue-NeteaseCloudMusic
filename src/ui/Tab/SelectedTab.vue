<!--
 * @Author: your name
 * @Date: 2021-12-27 21:36:40
 * @LastEditTime: 2022-01-25 11:10:40
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\ui\Tab\SelectedTab.vue
-->
<template>
  <div class="selected-tab">
    <div :class="this.active ? 'image3' : 'image1'"></div>
    <div :class="this.active ? 'image4' : 'image2'"></div>
    <div class="text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: "SelectedTab",
  props: {
    text: String,
    active: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.selected-tab {
  display: flex;
  width: 91px;
  height: 27px;
  border: 1px solid #dedede;
  margin-bottom: 10px;
  position: relative;
  cursor: pointer;
  margin-right: 5px;

  .image3 {
    display: block;
    background: url(https://s2.music.126.net/style/web2/img/tab.png);
    background-position: 0 -206px;
    width: 5px;
    height: 27px;
  }
  .image4 {
    display: block;
    background: url(https://s2.music.126.net/style/web2/img/tab.png);
    background-position: -233px -303px;
    width: 234px;
    height: 27px;
    margin-left: -42px;
  }

  .image1 {
    display: block;
    background: url(https://s2.music.126.net/style/web2/img/tab.png);
    background-position: 0 -174px;
    width: 5px;
    height: 27px;
  }
  .image2 {
    display: block;
    background: url(https://s2.music.126.net/style/web2/img/tab.png);
    background-position: -233px -272px;
    width: 234px;
    height: 27px;
    margin-left: -42px;
  }

  &:hover {
    .image1 {
      display: block;
      background: url(https://s2.music.126.net/style/web2/img/tab.png);
      background-position: 0 -142px;
      width: 5px;
      height: 27px;
    }
    .image2 {
      display: block;
      background: url(https://s2.music.126.net/style/web2/img/tab.png);
      background-position: -233px -240px;
      width: 234px;
      height: 27px;
      margin-left: -42px;
    }
  }

  .text {
    position: absolute;
    width: 91px;
    font-size: 12px;
    line-height: 27px;
    color: #333;
    text-align: center;
  }
}
</style>