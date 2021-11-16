<template>
  <swiper
    :modules="modules"
    direction="vertical"
    @swiper="onMainSwiper"
    @slideChange="onMainSlideChange"
    @reachEnd="onMainReachEnd"
  >
    <swiper-slide>
      <swiper
        :modules="options"
        @swiper="onFirstSwiper"
        @slideChange="onFirstSlideChange"
        @reachEnd="onFirstReachEnd"
        :controller="{ control: secondSwiper }"
      >
        <swiper-slide>1-1</swiper-slide>
        <swiper-slide>1-2</swiper-slide>
      </swiper>
    </swiper-slide>
    <swiper-slide>
      <swiper
        :modules="options"
        @swiper="onSecondSwiper"
        @slideChange="onSecondSlideChange"
        @reachEnd="onSecondReachEnd"
      >
        <swiper-slide>2-1</swiper-slide>
        <swiper-slide>2-2</swiper-slide>
      </swiper>
    </swiper-slide>
  </swiper>
</template>
<script>
import { Controller } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.min.css";
export default {
  props: ["pageList", "activeIndex", "slideDirection", "modules"],
  name: "TwoWayCarousel",
  components: { SwiperSlide, Swiper },
  data() {
    return {
      swiper: {},
      firstSwiper: {},
      secondSwiper: {},
    };
  },
  mounted() {},
  computed: {
    options() {
      return [Controller];
    },
  },
  watch: {},
  methods: {
    onMainSwiper(swiper) {
      console.log(swiper, "main");
    },
    onMainSlideChange() {
      console.log("slide change");
    },
    onMainReachEnd() {
      console.log("reachEnd");
    },
    onFirstSwiper(swiper) {
      console.log(swiper, "first");
      this.firstSwiper = swiper;
    },
    onFirstSlideChange() {
      this.secondSwiper.slideTo(this.firstSwiper.activeIndex, 0);
    },
    onFirstReachEnd() {
      console.log("reachEnd");
    },
    onSecondSwiper(swiper) {
      console.log(swiper, "second");
      this.secondSwiper = swiper;
    },
    onSecondSlideChange() {
      this.firstSwiper.slideTo(this.secondSwiper.activeIndex, 0);
    },
    onSecondReachEnd() {
      console.log("reachEnd");
    },
  },
};
</script>