<!--
 * @Author: your name
 * @Date: 2021-12-02 10:08:47
 * @LastEditTime: 2021-12-02 16:37:53
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\components\control\CodeInput.vue
-->
<template>
  <div class="code-input" @keydown.delete="deleteValue">
    <div :class="_elementIsActive(!value1, false, 'word')">
      <input
        type="text"
        class="input"
        maxlength="1"
        v-model="value1"
        ref="codeInput1"
        autofocus="true"
      />
    </div>
    <div :class="_elementIsActive(!value2, false, 'word')">
      <input
        type="text"
        class="input"
        maxlength="1"
        v-model="value2"
        ref="codeInput2"
      />
    </div>
    <div :class="_elementIsActive(!value3, false, 'word')">
      <input
        type="text"
        class="input"
        maxlength="1"
        v-model="value3"
        ref="codeInput3"
      />
    </div>
    <div :class="_elementIsActive(!value4, false, 'word')">
      <input
        type="text"
        class="input"
        maxlength="1"
        v-model="value4"
        ref="codeInput4"
      />
    </div>
  </div>
</template>

<script>
import { elementIsActive } from "@/utils/elementIsActive.js";

export default {
  name: "CodeInput",
  data() {
    return {
      value1: "",
      value2: "",
      value3: "",
      value4: "",
    };
  },
  watch: {
    value1(newValue) {
      if (newValue) {
        getCaptcha();
        this.$refs.codeInput2.focus();
      }
    },
    value2(newValue) {
      if (newValue) {
        getCaptcha();
        this.$refs.codeInput3.focus();
      }
    },
    value3(newValue) {
      if (newValue) {
        getCaptcha();
        this.$refs.codeInput4.focus();
      }
    },
    value4(newValue) {
      if (newValue) {
        getCaptcha();
        this.$refs.codeInput4.blur();
      }
    },
  },

  methods: {
    _elementIsActive(current, self, origin) {
      return elementIsActive(current, self, origin);
    },
    getCaptcha() {
      let str = `${this.value1}${this.value2}${this.value3}${this.value4}`;
      if (str.length == 4) {
        this.$emit("getCaptcha", str);
      }
    },
    deleteValue() {
      if (!this.value4 && this.value3) {
        this.value3 = "";
        this.$refs.codeInput3.focus();
      } else if (!this.value3 && this.value2) {
        this.value2 = "";
        this.$refs.codeInput2.focus();
      } else if (!this.value2 && this.value1) {
        this.value1 = "";
        this.$refs.codeInput1.focus();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.code-input {
  display: flex;

  .word {
    width: 50px;
    height: 30px;
    position: relative;
    padding: 6px;
    margin-left: -6px;
    &::after {
      background-color: rgba(0, 0, 0, 0.1);
      content: "";
      height: 2px;
      width: 50px;
      position: absolute;
      bottom: 0px;
    }

    &::before {
      background-color: #b82712;
      content: "";
      height: 2px;
      width: 0px;
      position: absolute;
      bottom: 0px;
      transition-duration: 0.2s;
      transition-timing-function: ease-in-out;
    }

    .input {
      color: #333;
      display: inline-block;
      font-size: 24px;
      line-height: 19px;
      border: none;
      outline: none;
      margin-left: 17px;
      width: 50px;
    }
  }

  .active {
    &::before {
      transition-duration: 0.2s;
      transition-timing-function: ease-in-out;
      width: 50px;
    }
  }
}
</style>