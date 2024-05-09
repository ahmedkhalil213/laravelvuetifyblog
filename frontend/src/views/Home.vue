<template>
  <div id="background">
    <NavBar/>
    <v-content fill-height>
  <v-container fluid>
    <v-row>
      <v-col md="4"align="right">
    <SideBar/>
  </v-col>
  <v-col md="8">
    <router-view></router-view>
  </v-col>
  </v-row>
  </v-container>
</v-content>
</div>
</template>
<script>
import NavBar from '@/components/NavBar.vue';
import SideBar from '@/components/SideBar.vue';
export default {
name: "Home",
components:{
  NavBar,
  SideBar
},
  data: () => ({
    //
  }),
};
</script>
<style>
#background{
  background-color: #1e2227;
}
</style>