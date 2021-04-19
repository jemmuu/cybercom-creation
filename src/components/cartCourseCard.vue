<template>
  <div >
    <v-card class="mx-auto mt-5" max-width="900px" outlined v-for='course in course' :key="course.id "   >
      <v-list-item three-line>
        <v-list-item-content>
          
          <v-list-item-title class="headline mt-n4 mb-1">
            <h2>{{course.title}}</h2>
            <v-divider></v-divider>
          </v-list-item-title>

          <v-subheader>
            <div class="mt-n4">
              By {{ course.author }}
              <div class="mt-4">
                <v-row>
                  <v-rating
                    :value="course.rating"
                    color="amber"
                    half-increments
                    readonly
                  ></v-rating>
                  <div class="mt-1 ml-4 text-h6">{{ course.rating }}</div>
                </v-row>
              </div>
              <div class="mt-2 text-h6">$ {{ course.price }}</div>
              <div class="mt-2" >{{ course.summary }}</div>
            </div>
          </v-subheader>
        </v-list-item-content>

        <v-list-item-avatar tile height="200" width="300">
          <v-img
            :src="course.srcPic"
            height="200"
            width="300"
          ></v-img
        ></v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
          <v-spacer></v-spacer>
        <v-btn color="red" rounded @click='remove(course.id)'> Remove From Cart </v-btn>
        
      </v-card-actions>
    </v-card>
    </div>
</template>

<script>
export default {
    props:["course"],
    methods:
    {
        remove(data){
            this.$emit('remove',data);
        }
    }

}
</script>

<style>

</style>