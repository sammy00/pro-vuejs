<template>
  <v-app>
    <v-toolbar color="primary">
      <v-toolbar-title class="text-uppercase white--text">SportsStore Administration</v-toolbar-title>
    </v-toolbar>
    <v-container>
      <v-form>
        <v-text-field label="Username" v-model="$v.username.$model" required></v-text-field>
        <validation-error v-bind:validation="$v.username"/>

        <v-text-field
          label="Password"
          v-model="$v.password.$model"
          :append-icon="show ? 'visibility_off' : 'visibility'"
          :type=" show ? 'text':'password'"
          @click:append="show = !show"
        ></v-text-field>
        <validation-error v-bind:validation="$v.password"/>

        <v-btn color="primary" @click="handleAuth">Log In</v-btn>
      </v-form>
      <v-alert type="error" v-model="showFailureMessage">Authentication Failed. Please try again.</v-alert>
    </v-container>
  </v-app>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { mapActions, mapState } from "vuex";
import ValidationError from "../ValidationError";

export default {
  components: { ValidationError },
  data: function() {
    return {
      username: null,
      password: null,
      show: false,
      showFailureMessage: false
    };
  },
  computed: {
    ...mapState({ authenticated: state => state.auth.authenticated })
  },
  validations: {
    username: { required },
    password: { required }
  },
  methods: {
    ...mapActions(["authenticate"]),
    async handleAuth() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        await this.authenticate({
          //name: this.username,
          //password: this.password
          name: this.$v.username.$model,
          password: this.$v.password.$model
        });
        if (this.authenticated) {
          this.$router.push("/admin");
        } else {
          this.showFailureMessage = true;
        }
      }
    }
  }
};
</script>
