<template>
    <div class="container">
        <div class="align-items-center">
            <form>
                <h2>File List</h2>
                <select class="custom-select custom-select-lg mb-3">
                    <option selected value="0">Open this select menu</option>
                    <option v-bind:key="file" v-for="file in list">
                        {{ file }}
                    </option>
                </select>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FileList",
        props: ['list']
    }
</script>

<style scoped>

</style>