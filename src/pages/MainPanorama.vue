<template>
  <div>
    <component v-bind:is="moduleName"></component>
  </div>
</template>
<script>
import BasePanorama from "../modules/MainPanorama/BaseMainPanorama.vue";
export default {
  name: "MainPanoramaPage",
  components: { BasePanorama },
  data() {
    return {};
  },
  computed: {
    moduleName() {
      return "BasePanorama";
    },
  },
};
</script>
<style lang="sass" scoped>
</style>
