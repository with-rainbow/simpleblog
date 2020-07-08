<template>
  <div class="about">
    <Toplink />
    <el-main>About</el-main>
    <el-button plain class="button">按钮</el-button>
    <el-footer>Footer</el-footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Toplink from "@/components/Toplink.vue";
export default {
  name: "About.vue",
  components: {
    Header,
    Toplink
  }
};
</script>
<style>

</style>