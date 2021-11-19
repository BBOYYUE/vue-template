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
    <TwoWayCarousel
      :firstPageList="firstPageList"
      :secondPageList="secondPageList"
      :activeIndex="activeIndex"
      :firstChildComponent="firstChildComponent"
      :secondChildComponent="secondChildComponent"
      @activeIndexChange="activeIndexChange"
    >
      <template v-slot:first-swiper-fixed></template>
      <template v-slot:second-swiper-fixed></template>
    </TwoWayCarousel>
  </div>
</template>
<script>
import TwoWayCarousel from "../../components/carousel/TwoWayCarousel.vue";
import * as MutaionType from "../../store/MutationType";
export default {
  components: { TwoWayCarousel },
  name: "BaseHouseAppreciation",
  data() {
    return {};
  },
  methods: {
    activeIndexChange(val) {
      this.$store.commit({
        type: "HouseAppreciation/" + MutaionType.SET_ACTIVE_INDEX,
        activeIndex: val,
      });
    },
  },
  computed: {
    firstPageList() {
      return this.$store.state.HouseAppreciation.firstPageList;
    },
    secondPageList() {
      return this.$store.state.HouseAppreciation.secondPageList;
    },
    firstChildComponent() {
      return this.$store.state.HouseAppreciation.firstChildComponent;
    },
    secondChildComponent() {
      return this.$store.state.HouseAppreciation.secondChildComponent;
    },
    activePage() {
      return {};
    },
    activeIndex() {
      console.log(this.$store.state.HouseAppreciation.activeIndex)
      return this.$store.state.HouseAppreciation.activeIndex;
    },
  },
};
</script>