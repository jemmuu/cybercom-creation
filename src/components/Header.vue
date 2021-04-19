<template>
  <v-app-bar app color="light green">
    <router-link to="/">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://www.logolynx.com/images/logolynx/82/82bf640147099d9a983d53312e6fbbfd.jpeg"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://media-exp1.licdn.com/dms/image/C511BAQF7PfYch2enzA/company-background_10000/0/1586963490836?e=2159024400&v=beta&t=2A8Gy9Rs1ymIVhofIw8vNyjYVDaejGXlrWhEgyvdRoA"
          width="100"
        />
      </div>
    </router-link>
    <div class="menuBtn">
      <v-btn
        text
        height="100%"
        href="/"
        color="white"
        style="font-size: larger"
      >
        Course </v-btn
      ><v-btn
        text
        height="100%"
        color="white"
        href="/myCourse"
        style="font-size: larger"
      >
        My Course
      </v-btn>
      <v-btn
        text
        height="100%"
        color="white"
        href="/team"
        style="font-size: larger"
      >
        Our Team
      </v-btn>
    </div>

    <v-spacer></v-spacer>
    <v-badge
      :value="logInn ?(cartCount === '0' ? '' : cartCount) : null"
      :content="cartCount"
      color="orange"
      overlap
      style="margin-right: 15px"
    >
      <v-btn icon href="/cart"> <v-icon large> mdi-cart </v-icon></v-btn>
    </v-badge>
    <v-text-field
      hide-details
      color="success"
      background-color="white"
      class="shrink"
      prepend-inner-icon="mdi-magnify"
      single-line
      label="Search"
      v-model="search"
      rounded
      filled
      dense
    ></v-text-field>
    <v-btn plain color="white" @click="logout"  v-if="logInn">
      <v-icon>logout</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import EventBus from "../eventBus/eventBus";
import router from "@/router";
export default {
  props: ["cartCount"],
  data() {
    return {
      search: "",
      
      logInn: true,
    };
  },
 
  
  created() {
     this.loginPage = (router.currentRoute.name == "Login") ? true : false;

    if (window.localStorage.getItem("token")== null) {
      this.logInn = false;
    }
    else if(window.localStorage.getItem("token") !== null)
    {
      this.logInn = true;
    }
  },

  watch: {
    cartCount: (newValue) => {
      if (newValue === 0) this.props.cartCount = "";
    },
  
    search: (newValue) => {
      EventBus.$emit("searchedData", newValue);
    },

    
  },
  methods:{
    logout()
    {
      window.localStorage.removeItem('token');
      router.push('/login');
    },
    
  }
};
</script>

<style>
.menuBtn {
  height: 100%;
  margin-left: 30px;
}
</style>