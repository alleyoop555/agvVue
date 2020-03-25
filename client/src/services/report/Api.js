import apiRoute from "../ApiRoute";

export default {
    fileList() {
        return apiRoute().get('api/report/filelist')
    }
}