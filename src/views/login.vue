<template>
  <v-app>
    <v-card class="mx-auto mt-12 mb-12" max-width="500" elevation="24">
      <v-img
        src="https://i.imgur.com/idDnUbZ.jpg"
        height="200px"
        contain
      ></v-img>

      <v-card-title class="justify-center">
        Welcome to Udemy Green!!!!
      </v-card-title>

      <v-card-subtitle class="text-center">
        Please Login to continue
      </v-card-subtitle>
      <v-alert
        dense
        outlined
        type="error"
        max-width="400"
        class="mx-auto"
        :value="alert"
      >
        Please Check <strong>User Email</strong> or/and
        <strong>Password</strong> are <strong>Invalid</strong>
      </v-alert>
      <v-card-text class="text-center">
        <v-form ref="form" @submit.prevent="submit">
          <v-container fluid>
            <v-row class="justify-center">
              <v-col cols="10">
                <v-text-field
                  v-model="form.userEmail"
                  :rules="[rules.name, rules.email]"
                  color="success"
                  label="User Email"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="10">
                <v-text-field
                  v-model="form.userPass"
                  color="success"
                  label="Password"
                  required
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.name, rules.min]"
                  :type="show ? 'text' : 'password'"
                  name="password"
                  hint="At least 8 characters"
                  counter
                  @click:append="show = !show"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <v-card-actions>
            <v-btn
              :disabled="!formIsValid"
              color="success"
             type="submit"
              block
            >
              Login
            </v-btn>
          </v-card-actions>
          <v-card-actions>
            <v-btn text color="success" type="submit" href="/register" block> Register </v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
 import router from '@/router';
import axios from "axios";
export default {
  created()
  {
      let token = window.localStorage.getItem("token");
    
    
    if (token !== null) router.push("/");
  },
  data() {
    const defaultForm = Object.freeze({
      userEmail: "",
      userPass: "",
    });

    return {
      form: Object.assign({}, defaultForm),
      rules: {
        min: (v) => v.length >= 8 || "Min 8 characters",
        name: (val) => (val || "").length > 0 || "This field is required",
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },

      alert: false,
      show: false,

      defaultForm,
    };
  },

  computed: {
    formIsValid() {
      return this.form.userEmail && this.form.userPass;
    },
  },

  methods: {
    
    submit() {
        
      axios
        .post("https://reqres.in/api/login", {
          email: this.form.userEmail,
          password: this.form.userPass,
        })
        .then((response) => {
          window.localStorage.setItem('token', response.data.token);
          router.push('/')
          
        })
        .catch(() => {
          
          this.alert = true;
          setTimeout(() => { 
        this.alert = false;
      }, 5000);
        });
    },
  },
};
</script>

<style>
</style>