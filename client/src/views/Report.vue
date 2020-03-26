<template>
    <div class="report">
        <h1>This is a report page</h1>
        <FileList v-bind:list="list" />
    </div>
</template>

<script>
    import api from '../services/report/Api'
    import FileList from "../components/FileList";

    export default {
        name: "Report",
        components: {FileList},
        data() {
            return {
                list: []
            }
        },
        created: function () {
            api.fileList()
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