<template>
  <div>
    <swiper
      :modules="modules"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      @reachEnd="onReachEnd"
      effect="fade"
    >
      <swiper-slide
        v-for="(slideContent, index) in pageList"
        :key="index"
        :virtualIndex="index"
      >
        <keep-alive>
          <component
            v-if="childComponent"
            :is="childComponent"
            title="123"
            content="123"
            text="123"
            footer="123"
          ></component>
        </keep-alive>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import * as Module from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import BaseCard from "../card/BaseCard.vue";
import "swiper/swiper-bundle.min.css";
export default {
  props: [
    "pageList",
    "activeIndex",
    "slideDirection",
    "modules",
    "childComponent",
  ],
  components: { SwiperSlide, Swiper, BaseCard },
  name: "Carousel",
  data() {
    return {
      swiper: {},
    };
  },
  created() {},
  computed: {
    options() {
      let options = [];
      for (let item in this.modules) {
        options.push(Module[this.modules[item]]);
      }
      return options;
    },
  },
  methods: {
    onSwiper(swiper) {
      this.swiper = swiper;
    },
    onSlideChange() {
      this.$emit("activeIndexChange", this.swiper.activeIndex);
    },
    onReachEnd() {
      console.log("reachEnd");
    },
  },
};
</script>