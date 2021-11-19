<template>
    <div>
        <ThumbCard v-for="item in productList" :key="item.uuid"/>
    </div>
</template>
<script>
import ThumbCard from "../../../components/card/ThumbCard.vue";
export default {
    name: "BaseProductList",
    components: {ThumbCard},
    computed:{
        productList(){
            return {}
        }
    }
}
</script>