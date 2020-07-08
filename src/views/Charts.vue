<template>
  <div>
    <Toplink/>
    <el-main>
      <el-row :gutter="20">
        <el-col :span="24">
          <el-card class="page-box">
            <el-pagination

                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    background
                    :current-page="currentPage"
                    :page-sizes="[8, 16, 32, 64]"
                    :page-size="pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400">
            </el-pagination>
            <!--            <el-col v-for="o in 8" :md="12" :span="24">-->
            <!--              <el-card>-->
            <!--                <VueECharts/>-->
            <!--              </el-card>-->
            <!--            </el-col>-->
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col v-for="o in pageSize" :md="12" :span="24">
          <el-card>
            <!--            <VCharts/>-->
            <VueECharts/>
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
    import VCharts from "@/components/Ve-Charts.vue";
    import VueECharts from "../components/VueECharts";
    import Vue from "vue";
    export default {
        name: "Charts.vue",
        data() {
            return {
                input: '',
                currentPage: 1,
                pageSize: 8
            }
        },
        components: {
            VueECharts,
            Header,
            Toplink,
            VCharts,

        }, methods: {
            handleSizeChange(val) {
                this.openLoading();
                this.pageSize=val;
            },
            handleCurrentChange(val) {
                this.openLoading();
                this.currentPage=val;
                // console.debug(`当前页: ${val}`);
            }
        }
    };
</script>