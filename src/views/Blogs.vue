<template>
  <div>
    <Toplink/>
    <el-main>
      <el-row :gutter="20">
        <el-col :md="14" :span="24">
          <el-card class="blog-list">
            <div v-for="o in 16">
              <el-link :underline="false" href="">
                <h4>更新Github模板</h4>
              </el-link>
              <p class="info-text"><a>Rainb</a> 提交于2020年7月6日01:18:55</p>
              <el-link :underline="false" href="">
                <p>Redis是一个开源的使用ANSI C语言编写、支持网络、可基于内存亦可持久化的日志型、Key-Value数据库，并提供多种语言的API。本篇文章，主</p>
                <el-divider/>
              </el-link>
            </div>
          </el-card>
        </el-col>
        <el-col :md="10" :span="24">
          <el-card v-for="o in 4" class="box-card">
            <div slot="header">
              <h4>最热文章</h4>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
              {{'文章列表 ' + o }}
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
    <el-footer>Footer</el-footer>
  </div>
</template>
<script>
    import Header from "@/components/Header.vue";
    import Toplink from "@/components/Toplink.vue";

    export default {
        name: "Blogs",
        components: {
            Header,
            Toplink
        }
    };
</script>