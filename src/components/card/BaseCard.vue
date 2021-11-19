<!--
    一个基础版的card组件
    包含了 title content text footer
-->
<template>
  <div>
    <div class="title">{{ title }}</div>
    <div class="content">{{ content }}</div>
    <div class="text">{{ text }}</div>
    <div class="footer">{{ footer }}</div>
  </div>
</template>
<script>
export default {
  props: ["title", "content", "text", "footer"],
  name: "BaseCard"
};
</script>