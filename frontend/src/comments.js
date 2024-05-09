import Vue from "vue"
import config from "./config"
import axios from "axios";
export default {
    name:"CommentService",
    addComment(data){
        let url=config.COMMENTS_URL
         return axios.post(url,data)
         .then((response)=>Promise.resolve(response.data))
         .catch((error)=>Promise.reject(error))
    }
}