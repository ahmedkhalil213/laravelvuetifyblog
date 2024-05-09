import Vue from "vue"
import config from "./config"
import axios from "axios";
export default {
    name:"PostService",
    getPosts(){
        let url=config.POSTS_URL
         return axios.get(url)
         .then((response)=>Promise.resolve(response.data))
         .catch((error)=>Promise.reject(error))
    },
    getpost(id){
        let url=config.POSTS_URL+'/'+id
         return axios.get(url)
         .then((response)=>Promise.resolve(response.data))
         .catch((error)=>Promise.reject(error))
    }
}