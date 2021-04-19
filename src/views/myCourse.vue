<template>
  <v-app>
      <div>
          <h1 class="text-center mt-10" v-if='allCourse.length<1'>
              You Did not Purchsed Anything Yet
          </h1>
      </div>
     <v-row dense>
    <v-col v-for="(course) in allCourse" :key="course.id">
        
          <course :course="course" :myCourse="true" />
        </v-col>
     </v-row>
  </v-app>
</template>

<script>
import course from "../components/course";
import router from "@/router";
export default {
    name:'myCourse',
    components:{
        course
    },
  created() {
    let token = window.localStorage.getItem("token");
    
    if (token == null) router.push("/login");
    let temp = window.localStorage.getItem("course");
    
    if (temp === null) temp = JSON.stringify(this.course);

    this.course = JSON.parse(temp);
    for (let i = 0; i < this.course.length; i++) {
      
      if (this.course[i].purchased === true) {
       
        this.allCourse.push(this.course[i]);
      }
    }
  },

  data()
  {
      return{
          course : [],
          allCourse :[]
      }
  }
};
</script>

<style>
</style>