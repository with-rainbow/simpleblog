<template>
  <div>
    <el-header>
      W2H2
      博客
      <!-- <div class="nav">
          <router-link to="/">首页</router-link>
          <el-divider direction="vertical"></el-divider>
          <router-link to="/blogs">博客</router-link>
          <el-divider direction="vertical"></el-divider>
          <router-link to="/charts">图表</router-link>
          <el-divider direction="vertical"></el-divider>
          <router-link to="/about">关于我</router-link>
      </div>-->
      <el-menu
              :default-active="$route.path"
              background-color="#545c6400"
              active-text-color="#22ffff"
              text-color="#999"
              class="el-menu-demo"
              mode="horizontal"
              router
              :collapse-transition="true"
              v-show="switchWindow"
      >
        <el-menu-item index="/" route="/">
          <i class="el-icon-s-home"></i>首页
        </el-menu-item>
        <el-menu-item index="/blogs" route="/blogs">
          <i class="el-icon-notebook-1"></i>博客
        </el-menu-item>
        <el-menu-item index="/charts" route="/charts">
          <i class="el-icon-s-data"></i>图表
        </el-menu-item>
        <el-menu-item index="/about" route="/about">
          <i class="el-icon-info"></i>关于我
        </el-menu-item>
      </el-menu>
    </el-header>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: "1",

            };
        },
        methods: {}
    };
</script>

<style>
  .el-menu {
    display: inline-block;
    right: 0;
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  @media screen and (max-width: 992px) {
    .el-menu {
      display: none;
      right: 0;
      margin: 0;
      padding: 0;
      border: 0;
      box-sizing: border-box;
    }
  }

</style>