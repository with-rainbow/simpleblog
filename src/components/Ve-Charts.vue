<template>
  <ve-bar-chart
          :series="series"
          :tooltip="tooltip"
          :legend="legend"
          :title="title"
  />
</template>

<script>
    // E-Charts
    // import ECharts from 'vue-echarts'
    // import 'echarts/lib/chart/line'
    // import 'echarts/lib/component/polar'


    export default {
        data: function () {
            return {
            }
        },
        components: {
            name: "ECharts",
        },
        created: function () {
            function genData(count) {
                var nameList = [
                    '赵', '钱', '孙', '李', '周', '吴', '郑', '王', '冯', '陈', '褚', '卫', '蒋', '沈', '韩', '杨', '朱', '秦', '尤', '许', '何', '吕', '施', '张', '孔', '曹', '严', '华', '金', '魏', '陶', '姜', '戚', '谢', '邹', '喻', '柏', '水', '窦', '章', '云', '苏', '潘', '葛', '奚', '范', '彭', '郎', '鲁', '韦', '昌', '马', '苗', '凤', '花', '方', '俞', '任', '袁', '柳', '酆', '鲍', '史', '唐', '费', '廉', '岑', '薛', '雷', '贺', '倪', '汤', '滕', '殷', '罗', '毕', '郝', '邬', '安', '常', '乐', '于', '时', '傅', '皮', '卞', '齐', '康', '伍', '余', '元', '卜', '顾', '孟', '平', '黄', '和', '穆', '萧', '尹', '姚', '邵', '湛', '汪', '祁', '毛', '禹', '狄', '米', '贝', '明', '臧', '计', '伏', '成', '戴', '谈', '宋', '茅', '庞', '熊', '纪', '舒', '屈', '项', '祝', '董', '梁', '杜', '阮', '蓝', '闵', '席', '季', '麻', '强', '贾', '路', '娄', '危'
                ];
                var legendData = [];
                var seriesData = [];
                var selected = {};
                for (var i = 0; i < count; i++) {
                    name = Math.random() > 0.65
                        ? makeWord(4, 1) + '·' + makeWord(3, 0)
                        : makeWord(2, 1);
                    legendData.push(name);
                    seriesData.push({
                        name: name,
                        value: Math.round(Math.random() * 100000)
                    });
                    selected[name] = i < 6;
                }

                return {
                    legendData: legendData,
                    seriesData: seriesData,
                    selected: selected
                };

                function makeWord(max, min) {
                    var nameLen = Math.ceil(Math.random() * max + min);
                    var name = [];
                    for (var i = 0; i < nameLen; i++) {
                        name.push(nameList[Math.round(Math.random() * nameList.length - 1)]);
                    }
                    return name.join('');
                }
            }

            let data1=genData(50);
            this.legend = {
                type: 'scroll',
                orient: 'vertical',
                right: 10,
                top: 20,
                bottom: 20,
                data: data1.legendData,
                selected: data1.selected
            }
            this.title = {
                text: "饼图",
                subtext: "子描述",
                left: "center",
                top: "10px",
                textAlign: 'auto'
            }
            this.tooltip = {
                trigger: 'item',
                formatter: '{a} <br/>{b} : ({d}%)'
            }
            this.chartData = {
                dimensions: {
                    name: 'Week',
                    data: ['Spark', 'Java', 'Hadoop', 'Hive', 'Python', 'Hbase', 'Airflow']
                },
                measures: [{
                    name: '频率',
                    data: [256, 767, 1356, 2087, 803, 582, 432]
                }]
            }
            this.chartSettings = {
                roseType: 'radius',
                // top: '30px',
                radius: [30, 110]
            }
            this.series = [
                {
                    name: '姓名',
                    type: 'bar',
                    radius: '55%',
                    center: ['40%', '50%'],
                    data: data1.seriesData,
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }
    }
</script>

<style scoped>
  /**
   * 默认尺寸为 600px×400px，如果想让图表响应尺寸变化，可以像下面这样
   * 把尺寸设为百分比值（同时请记得为容器设置尺寸）。
   */
  .echarts {
    width: 100%;
    height: 100%;
  }
</style>