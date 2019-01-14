<template>
  <v-form v-model="valid">
    <v-text-field
      label="Full Name"
      name="fullname"
      placeholder="Michael Wang"
      v-model="formModel.name"
      v-validate="'required'"
      data-vv-name="fullname"
      :error-messages="errors.collect('fullname')"
      required
    ></v-text-field>
    <v-text-field
      label="Email"
      placeholder="wangqiangshen@gmail.com"
      name="email"
      v-validate="'required|email'"
      data-vv-name="email"
      :error-messages="errors.collect('email')"
      v-model="formModel.email"
      required
    ></v-text-field>
    <v-text-field
      label="Phone"
      placeholder="(###) ### - ####"
      v-validate="'required'"
      data-vv-name="phone"
      :error-messages="errors.collect('phone')"
      v-model="formModel.phone"
      mask="phone"
      required
    ></v-text-field>
    <v-subheader class="pa-0 mt-3">ADDRESS</v-subheader>
    <v-text-field
      label="Address"
      v-validate="'required'"
      data-vv-name="address"
      :error-messages="errors.collect('address')"
      v-model="formModel.address"
      required
    ></v-text-field>
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
    formModel: {
    },
    valid: true
  }),
  mounted() {
    this.$validator.localize("en", this.dictionary);
  },
  methods: {
    submit() {
      this.$validator.validateAll();
    },
    clear() {
      this.formModel = {};
      this.$validator.reset();
    }
  }
};
</script>
