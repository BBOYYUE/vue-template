<template>
  <div class="app container mx-auto">
    <div class="hearder">
      <!-- <audio :src="bgmUrl" id="bgm" type="audio/mp3" controls loop></audio> -->
    </div>
    <div class="content">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
    <div class="footer">
      <MainMenu :pageList="pageList" />
    </div>
  </div>
</template>

<script>
import { SET_PROJECT_UDID } from "./store/MutationType";
import MainMenu from "./components/menu/MainMenu.vue";
export default {
  name: "App",
  components: { MainMenu },
  computed: {
    urlUdid() {
      return this.$route.params.udid;
    },
    pageList() {
      return this.$store.state.pageList;
    },
  },
  mounted() {},
  created() {
    // watch 路由的参数，以便再次获取数据
  },
  methods: {
    setUdid(udid) {
      this.$store.commit({ type: SET_PROJECT_UDID, udid });
    },
  },
  watchs: {
    urlUdid(udid) {
      this.setUdid(udid);
    },
  },
};
</script>

<style>

</style>
