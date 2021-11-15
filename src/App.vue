<template>
  <div class="app">
    <div class="hearder">
      <audio :src="bgmUrl" id="bgm" type="audio/mp3" controls loop></audio>
    </div>
    <div class="content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="footer">
      <menu></menu>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
</style>
