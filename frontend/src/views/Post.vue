<template>
  <v-card id="theme" class="my-1" flat>
    <v-card-title class="textTitle white--text">
      {{ post.title }}
    </v-card-title>
    <v-card-text class="subTtile white--text mt-2">
      {{ post.sub_content }}
    </v-card-text>
    <v-card-title class="font-weight-bold body2 white--text mt-3">
      Posted on
      <p></p>
      <span class="cyan--text ml-2">{{
        post.created_at | moment("Do MM YYYY")
      }}</span>
      <p></p>
      , last updated
      <p></p>
      <span class="cyan--text ml-2">{{
        post.updated_at | moment("Do MM YYYY")
      }}</span>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text class="white--text">
      {{ post.content }}
    </v-card-text>
    <v-card-actions>
      <v-icon class="mr-1" color="cyan lighten-3" small>mdi-eye</v-icon>
      <span class="body-2 mr-2 white--text">{{ post.views }}</span>
      <v-speed-dial
        v-model="post.share"
        left
        direction="right"
        open-on-hover
        :transition="transition"
        disabled="false"
      >
        <template v-slot:activator>
          <v-btn color="blue darken-2" dark fab x-small>
            <v-icon v-if="!post.share">mdi-close</v-icon>
            <v-icon v-else>mdi-share-outline</v-icon>
          </v-btn>
        </template>
        <v-btn fab dark x-small color="primary">
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
        <v-btn fab dark x-small color="light-blue darken-2">
          <v-icon>mdi-twitter</v-icon>
        </v-btn>
        <v-btn fab dark x-small color="teal accent-3">
          <v-icon>mdi-whatsapp</v-icon>
        </v-btn>
      </v-speed-dial>

      <v-spacer></v-spacer>
      <div align="right">
        <router-link to="/">
          <v-btn text color="primary">
            <v-icon left dark x-small> mdi-comment-plus-outline </v-icon>
            go back home
          </v-btn>
        </router-link>
      </div>
    </v-card-actions>
    <div class="mt-5">
      <span>
        <v-bottom-sheet v-model="sheet" inset scrollable max-width="50%">
          <template v-slot:activator="{ on }">
            <v-btn color="orange" dark v-on="on">
              <v-icon left dark x-small>mdi-comment-plus-outline</v-icon>
              Post Comment
            </v-btn>
          </template>
          <v-sheet style="height: 320px" class="px-4 py-4">
            <v-form ref="commentsForm" v-model="valid" lazy-validation>
              <v-text-field
                v-model="commentsForm.name"
                :counter="15"
                label="First name"
                required
                :rules="rules.name"
              >
              </v-text-field>
              <v-textarea
                v-model="commentsForm.comment"
                label="Comment"
                autofocus
                auto-grow
                :rules="rules.comment"
              >
              </v-textarea>
              <br />
              <v-btn
                color="deep-purple accent-4"
                dark
                black
                @click="postComment"
                :loading="btnLoading"
              >
                Post
              </v-btn>
            </v-form>
          </v-sheet>
        </v-bottom-sheet>
      </span>
      <span style="float: right" class="white--text mr-2">{{!checkComments?0: post.comments.length}} comments</span>
      <br/>
      <div v-if="checkComments">
        <v-timeline dense>
    <v-timeline-item v-for="(comment, index) in post.comments" :key="index">
      <template v-slot:icon>
        <v-avatar color="pink">
          <span class="white--text headline">
            {{ comment.alphabet }} <!-- Assuming each comment has an 'author' property -->
          </span>
        </v-avatar>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="headline">
          {{ comment.name }} <!-- Displaying author's name as title -->
        </v-card-title>
        <v-card-text>
          {{ comment.comment }} <!-- Assuming each comment has a 'text' property for the comment content -->
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</div>
     <div v-else style="text-align: center;" class="white--text">
        NoComments
     </div>
    </div>
  </v-card>
</template>
<script>
import PostService from "@/posts.js";
import CommentService from "@/comments.js"
export default {
  name: "Post",
  data: () => ({
    valid: true,
    btnLoading: false,
    transition: "slide-y-reverse-transition",
    post: {}, // Ensure post is defined here
    sheet: false, // Define sheet to control the bottom sheet visibility
    showShareDialog: false,
    commentsForm: {
      name: "",
      comment: "",
      alphabet:"",
      post_id:"",
    },
    rules: {
      name: [
        (v) => !!v || "name field is required",
        (v) => v.length < 15 || "name should be less than 15 characters",
      ],
      comment: [(v) => !!v || "comment field is required"],
    },
    comments:[]
  }),
  created() {
    this.getPost(this.$route.query.id);
  },
  computed:{
    checkComments:function(){
      let c=this.post.comments
      return c.length>0
    }
  },
  methods: {
    getPost(id) {
      PostService.getpost(id)
        .then((response) => {
          this.post = response.post;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    postComment(){
      let self=this
      this.btnLoading=true
      if(this.$refs.commentsForm.validate()){
        let nameStr=self.commentsForm.name
        let character=nameStr.charAt(0)
        self.commentsForm.alphabet=character
        self.commentsForm.post_id=self.post.id
        CommentService.addComment(this.commentsForm)
        .then((response) => {
          self.finish()
          this.getPost(this.$route.query.id)
        })
        .catch((error) => {
          console.log(error);
        });
      }
     
    },
    finish(){
        this.btnLoading=false
        
      }
  },
};
</script>
<style>
#theme {
  background-color: #1e2227;
}
</style>
