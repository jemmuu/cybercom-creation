<template>
  <v-app>
    <v-card class="mx-auto mt-12 mb-12" max-width="500" elevation="24">
      <v-img
        src="https://i.imgur.com/idDnUbZ.jpg"
        height="200px"
        contain
      ></v-img>

      <v-card-title class="justify-center">
        <p>Register Yourself for <b>FREE!!</b></p>
      </v-card-title>

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
                <v-text-field
                  ref="name"
                  color="success"
                  v-model="form.name"
                  :rules="[() => !!form.name || 'This field is required']"
                  :error-messages="form.errorMessages"
                  label="Full Name"
                  placeholder="John Doe"
                  required
                ></v-text-field>
                <v-text-field
                  ref="address"
                  color="success"
                  v-model="form.address"
                  :rules="[
                    () => !!form.address || 'This field is required',
                    () =>
                      (!!form.address && form.address.length <= 50) ||
                      'Address must be less than 50 characters',
                    addressCheck,
                  ]"
                  label="Address Line"
                  placeholder="Snowy Rock Pl"
                  counter="50"
                  required
                ></v-text-field>
                <v-text-field
                  ref="city"
                  color="success"
                  v-model="form.city"
                  :rules="[
                    () => !!form.city || 'This field is required',
                    addressCheck,
                  ]"
                  label="City"
                  placeholder="El Paso"
                  required
                ></v-text-field>
                <v-text-field
                  ref="state"
                  color="success"
                  v-model="form.state"
                  :rules="[() => !!form.state || 'This field is required']"
                  label="State/Province/Region"
                  required
                  placeholder="TX"
                ></v-text-field>
                <v-text-field
                  ref="zip"
                  color="success"
                  v-model="form.zip"
                  :rules="[() => !!form.zip || 'This field is required']"
                  label="ZIP / Postal Code"
                  required
                  placeholder="79938"
                ></v-text-field>
                <v-autocomplete
                  ref="country"
                  color="success"
                  v-model="form.country"
                  :rules="[() => !!form.country || 'This field is required']"
                  :items="form.countries"
                  label="Country"
                  placeholder="Select..."
                  required
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          <v-card-actions>
            <v-btn :disabled="!formIsValid" color="success" type="submit" block>
              
              Register
            </v-btn>
          </v-card-actions>
          <v-card-actions>
            <v-btn text color="success" @click="resetForm" block>
              Reset Form
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
import router from "@/router";
export default {
  data() {
    const defaultForm = Object.freeze({
      userEmail: "",
      userPass: "",
      countries: [
        "Afghanistan",
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Anguilla",
        "Antigua &amp; Barbuda",
        "Argentina",
        "Armenia",
        "Aruba",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bermuda",
        "Bhutan",
        "Bolivia",
        "Bosnia &amp; Herzegovina",
        "Botswana",
        "Brazil",
        "British Virgin Islands",
        "Brunei",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cambodia",
        "Cameroon",
        "Cape Verde",
        "Cayman Islands",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Congo",
        "Cook Islands",
        "Costa Rica",
        "Cote D Ivoire",
        "Croatia",
        "Cruise Ship",
        "Cuba",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Estonia",
        "Ethiopia",
        "Falkland Islands",
        "Faroe Islands",
        "Fiji",
        "Finland",
        "France",
        "French Polynesia",
        "French West Indies",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Gibraltar",
        "Greece",
        "Greenland",
        "Grenada",
        "Guam",
        "Guatemala",
        "Guernsey",
        "Guinea",
        "Guinea Bissau",
        "Guyana",
        "Haiti",
        "Honduras",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland",
        "Isle of Man",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jersey",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kuwait",
        "Kyrgyz Republic",
        "Laos",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macau",
        "Macedonia",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Mauritania",
        "Mauritius",
        "Mexico",
        "Moldova",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Namibia",
        "Nepal",
        "Netherlands",
        "Netherlands Antilles",
        "New Caledonia",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "Norway",
        "Oman",
        "Pakistan",
        "Palestine",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Reunion",
        "Romania",
        "Russia",
        "Rwanda",
        "Saint Pierre &amp; Miquelon",
        "Samoa",
        "San Marino",
        "Satellite",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "South Africa",
        "South Korea",
        "Spain",
        "Sri Lanka",
        "St Kitts &amp; Nevis",
        "St Lucia",
        "St Vincent",
        "St. Lucia",
        "Sudan",
        "Suriname",
        "Swaziland",
        "Sweden",
        "Switzerland",
        "Syria",
        "Taiwan",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        `Timor L'Este`,
        "Togo",
        "Tonga",
        "Trinidad &amp; Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Turks &amp; Caicos",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom",
        "United States",
        "Uruguay",
        "Uzbekistan",
        "Venezuela",
        "Vietnam",
        "Virgin Islands (US)",
        "Yemen",
        "Zambia",
        "Zimbabwe",
      ],
      errorMessages: "",
      name: null,
      address: null,
      city: null,
      state: null,
      zip: null,
      country: null,
      formHasErrors: false,
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
      return (
        this.form.userEmail &&
        this.form.userPass &&
        this.form.name &&
        this.form.address &&
        this.form.city &&
        this.form.state &&
        this.form.zip &&
        this.form.country
      );
    },
  },
  methods: {
    resetForm() {
      this.form = Object.assign({}, this.defaultForm);
      this.$refs.form.reset();
    },
    addressCheck() {
      this.errorMessages =
        this.address && !this.name ? `Hey! I'm required` : "";

      return true;
    },
    submit() {
      
      
        
        
       let user = JSON.parse(window.localStorage.getItem("userList"));
       
      if (user == null) {
        user = [];
      }

      let newUser = {
        userEmail: this.form.userEmail,
        userPass: this.form.userPass,
        name: this.form.name,
        address: this.form.address,
        city: this.form.city,
        state: this.form.state,
        zip: this.form.zip,
        country: this.form.country,
      };
      user.push(newUser);
     
      window.localStorage.setItem('userList',JSON.stringify(user));
      router.push('/login');
    },
  },
};
</script>

<style>
</style>