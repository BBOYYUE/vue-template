<template>
  <swiper
    :modules="modules"
    direction="vertical"
    @swiper="onMainSwiper"
    @slideChange="onMainSlideChange"
    @reachEnd="onMainReachEnd"
  >
    <swiper-slide>
      <slot name="first-swiper-fixed"></slot>
      <swiper
        :modules="options"
        @swiper="onFirstSwiper"
        @slideChange="onFirstSlideChange"
        @reachEnd="onFirstReachEnd"
        :controller="{ control: secondSwiper }"
      >
        <swiper-slide
          v-for="(slideContent, index) in firstPageList"
          :key="index"
          :virtualIndex="index"
        >
          <keep-alive>
            <component
              v-if="firstChildComponent"
              :is="firstChildComponent"
              title="123"
              content="123"
              text="123"
              footer="123"
            ></component>
          </keep-alive>
        </swiper-slide>
      </swiper>
    </swiper-slide>
    <swiper-slide>
      <slot name="second-swiper-fixed"></slot>
      <swiper
        :modules="options"
        @swiper="onSecondSwiper"
        @slideChange="onSecondSlideChange"
        @reachEnd="onSecondReachEnd"
      >
        <swiper-slide
          v-for="(slideContent, index) in secondPageList"
          :key="index"
          :virtualIndex="index"
        >
          <keep-alive>
            <component
              v-if="secondChildComponent"
              :is="secondChildComponent"
              title="321"
              content="321"
              text="321"
              footer="321"
            ></component>
          </keep-alive>
        </swiper-slide>
      </swiper>
    </swiper-slide>
  </swiper>
</template>
<script>
import { Controller } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import BaseCard from "../card/BaseCard.vue";
import "swiper/swiper-bundle.min.css";
export default {
  props: [
    "firstPageList",
    "secondPageList",
    "activeIndex",
    "modules",
    "firstChildComponent",
    "secondChildComponent",
  ],
  name: "TwoWayCarousel",
  components: { SwiperSlide, Swiper, BaseCard },
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
    onMainSlideChange() {},
    onMainReachEnd() {},
    onFirstSwiper(swiper) {
      this.firstSwiper = swiper;
    },
    onFirstSlideChange() {
      this.$emit("activeIndexChange", this.firstSwiper.activeIndex);
      this.secondSwiper.slideTo(this.firstSwiper.activeIndex, 0);
    },
    onFirstReachEnd() {},
    onSecondSwiper(swiper) {
      this.secondSwiper = swiper;
    },
    onSecondSlideChange() {
      this.$emit("activeIndexChange", this.secondSwiper.activeIndex);
      this.firstSwiper.slideTo(this.secondSwiper.activeIndex, 0);
    },
    onSecondReachEnd() {},
  },
};
</script>