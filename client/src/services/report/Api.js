import apiRoute from "../ApiRoute";

export default {
    listFolder() {
        return apiRoute().get('api/report/list_file')
    },
    showFile(file) {
        return apiRoute().get(`api/report/show_file/${file}`)
    },
    deleteFile(file) {
        return apiRoute().delete(`api/report/delete_file/${file}`)
    }
}