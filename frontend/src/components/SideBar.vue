<template>
  <div>
   <v-card width="20rem" flat id="themeBackground" align="left">
      <v-img
      class="white--text"
      height="150px"
    
        src="https://picsum.photos/id/11/500/300"
      >
      <v-card-title class="align-end fill-height">Hello World</v-card-title></v-img>
     
      <v-card-text class="white--text body-2 px-0">
        Hi i'm ahmed Khalil i have a software engineering degree i'm here to practice||it has been a while since my full stack internship
      </v-card-text>
      <v-card-actions>
        <a class="twitter-follow-button" href="https://twitter.com/youthcodetech" data-size="large">follow @yourcodetech</a>
      </v-card-actions>
      <v-divider></v-divider>
      <v-card-title class="align-end white--text font-weight-bold">
        FREE-EBOOKS
      </v-card-title>
      <div>
        <v-btn class="ma-1 font-weight-bold" text color="white">
         <v-icon left color="teal">mdi-nodejs</v-icon>
         Nodejs insider
        </v-btn>
      </div>
      <div>
        <v-btn class="ma-1 font-weight-bold" text color="white">
         <v-icon left color="teal">mdi-react</v-icon>
         react native handbook
        </v-btn>
      </div>
      <div>
        <v-btn class="ma-1 font-weight-bold" text color="white">
         <v-icon left color="teal">mdi-vuejs</v-icon>
        vue js handbook
        </v-btn>
      </div>
      <v-divider></v-divider>
      <v-card-title class="align-end white--text font-weight-bold">
        Tags Categories
    </v-card-title>
        <div>
            <v-chip color="red accent-2" label small class="ma-1">
             vue
            </v-chip>
            <v-chip color="yellow" label small class="ma-1">
            javascript
            </v-chip>
            <v-chip color="green" label small class="ma-1">
            node
            </v-chip>
        </div>
      
    </v-card>
  </div>
</template>
<style>
#themeBackground{
    background-color: #1e2227;
}
</style>
