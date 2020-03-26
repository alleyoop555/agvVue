<template>
    <div class="container">
        <div class="align-items-center">
            <form>
                <h2>Select File</h2>
                <label>
                    <select class="custom-select custom-select-lg mb-3" v-model="select" @change="sendSelect">
                        <option v-bind:key="file" v-for="file in list">
                            {{ file }}
                        </option>
                    </select>
                </label>
            </form>
        </div>
    </div>
</template>

<script>
    import {EventBus} from "../event-bus";

    export default {
        name: "FileList",
        props: ['list'],
        data() {
            return {
                select: ''
            }
        },
        methods: {
            sendSelect() {
                EventBus.$emit('sendSelect', this.select)
            }
        }
    }
</script>

<style scoped>

</style>