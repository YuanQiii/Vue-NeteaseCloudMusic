<!--
 * @Author: your name
 * @Date: 2021-12-08 09:52:04
 * @LastEditTime: 2021-12-08 10:56:56
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\ui\Icon\MessageIcon.vue
-->
<template>
  <div class="message-icon">{{ countText }}</div>
</template>

<script>
export default {
  name: "MessageIcon",
  props: {
    count: Number,
  },
  computed: {
    countText() {
      if (this.count > 99) {
        return "99+";
      } else {
        return `${this.count}`;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.message-icon {
  width: 30px;
  height: 17px;
  background-color: #c20c0c;
  border: #242424 solid 1px;
  border-radius: 18px;
  color: #fff;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
}
</style>