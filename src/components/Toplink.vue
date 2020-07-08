<template>
  <div id="top-box">
    <div id="bg-box">
      <el-col :span="8" id="icon">W2H2 博客</el-col>
      <el-col :md="16" :span="24" class="hidden-sm-and-down">
        <a v-for="(item, index) in LinkList" v-loading.fullscreen.lock="fullscreenLoading"
           :key="index" @click="triggerPage(item.path)">
          <i :class="item.imageURL"/>
          {{item.name}}
        </a>
      </el-col>
      <el-col :span="16" class="hidden-md-and-up">
        <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        <i class="el-icon-menu"></i>
      </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(item, index) in LinkList" :icon="item.imageURL" :key="index"
                              @click="triggerPage(item.path)">
              {{item.name}}
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </div>
  </div>
</template>

<script>
    export default {
        name: "toplink",

        data() {
            return {
                fullscreenLoading: false,
                switchSize: window.innerWidth,
                LinkList: [
                    {name: "首页", imageURL: "el-icon-house", path: "/"},
                    {
                        name: "博客",
                        imageURL: "el-icon-tickets",
                        path: "/blogs"
                    },
                    {name: "图表", imageURL: "el-icon-data-line", path: "/charts"},
                    // { name: "云相册", imageURL: "md-images", path: "/photos" },
                    {name: "个人信息", imageURL: "el-icon-info", path: "/about"},
                    {
                        name: "Gitee",
                        imageURL: "el-icon-star-off",
                        path: "https://gitee.com/rainbow-w"
                    }
                ]
            };
        },
        methods: {
            triggerPage(path) {
                /*if (path == "/login") {
                  if (localStorage.getItem("username")) {
                    this.$router.push("/logined");
                    return;
                  }
                } else */
                if (path === "https://gitee.com/rainbow-w") {
                    return window.open(path);
                }
                this.openLoading();
                this.$router.push(path);
            },
            openFullScreen1() {
                this.fullscreenLoading = true;
                setTimeout(() => {
                    this.fullscreenLoading = false;
                }, 1000);
            },
        }
    };
</script>
<style scoped>
  /* #E06C75 红*/
  /* #be5046 暗红 */
  /* #ca2 暗黄 */
  /* #e6c07b 黄 */
  /* #d19a66 橙 */
  /* #c678dd 紫 */
  /* #98c379 绿 */
  /* #282c34 黑 */
  /* #abb2bf 灰 */
  /* #818896 灰2 */
  /* #5c6370 灰3 */
  /* #56b6c2 淡蓝 */
  /* #61aeee 淡蓝2 */
  #top-box {
    /*background-image: linear-gradient(141deg, #282c34, #282c34, #5c6370);*/
    background-color: #21252b;
    /*display: flex;*/
    height: 3rem;
    margin: auto;
    box-shadow: 0 4px 4px 0 #222;
  }

  #bg-box {
    background-color: #21252b;
    display: flex;
    height: 3rem;
    align-items: center;
    max-width: 1600px;
    margin: auto;
    width: 100%;
    line-height: 1.5em;
  }

  .hidden-sm-and-down {
    text-align: right;
    padding: 10px;
  }

  .hidden-sm-and-down > a {
    color: #f2f2f2;
    margin: 0 1rem;
    padding: 0.3rem;
    font-size: 13px;
    transition: all 0.5s;
  }

  .hidden-sm-and-down > a:hover {
    background: #222;
    border-radius: 5px;
    color: #98c379;
  }

  .hidden-md-and-up {
    text-align: right;
    padding: 30px;
    color: coral;
  }

  #icon {
    padding: 30px;
    font-size: 25px;
    color: #98c379;
  }

</style>