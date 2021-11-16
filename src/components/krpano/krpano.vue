<!-- 
    krpano 组件, 负责krpano的展示
-->

<template>
  <div
    id="pano"
    style="
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      overflow: hidden;
    "
  ></div>
</template>
<script>
/* eslint-disable */
export default {
  name: "Krpano",
  props: ["xmlPath", "options"],
  methods: {
    krpanoReady(krpano) {
      this.$emit("krpanoReady", krpano);
    },
  },
  mounted() {
    console.log(this.xmlPath)
    embedpano({
      swf: "./krpano/tour.swf",
      xml: "./krpano/tour.xml",
      target: "pano",
      html5: "auto",
      mobilescale: 1.0,
      passQueryParameters: true,
      initvars: { xmlPath: this.xmlPath },
      onready: this.krpanoReady,
      consolelog: true,
    });
  },
};
</script>
<style lang="sss" scoped>
</style>