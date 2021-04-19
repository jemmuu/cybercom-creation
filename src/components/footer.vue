<template>
  <v-footer
    
    padless
  >
    <v-card
      class="flex success"
      flat
      tile
    >
      <v-card-title class="success center">
        <strong class="subheading">Get connected with us on social networks!</strong>

        

        <v-btn
          v-for="icon in icons"
          :key="icon.icon"
          class="mx-4 "
          dark
          icon
          :href=icon.link
        >
          <v-icon size="24px">
            {{ icon.icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
       @Copyright {{ new Date().getFullYear() }} — <strong>Jemmu Kakadiya</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
data: () => ({
      icons: [
        {icon :'mdi-facebook', link : 'https://www.facebook.com/udemy/'},
        {icon :'mdi-twitter', link : 'https://twitter.com/udemy'},
        {icon :'mdi-linkedin', link:'https://www.linkedin.com/company/udemy/'},
        {icon :'mdi-instagram', link:'https://www.instagram.com/udemy/'},
      ],
    }),
}
</script>

<style scoped>
*{
    width: 100%;
}
.center 
{
    text-align: center;
    justify-content: center;
    color:white;
}
</style>