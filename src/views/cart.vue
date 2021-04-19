<template>
  <v-app>
    <div>
     
  <v-card
    class="mx-auto mt-5" max-width="900px" outlined v-if='total ===0 '
  >
    <v-img
      class="black--text align-end"
      height="400px"
      src="https://www.dentalproducts.ge/images/bg/shopping_cart_empty.jpg"
    > </v-img>
  </v-card>

    </div>
    
    <cartCourseCard :course=course  v-on:remove='remove($event)'></cartCourseCard>
    <billingCard :total=total v-on:purchaseClick='purchase($event)'></billingCard>
    
  </v-app>
</template>

<script>
import router from '@/router';
import cartCourseCard from "../components/cartCourseCard";
import billingCard from "../components/biilingCard";
export default {
  components:{
cartCourseCard, 
billingCard
  },

  created(){
    let token = window.localStorage.getItem("token");
   
    if (token == null) router.push("/login");
      let temp = window.localStorage.getItem('course');
      this.allCourse = JSON.parse(temp);
      for(let i=0;i<this.allCourse.length;i++)
      {
          
          if(this.allCourse[i].cart === true)
          {
          
          this.total += this.allCourse[i].price;
        this.course.push(this.allCourse[i]);
        
          }
          
      }
      
  },
  data() {
    return {
        allCourse:[],
      course:[],
      total : 0,
   
    };
  },
  methods:{
      remove(id)
      {
          
          for (let i = 0; i < this.allCourse.length; i++) {
              
        if (this.allCourse[i].id === id && this.allCourse[i].cart === true) {
          this.allCourse[i].cart = false;
          
          this.$emit("cartCountReduce");
          window.localStorage.setItem('course',JSON.stringify(this.allCourse));
         router.go()
          

        }
      }
      },
      purchase()
      {
        this.$emit("cartPurchased");
         for (let i = 0; i < this.allCourse.length; i++) {
              
             
        if (this.allCourse[i].cart === true) {
          
          this.allCourse[i].cart = false;
          this.allCourse[i].purchased = true;
          window.localStorage.setItem('course',JSON.stringify(this.allCourse));
          

        }
      }
        
         router.go()
      }
  },
  
};
</script>

<style>
</style>