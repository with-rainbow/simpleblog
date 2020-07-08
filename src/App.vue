<template>
  <div id="app">
    <!--    <link rel="stylesheet" type="text/css" href="./assets/mystyle.css">-->
    <el-backtop></el-backtop>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
    /*box-sizing: border-box;*/
  }

  .el-main {
    position: relative;
    margin: auto;
    max-width: 1600px;
  }

  body {
    background-color: #5c6370;
  }

  .el-footer {
    text-align: center;
    color: #fff;
    font-size: 33px;
    background-color: #21252b;
  }

  .el-card {
    margin: 0 0 15px;
  }

  /*.blog-list > h4, p, span, a {*/
  /*  margin: 0 0 10px;*/
  /*}*/

  .info-text {
    font-size: .85em;
    color: #999;
    font-family: Arial, sans-serif;
    margin: 5px 0 5px;
  }

  .page-box {
    /*display: inline-block;*/
    text-align: right;
  }


</style>
