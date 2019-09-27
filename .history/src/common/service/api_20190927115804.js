import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
// import JwtService from "@/common/service/jwt";
//import { API } from "@/common/config";    后端url

const ApiService = {
    init() {
        Vue.use(VueAxios, axios)
        //this.setHeader()

    },
    //每次发送请求时 把获得的token放在请求头里
    // setHeader() {
    //     Vue.axios.defaults.headers.common[
    //         "Authorization"
    //     ] = `Token ${JwtService.getToken()}`;
    // },

    //    封装axios

    get(resource) {
        return Vue.axios.get(resource).catch(error => {
            throw new Error(`[RWV] ApiService ${error}`);
        });
    },

    post(resource, params) {
        return Vue.axios.post(`${resource}`, params);
    },

    patch(resource, params) {
        return Vue.axios.patch(resource, params);
    },

    put(resource, params) {
        return Vue.axios.put(resource, params);
    },

    delete(resource) {
        return Vue.axios.delete(resource).catch(error => {
            throw new Error(`[RWV] ApiService ${error}`);
        });
    }
};

export default ApiService;

export const ResultService = {
    getFirstAnswer(params) {
        return ApiService.post(`answer`, params)
    },

    getOldAnswer() {
        return ApiService.post(`answered`)
    }
}



