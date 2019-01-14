<template>
  <v-form v-model="valid">
    <div class="d-flex my-2">
      <v-text-field
        label="Old password"
        type="password"
        v-model="form.oldPassword"
        v-validate="'required'"
        data-vv-name="oldPassword"
        :error-messages="errors.collect('oldPassword')"
        required
      ></v-text-field>
    </div>
    <div class="d-flex my-2">
    <v-text-field
        label="New Password"
        type="password"
        v-model="form.password"
        v-validate="'required'"
        data-vv-name="password"
        :error-messages="errors.collect('password')"
        required
      ></v-text-field>
    </div>
    <div class="d-flex my-2">
    <v-text-field
        label="Password confirmation"
        type="password"
        v-model="form.passwordConfirmation"
        v-validate="'required'"
        data-vv-name="passwordConfirmation"
        :error-messages="errors.collect('passwordConfirmation')"
        required
      ></v-text-field>
    </div>
    <div class="form-btn">
      <v-btn outline @click="submit" color="primary">Submit</v-btn>
      <v-btn outline @click="clear">Clear</v-btn>
    </div>
  </v-form>
</template>

<script>
export default {
  $_veeValidate: {
    validator: "new"
  },
  data: () => ({
    valid: true,
    form: {
      oldPassword: "",
      password: "",
      passwordConfirmation: ""
    }
  }),
  mounted() {
    this.$validator.localize("en", this.dictionary);
  },

  methods: {
    submit() {
      this.$validator.validateAll();
    },
    clear() {
      this.form = {};
      this.$validator.reset();
    }
  }
};
</script>

<style lang="stylus" scoped>
.payment-method
  border: 1px solid #eee
</style>
