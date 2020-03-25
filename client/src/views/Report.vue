<template>
    <div class="report">
        <h1>This is an report page</h1>
    </div>
</template>

<script>
    import api from '../services/report/Api'

    export default {
        name: "Report",
        data() {
            return {
                list: []
            }
        },
        created: function () {
            api.fileList()
                .then(res=>{
                    console.log(res.data.list)
                })
                .catch(err=>{
                    console.log(err)
                })

        }

    }
</script>

<style scoped>

</style>