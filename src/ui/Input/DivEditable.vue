<!--
 * @Author: your name
 * @Date: 2022-01-06 17:16:31
 * @LastEditTime: 2022-01-06 17:32:36
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\ui\Input\DivEditable.vue
-->
<template>
  <div
    class="div-editable"
    contenteditable="true"
    v-html="innerText"
    @input="changeText"
    @focus="focusFunc"
    @blur="blurFunc"
  ></div>
</template>

<script>
export default {
  name: "DivEditable",
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      innerText: this.value,
      isChange: true,
    };
  },
  watch: {
    value() {
      if (this.isChange) {
        this.innerText = this.value;
      }
    },
  },
  methods: {
    changeText() {
      this.$emit("input", this.$el.innerHTML);
    },
    focusFunc() {
      this.isChange = false;
      this.$emit("focusFunc");
    },
    blurFunc() {
      this.isChange = true;
      this.$emit("blurFunc");
    },
  },
};
</script>

<style lang="scss">
.div-editable {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  word-break: break-all;
  outline: none;
  user-select: text;
  white-space: pre-wrap;
  text-align: left;
  &[contenteditable="true"] {
    &:empty:before {
      content: attr(placeholder);
      display: block;
      color: #ccc;
    }
  }
}
</style>