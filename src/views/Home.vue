<template>
  <div>
    <slider />
    <v-container>
      <v-alert
        icon="mdi-shield-lock-outline"
        prominent
        text
        type="info"
        max-width="600"
        class="mx-auto"
        :value="alert"
      >
        Please Purchase Course to open full Course
      </v-alert>
      <v-row dense>
        <v-col v-for="course in searchFilter" :key="course.id">
          <course
            :course="course"
            v-on:addToCart="addToCartUpdate($event)"
            v-on:alert="alertTogle"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import course from "../components/course";
import slider from "../components/slider";
import EventBus from "../eventBus/eventBus";
import router from "@/router";

export default {
  name: "Home",
  created() {
    let token = window.localStorage.getItem("token");
    
    
    if (token == null) router.push("/login");

    EventBus.$on("searchedData", function (searchData) {
      this.searchData = searchData;
      
    });
    let temp = window.localStorage.getItem("course");

    if (temp === null) temp = JSON.stringify(this.course);

    this.course = JSON.parse(temp);
    for (let i = 0; i < this.course.length; i++) {
      if (this.course[i].purchased === "false") {
        this.allCourse.push(this.course[i]);
      }
    }
  },
  components: {
    course,
    slider,
  },
  methods: {
    addToCartUpdate(id) {
      let temp = window.localStorage.getItem("course");
      
      if (temp === null) temp = JSON.stringify(this.course);

      this.course = JSON.parse(temp);

      for (let i = 0; i < this.course.length; i++) {
        if (this.course[i].id === id) {
          this.course[i].cart = true;
          this.$emit("cartCount");
          window.localStorage.setItem("course", JSON.stringify(this.course));
        }
      }
    },
    alertTogle() {
      this.alert = true;
      setTimeout(() => {
        this.alert = false;
      }, 3000);
    },
  },
  computed: {
    searchFilter: function () {
      
      if (this.search !== "") {
        return this.allCourse.filter((course) => {
          return course.title.match(this.searchData);
        });
      }
      return this.allCourse;
    },
  },
  watch: {
    // searchData: (newValue) => {
     
    //   this.searchFilter;
    // },
  },
  data() {
    return {
      cartItem: 0,
      alert: false,
      allCourse: [],
      searchData: "",
      course: [
        {
          id: 1,
          title: "Vue Mastery",
          author: "Jemmu",
          srcPic:
            "https://miro.medium.com/max/1838/1*2kmYJdNvUCAU3ufDR0HTmA.jpeg",
          rating: 4.5,
          price: 420,
          cart: "false",
          purchased: "false",
          summary:
            "Vue.js is an awesome JavaScript Framework for building Frontend Applications! VueJS mixes the Best of Angular + React!",
          moreInfo: [
            "Learn how to create Vue 3 applications from the ground-up",
            "Get in-depth knowledge of Vue features like the Vue Router, Vue CLI, Options API, Composition API, Teleport etc",
            "Get hands-on & in-depth experience using the latest Vue 3 features (such as the Composition API)",
          ],
        },
        {
          id: 2,
          title: "React Experts",
          author: "Jemish Kakadiya",
          srcPic: "https://miro.medium.com/max/698/0*3cX7jJzXWGiizeAl.png",
          rating: 4,
          price: 599,
          cart: "false",
          purchased: "false",
          summary:
            "Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!",
          moreInfo: [
            "Build powerful, fast, user-friendly and reactive web apps",
            "Build amazing single page applications with React JS and Redux",
            "Understand common web technologies and design patterns to connect them together",
            "Figure out what a Higher Order Component and how to use it to write dramatically less code",
          ],
        },
        {
          id: 3,
          title: "Angular Zero to Hero",
          author: "Jemmu Kakadiya",
          srcPic: "https://miro.medium.com/max/3200/0*Bt03vVVQs55nQI_n.png",
          rating: 4.2,
          price: 699,
          cart: "false",
          purchased: "false",
          summary:
            "Master Angular 10 (formerly Angular 2) and build awesome, reactive web apps with the successor of Angular.js",
          moreInfo: [
            "Develop modern, complex, responsive and scalable web applications with Angular 1",
            "Fully understand the architecture behind an Angular application and how to use it",
            "Tackling Advanced interview questions around routing,Lazy Loading, Services & Dependency Injection .",
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>
