<!--
 * @Author: your name
 * @Date: 2022-02-12 16:04:50
 * @LastEditTime: 2022-02-13 21:21:18
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\views\foot\Terms.vue
-->
<template>
  <div class="terms">
    <div class="r1">
      <a href="https://st.music.163.com/official-terms/service">服务条款</a>
      <a href="https://st.music.163.com/official-terms/privacy">隐私政策</a>
      <a href="https://st.music.163.com/official-terms/children"
        >儿童隐私政策</a
      >
      <a href="https://music.163.com/st/staticdeal/complaints.html"
        >版权投诉指引</a
      >
      <a href>意见反馈</a>
    </div>
    <div class="r2">
      <a>网易公司版权所有©1997-2020</a>
      <a>杭州乐读科技有限公司运营：</a>
      <a
        href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png"
        >浙网文[2018]3506-263号</a
      >
    </div>
    <div class="r3">
      <a>违法和不良信息举报电话：0571-89853516</a>
      <a>举报邮箱：</a>
      <a href>ncm5990@163.com</a>
    </div>
    <div class="r4">
      <a>粤B2-20090191-18</a>
      <a href="http://www.beian.miit.gov.cn/publish/query/indexFirst.action"
        >工业和信息化部备案管理系统网站</a
      >
      <!-- <img src="../../assets/foot/police.png" alt=""> -->
      <a
        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564"
        >浙公网安备 33010902002564号</a
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "Terms",
};
</script>

<style scoped>
.terms {
  display: flex;
  flex-direction: column;
  font-size: 12px;
  margin-right: 60px;
  text-align: left;
  color: #666666;
  margin-left: -190px;
}
.r1 {
  color: #999999;
  margin-bottom: 10px;
  margin-top: 20px;
}

.r1 > a {
  border-right: solid 1px #999999;
  padding-right: 10px;
  margin-left: 10px;
  line-height: 24px;
}

.r2 > a {
  margin-left: 10px;
}

.r3,
.r4 {
  margin-left: 10px;
  margin-top: 10px;
}

.r4 {
  margin-bottom: 20px;
}
.r4 > a {
  margin-right: 10px;
}

.r4 > img {
  width: 13px;
  height: 13px;
  margin-right: 2px;
}

.r1 > a:link,
.r1 > a:visited {
  color: #999999;
}
a {
  text-decoration: none;
  color: #666666;
}
</style>