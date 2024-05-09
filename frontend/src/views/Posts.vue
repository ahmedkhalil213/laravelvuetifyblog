<template>
  <div style="max-height: 100vh">
    <v-card class="my-1" flat id="theme" v-for="(Post,index) in Posts" :key="index" @click="ShowSinglePost(Post)">
      <div class="d-flex justify-between" >
        <div>
          <v-card-title class="textTitle white--text"
            >{{Post.title}}</v-card-title
          >
          <v-card-text class="subTitle white--text mt-2">
           {{ Post.sub_content }}
          </v-card-text>
          <v-card-actions>
            <v-icon class="mr-1" color="cyan lighten-3" small>mdi-eye</v-icon>
            <span class="body-2 mr-2 white--text">{{Post.views}}</span>
            <span class="mr-1">.</span>
            <v-icon class="mr-1" color="blue-grey lighten-5" small >mdi-timer</v-icon>
            <span class="body-2 white--text">{{ Post.updated_at | moment("from", "now", true) }} </span>
            <v-spacer></v-spacer>
          </v-card-actions>
        </div>
        <div class="flex-grow-1 flex-shrink-0" >
          <v-card-title class="white--text" style="margin-left: 12rem;">{{ Post.created_at | moment("Do MM YYYY")}}</v-card-title>
          <div class="text-center mt-3">
          <v-chip color="yellow" > {{Post.category.name}} </v-chip>
        </div>
        </div>
       
      </div>
    </v-card>
  </div>
</template>
<script>
import PostService from "@/posts.js"
export default {
name: "Posts",
components:{
},
  data(){
   return{
    Posts:[]
}
  },
  created(){
   this.getPosts()

  },
  methods:{
    getPosts(){
        PostService.getPosts()
        .then((response)=>{
            this.Posts=response.posts
        })
        .catch((error)=>{
          console.log(error)
        })
       
    },
 
    ShowSinglePost(Post){
        this.$router.push({path:"/post",query:{id:Post.id,title:Post.title}})
    }

  }
};
</script>
<style>
#theme {
  background-color: #1e2227;
}
#theme:hover {
  background: #282c34;
  cursor: pointer;
}
</style>
