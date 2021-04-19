<template>
 
     <v-carousel
    continuous
    cycle
    interval="8000"
    
    height="400"
    hide-delimiter-background
    show-arrows-on-hover class="slider">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      
        
      reverse-transition="fade-transition"
      transition="fade"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
data () {
      return {
        items: [
          {
            src: 'https://clspt-uploads-prd.s3.us-east-1.amazonaws.com/unsigned/review-of-udemy-7bfde57ef3c89330c839936349c9f8fd.png',
          },
          {
            src: 'https://voluum.com/blog/wp-content/uploads/sites/12/2020/11/V_Best-facebook-ads-courses_Blog_Cover_2020_12_03.jpg',
          },
          {
            src: 'https://www.professionalcontentcreation.com/wp-content/uploads/2016/05/top-10-udemy-courses-for-writers-1.jpg',
          },
          {
            src: 'https://asialocalize.com/wp-content/uploads/2015/10/e-learning-1.jpg',
          },
        ],
      }
    },
}
</script>

<style>

</style>