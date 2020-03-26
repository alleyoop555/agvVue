<template>
    <div class="container">
        <div class="align-items-center">
            <button type="button" class="btn btn-primary mr-2" @click="showFile">Show</button>

            <button type="button" class="btn btn-primary" @click="deleteFile">Delete</button>
        </div>
        <br>
        <div class="row align-items-center" v-show="show">
            <div class="col">
                <h2>Date Report</h2>
                <span>file: <span>{{ filename }}</span></span>
                <div id="date_report" style="width:500px;height:500px;"></div>
            </div>

            <div class="col">
                <h2>Agv Report</h2>
                <span>file: <span>{{ filename }}</span></span>
                <div id="agv_report" style="width:500px;height:500px;"></div>
            </div>

        </div>
    </div>
</template>

<script>
    import {EventBus} from "../event-bus";
    import api from "../services/report/Api";
    import echarts from "echarts";

    let file;
    EventBus.$on('sendSelect', select => {
        file = select;
    });

    export default {
        name: "ReportButtons",
        data() {
            return {
                filename: '',
                show: false
            }
        },
        methods: {
            showFile() {
                api.showFile(file)
                    .then(res=>{
                        const obj = res.data;
                        let myChart = echarts.init(document.getElementById('date_report'));
                        let option = {
                            legend: {},
                            tooltip: {},
                            dataset: {
                                dimensions: obj.dimensions,
                                source: obj.source,
                            },
                            xAxis: {type: 'category'},
                            yAxis: {},
                            series: obj.dateSeries
                        };
                        myChart.setOption(option);

                        myChart = echarts.init(document.getElementById('agv_report'));
                        option = {
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {
                                    type: 'shadow'
                                }
                            },
                            legend: {data: obj.allStatus},
                            grid: {
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                            xAxis: [
                                {
                                    type: 'category',
                                    data: obj.allAgv,
                                }
                            ],
                            yAxis: [{type: 'value'}],
                            series: obj.agvSeries
                        };
                        myChart.setOption(option);
                    })
                    .catch(err=>{
                        console.log(err)
                    })
                    .finally(()=>{
                        this.filename = file;
                        this.show = true;
                    })
            },
            deleteFile() {
                api.deleteFile(file)
                    .then(res=>{
                        console.log(res)
                    })
                    .catch(err=>{
                        console.log(err)
                    })
            }
        }
    }
</script>

<style scoped>

</style>