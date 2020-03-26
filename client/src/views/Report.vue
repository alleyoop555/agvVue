<template>
    <div>
        <FileList v-bind:list="list" />
        <ReportButtons />
    </div>
</template>

<script>
    import api from '../services/report/Api'
    import FileList from "../components/FileList"
    import ReportButtons from "../components/ReportButtons";

    export default {
        name: "Report",
        components: {ReportButtons, FileList},
        data() {
            return {
                list: []
            }
        },
        created: function () {
            api.listFolder()
                .then(res=>{
                    this.list = res.data.list;
                })
                .catch(err=>{
                    console.log(err)
                })

        },
    }
</script>

<style scoped>

</style>