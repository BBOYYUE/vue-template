<!-- 
    基础版的二维区位模块
    需要获取的状态信息有:
    1. 页面列表
    2. 当前页面的切图列表
    3. 页面数量
    4. 当前页码
    5. 滑动方向
-->
<template>
  <div>
    <!-- 需要轮播的图片放进来 -->
    <Carousel
      :pageList="pageList"
      :activeIndex="activeIndex"
      :slideDirection="slideDirection"
    ></Carousel>
  </div>
</template>
<script>
import Carousel from '../../components/carousel/Carousel.vue'
export default {
  components: { Carousel },
  name: "BaseLocation",
  data() {
    return {};
  },
  computed: {
    pageList() {
        return this.$store.state.PlaneLoction.pageList;
    },
    activePage() {
        return this.$store.state.PlaneLoction.activePage;
    },
    activeIndex() {
        return this.$store.state.PlaneLoction.activeIndex;
    },
    slideDirection() {
        return this.$store.state.PlaneLoction.slideDirection;
    },
  }
};
</script>