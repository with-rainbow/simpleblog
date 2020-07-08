<template>
  <div>
    <div class="cover">
      <h1>W2H2博客</h1>
      <el-col class="menu" :span="24">
        <a v-for="(item, index) in LinkList" :key="index" @click="triggerPage(item.path)">
          <i :class="item.imageURL"/>
          {{item.name}}
        </a>
      </el-col>
    </div>

  </div>
</template>

<script>
    import Toplink from "./Toplink";

    export default {
        name: "Cover",
        components: {Toplink},
        data() {
            return {
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
            }
        }
    }
</script>

<style scoped>
  .cover {
    width: 100%;
    height: 100vh;
    /*top: 30px;*/
    color: #282c34;
    background-image: url("../assets/bg-img.jpg");
    background-position: center;
    background-size: cover;
    text-align: center;

    transition: all 0.5s;
    /*filter: blur(1px);*/
    /*opacity: .9;*/
  }

  .cover > h1 {
    position: absolute;
    top: 30%;
    left: 50%;
    font-size: 6em;
    color: white;
    text-shadow: 5px 5px 5px #000;
    transform: translate(-50%, -50%);
  }

  /*.cover::before {*/
  /*  content: '';*/
  /*  width: 100%;*/
  /*  height: 100%;*/
  /*  position: absolute;*/
  /*  left: 0;*/
  /*  background: inherit;*/
  /*  filter: blur(3px);*/
  /*  opacity: .5;*/
  /*}*/

  .menu{
    /*display: inline-flex;*/
    position: absolute;
    margin: auto;
    top: 36%;
    text-align: center;
    transition: all 0.5s;
  }

  .menu > a {
    line-height: 1.5;
    color: #f2f2f2;
    margin: 0 1rem;
    padding: 0.3rem;
    font-size: 13px;
    transition: all 0.5s;
    text-shadow: 0 2px 2px #000;
  }

  .menu > a:hover {
    background: #222;
    border-radius: 5px;
    color: #98c379;
  }
</style>