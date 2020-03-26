<template>
    <div class="container">
        <div class="align-items-center">
            <form>
                <h2>File List</h2>
                <label>
                    <select class="custom-select custom-select-lg mb-3" v-model="select">
                        <option v-bind:key="file" v-for="file in list">
                            {{ file }}
                        </option>
                    </select>
                </label>
            </form>
        </div>
        <div class="container">
            <div class="align-items-center">
                <button type="button" class="btn btn-primary" v-on:click="fileShow">Show</button>
            </div>
        </div>
        <br>
        <div class="row align-items-center">
            <div class="col">
                <h2>Date Report</h2>
                <span>file: <span>{{ select }}</span></span>
                <div id="date_report" style="width:500px;height:500px;"></div>
            </div>

            <div class="col">
                <h2>Agv Report</h2>
                <span>file: <span>{{ select }}</span></span>
                <div id="agv_report" style="width:500px;height:500px;"></div>
            </div>

        </div>
    </div>
</template>

<script>
    import api from '../services/report/Api'
    import echarts from 'echarts';

    export default {
        name: "FileList",
        props: ['list'],
        data() {
            return {
                select: ''
            }
        },
        methods: {
            fileShow() {
                if (this.select) {
                    api.fileShow(this.select)
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
                }
            }
        }
    }
</script>

<style scoped>

</style>