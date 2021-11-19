<!--
    一个带缩略图和标题的catd
    包含了 title content text footer
-->
<template>
  <div>
    <div class="bg">
      <img :src="thumbPath" alt="" />
    </div>
    <div class="title">{{ title }}</div>
  </div>
</template>
<script>
export default {
  props: ["title", "thumbPath"],
  name: "ThumbCard",
};
</script>