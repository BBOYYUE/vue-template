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
        <img :src="slideContent.houseTypeImg" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import * as Module from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.min.css";
export default {
  props: ["pageList", "activeIndex", "slideDirection", "modules"],
  components: { SwiperSlide, Swiper },
  name: "Carousel",
  data() {
    return {
      swiper: {},
    };
  },
  created() {},
  computed: {
    options(){
      let options = [];
      for(let item in this.modules){
        options.push(Module[this.modules[item]])
      }
      return options;
    }
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },
    onReachEnd() {
      console.log("reachEnd");
    },
  },
};
</script>