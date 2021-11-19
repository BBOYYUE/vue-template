<template>
  <div class="">
    <div
      class="
        rounded-full
        bg-black bg-opacity-70
        fixed
        bottom-2
        w-full
        h-16
        shadow-md
        flex flex-row
        justify-between
      "
    >
      <div class="flex items-center">
        <left class="w-5 h-5" :iconColor="iconColor" />
      </div>
      <div
        class="
          flex flex-row flex-nowrap
          justify-center
          w-80
          sm:w-full
          h-16
          overflow-x-auto
          menu-box
        "
      >
        <div
          v-for="item in pageList"
          :key="item.name"
          @click="goTo(item.path)"
          class="flex items-center"
        >
          <div class="flex flex-col items-center w-16">
            <div>
              <component
                v-bind:is="item.icon"
                :iconColor="iconColor"
                class="w-8 h-8"
              ></component>
            </div>
            <div :class="textColor" class="text-xs">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="flex items-center">
        <right class="w-5 h-5" :iconColor="iconColor" />
      </div>
    </div>
  </div>
</template>
<script>
import setting from "../../components/icon/setting.vue";
import left from "../../components/icon/left.vue";
import right from "../../components/icon/right.vue";
export default {
  props: ["pageList"],
  name: "MainMenu",
  components: { setting, left, right },
  computed: {
    textColor() {
      return "text-white";
    },
    iconColor() {
      return "text-white";
    },
  },
  methods: {
    goTo(path){
      this.$router.push(path);
    }
  }
};
</script>
<style scoped>
.menu-box::-webkit-scrollbar {
    display: none; /* Chrome Safari */
}

.menu-box{
    scrollbar-width: none; /* firefox */
    -ms-overflow-style: none; /* IE 10+ */
}
</style>