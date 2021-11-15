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
export default {
  name: "krpano",
  props: ["xmlPath", "options"],
  methods: {
    krpanoReady(krpano) {
      this.$emit("krpanoReady", krpano);
    },
  },
  mounted() {
    embedpano({
      swf: "./krpano/tour.swf",
      xml: "./krpano/tour.xml",
      target: "pano",
      html5: "auto",
      mobilescale: 1.0,
      passQueryParameters: true,
      initvars:{xmlPath},
      onready: this.krpanoReady,
      consolelog: true
    });
  },
};
</script>
<style lang="sss" scoped>
</style>