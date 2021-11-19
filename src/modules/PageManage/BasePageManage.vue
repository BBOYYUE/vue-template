<template>
  <div class="m-3">
    <div>
      <div class="text-gray-500 text-lg font-semibold">当前产品:</div>
      <div>
        <ThumbCard />
      </div>
    </div>
    <div>
      <div class="text-gray-500 text-lg font-semibold">产品列表:</div>
      <div>
        <BaseProductList @toggleProduct="toggleProduct" />
      </div>
    </div>
  </div>
</template>
<script>
import ThumbCard from "../../components/card/ThumbCard.vue";
import BaseProductList from "./ProductList/BaseProductList.vue";
export default {
  components: { ThumbCard, BaseProductList },
  name: "PageManage",
  methods: {
    toggleProduct() {},
  },
};
</script>