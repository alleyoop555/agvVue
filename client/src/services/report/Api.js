import apiRoute from "../ApiRoute";

export default {
    fileList() {
        return apiRoute().get('api/report/filelist')
    },
    fileShow(file) {
        return apiRoute().get(`api/report/fileshow/${file}`)
    },
    deleteFile(file) {
        return apiRoute().delete(`api/report/delete_file/${file}`)
    }
}