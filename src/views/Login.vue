<template>
  <v-app id="login" class="primary">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4 lg4>
            <v-card class="elevation-1 pa-3">
              <v-card-text>
                <div class="layout column align-center">
                  <img
                    src="/static/logo-act.png"
                    alt="ACT Payment"
                    width="120"
                    height="120"
                  />
                  <h1 class="flex my-4 primary--text">ACT Payment</h1>
                </div>
                <v-form
                  name="loginForm"
                  ref="loginForm"
                  :model="loginForm"
                >
                  <v-text-field
                    browser-autocomplete="on"
                    append-icon="person"
                    name="email"
                    label="Email"
                    type="text"
                    outline
                    v-model="loginForm.email"
                  ></v-text-field>
                  <v-text-field
                    append-icon="lock"
                    name="password"
                    label="Password"
                    id="password"
                    type="password"
                    outline
                    v-model="loginForm.password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn block color="primary" @click="login" :loading="loading"
                  >Login
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-snackbar
            :timeout="3000"
            bottom
            right
            :color="snackbar.color"
            v-model="snackbar.show"
          >
            {{ snackbar.text }}
            <v-btn dark flat @click.native="snackbar.show = false" icon>
              <v-icon>close</v-icon>
            </v-btn>
          </v-snackbar>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { validateEmail } from "@/util/validate";

export default {
  name: "Login",
  data() {
    const checkEmail = (rule, value, callback) => {
      if (!validateEmail(value)) {
        callback(new Error("Please enter the correct email"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("The password can not be less than 6 digits"));
      } else {
        callback();
      }
    };
    return {
      loading: false,
      loginForm: {
        email: "",
        password: ""
      },
      loginRules: {
        email: [{ required: true, trigger: "blur", validator: checkEmail }],
        password: [
          { required: true, trigger: "blur", validator: validatePassword }
        ]
      },
      redirect: undefined,
      snackbar: {
        show: false,
        text: "",
        color: ""
      }
    };
  },
  methods: {
    login() {
      this.loading = true;

      this.$store
        .dispatch("LoginByEmail", this.loginForm)
        .then(() => {
          this.loading = false;
          this.snackbar = {
            show: true,
            color: "green",
            text: "Logout successfully."
          };
          this.$router.push({ path: this.redirect || "/dashboard" });
        })
        .catch(() => {
          this.snackbar = {
            show: true,
            color: "red",
            text: "The email or password is invalid."
          };
          this.loading = false;
        });
    }
  }
};
</script>
<style scoped lang="css">
#login {
    height: 50%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    z-index: 0;
}

.v-card__actions .v-btn {
  margin: 0;
  min-width: 56px;
}
</style>
