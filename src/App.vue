<template>
  <v-app>
    <Header :cartCount ='cartCount' :key="$route.fullPath" />
    <v-main>
    <router-view  v-on:cartCount='cartCountPlus' v-on:cartPurchased="cartPurchased"  v-on:cartCountReduce='cartCountMinus' />
    </v-main>
    <v-footer>
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
//import router from "@/router";
import Header from './components/Header'
import Footer from './components/footer'

export default {
  name: 'App',

  components: {
    
     Header,
     Footer
  },

  data: () => ({
    cartCount : 0,
    
  }),

  methods:
  {
    cartCountPlus: function()
    {
      this.cartCount++;
      
    },
    cartCountMinus: function()
    {
      this.cartCount--;
      
      
    },
    cartPurchased: function()
    {
      this.cartCount = '0';
    }
  },
  watch:
  {
    cartCount :(newValue)=> {
      window.localStorage.setItem('cartCount', newValue );
    }
   
  },
  created()
  {
    if(window.localStorage.getItem('cartCount'))
    this.cartCount = window.localStorage.getItem('cartCount');
  }
};
</script>

<style scoped>

</style>