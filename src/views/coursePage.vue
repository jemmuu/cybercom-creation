<template>
  <v-app>
      
    <v-alert
      :value="datNotFound"
      text
      prominent
      width="600"
      type="error"
      icon="mdi-cloud-alert"
      class="mx-auto mt-4"
    >
      something went wrong
    </v-alert>
    <v-card
      
      :loading="false"
      class="mx-auto my-12"
      width="1000"
      outlined
      style="border:none"
      
    >
      <v-img height="300" :src="course.srcPic" style="border:lightgreen 3px solid">
           
          
        </v-img
      >
<v-card-title>
             
        <span class='success--text' >
          <h1>{{ course.title }}</h1>
        </span></v-card-title
      >
      
      

      <v-card-text>
        <v-row align="center" class="mx-auto"> By {{ course.author }}</v-row>
        <v-row align="center" class="mx-auto">
          <v-rating
            :value="course.rating"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>

          <div class="grey--text ml-4">
            {{ course.rating }}
          </div>
        </v-row>

        <div class="my-4 subtitle-1">$ {{ course.price }}</div>

        <div>{{ course.summary }}</div>
      </v-card-text>
      

          <v-card-text>
            <ul>
              <li v-for="info in course.moreInfo" :key="info">{{ info }}</li>
            </ul>
          </v-card-text>
       
     
    </v-card>
  </v-app>
</template>

<script>
import router from '@/router';
export default {
  created() {
    let token = window.localStorage.getItem("token");
   
    if (token == null) router.push("/login");
    let temp = window.localStorage.getItem("course");
    
    if (temp === null) {
      this.datNotFound = true;
      setTimeout(()=>{
      this.datNotFound=false;
      router.push("/myCourse");
    },3000);
      
    }

    let course = JSON.parse(temp);
    for (let i = 0; i < course.length; i++) {
      let id = this.$route.params.id;
      
      
      if (course[i].id == id ) {
         
            this.course = course[i];
            
        
      }
    }
  },

  data() {
    return {
      datNotFound: false,
      course : {}
    };
  },
};
</script>

<style>
</style>