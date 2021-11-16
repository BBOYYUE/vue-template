<template>
  <div>
    <component v-bind:is="moduleName"></component>
  </div>
</template>
<script>
import BaseLocation from "../modules/PlaneLocation/BaseLocation.vue"
export default {
  name: "PlaneLocation",
  components: { BaseLocation },
  data() {
    return {};
  },
  computed: {
    moduleName() {
      return "BaseLocation";
    },
  },
};
</script>