<template>
  <div>
    <component v-bind:is="moduleName"></component>
  </div>
</template>
<script>
import BaseHouseAppreciation from "../modules/HouseAppreciation/BaseHouseAppreciation.vue"
export default {
  name: "HouseAppreciation",
  components: { BaseHouseAppreciation },
  data() {
    return {};
  },
  computed: {
    moduleName() {
      return "BaseHouseAppreciation";
    },
  },
};
</script>