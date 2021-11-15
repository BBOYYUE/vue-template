<!--
    基础版的大场景模块
    需要获取的状态信息有:
    1. xml 地址,
    2. tile 地址
    3. 全景图的数量 
    4. 全景图的名称
    5. 全景图的配置信息
    6. 当前的场景名称
    7. 全景图列表
    8. 缩略图的地址
-->
<template>
    <krpano 
        :xmlPath="xmlPath" 
        :options="options" 
        @krpanoReady="krpanoReady"
    ><krpano>
</template>
<script>
import krpano from "../../components/krpano/krpano.vue";
export default {
  components: { krpano },
  name: "BaseMainPanorama",
  data: {
    krpanoImpl: undefined,
  },
  computed: {
    xmlPath() {
      return this.$store.state.MainPanorama.xmlPath[this.activeName];
    },
    tilePath() {
      return this.$store.state.MainPanorama.tilePath[this.activeName];
    },
    thumbPath() {
      return this.$store.state.MainPanorama.thumbPath[this.activeName];
    },
    options() {
      return this.$store.state.MainPanorama.options[this.activeName];
    },
    activeName() {
      return this.$store.state.MainPanorama.activeName;
    },
    panoramaList() {
      return this.$store.state.MainPanorama.panoramaList;
    },
    total() {
      return this.$store.state.MainPanorama.total;
    },
  },
  methods: {
    krpanoReady(krpano) {
      this.krpanoImpl = krpano;
      console.log("krpano 加载完成");
    },
  },
  watch: {
    krpanoImpl(val) {
      console.log("krpanoImpl 发生了变化!");
    },
  },
};
</script>
<style lang="sss" scoped>
</style>