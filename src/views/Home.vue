<template>
  <div class="home">
    <!--    <Toplink/>-->
    <Cover/>

    <el-footer>Footer</el-footer>
  </div>
</template>

<script>
    // @ is an alias to /src
    import BackupTop from "@/components/BackupTop.vue";
    import Toplink from "@/components/Toplink.vue";
    import Cover from "@/components/Cover.vue";

    export default {
        name: "Home",
        components: {
            BackupTop,
            Toplink,
            Cover
        }
    };
</script>

<style>

</style>
