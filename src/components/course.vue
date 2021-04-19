<template>
  <v-hover v-slot="{ hover }">
    <v-card
      :elevation="hover ? 12 : 2"
      :loading="false"
      class="mx-auto my-12"
      max-width="374"
      @click="goto(course.id)"
    >
      <v-img height="250" :src="course.srcPic">
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out success darken-2 v-card--reveal display-3 white--text"
            style="height: 100%"
          >
            ${{ course.price }}
          </div>
        </v-expand-transition></v-img
      >

      <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              absolute
              color="success"
              class="white--text"
              fab
              large
              right
              style="top: 210px"
              v-bind="attrs"
              v-on="on"
              v-show="showBtn"
              @click="addToCart(course.id)"
            >
              <v-icon>mdi-cart-plus</v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <v-icon>mdi-check</v-icon>Added to Cart Successfully
            </v-card-title>
            <v-card-text>
              <div class="successlogo"></div>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1 larger" text @click="dialog = false">
                Continue Shopping
              </v-btn>
              <v-btn color="green white--text" depressed href="/cart">
                Goto Cart
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
      <v-card-title>
        <span class="mt-2">
          {{ course.title }}
        </span></v-card-title
      >

      <v-card-text>
        <v-row align="center" class="mx-0"> By {{ course.author }}</v-row>
        <v-row align="center" class="mx-0">
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
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            <ul>
              <li v-for="info in course.moreInfo" :key="info">{{ info }}</li>
            </ul>
          </v-card-text>
        </div>
      </v-expand-transition>
      <v-card-actions>
        <v-btn color="success" @click="show = !show" block>
          {{ show ? "Less Info" : "For More Info" }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
import router from '@/router';
export default {
  name: "course",
  props: {
    course: {
      type: Object,
      required: true,
    },
    myCourse: {
      default: "false",
    },
  },
  methods: {
    addToCart(id) {
      this.$emit("addToCart", id);
    },
    goto(id)
    {
      if(this.myCourse === true)
      {
        router.push({name: "coursePage" , params : {id : id} });
        return null;
      }
      this.$emit('alert')
        
      
    }
  },
  computed: {
    showBtn() {
      if (this.myCourse === true) {
        
        return false;
      } else return true;
    },
    
  },

  data() {
    return {
      show: false,
      dialog: false,
    };
  },
};
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.85;
  position: absolute;
  width: 100%;
}
.successlogo {
  min-width: auto;
  min-height: 250px;

  background-size: cover;
  background-image: url("https://i.gifer.com/7efs.gif");
}
</style>
