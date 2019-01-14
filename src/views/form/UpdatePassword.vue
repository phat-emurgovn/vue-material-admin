<template>
  <div id="page-forms">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg6>
          <v-card>
            <v-card-text class="">
              <password-form></password-form>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import PasswordForm from "@/components/widgets/form/PasswordForm";

export default {
  name: "UpdatePassword",
  components: {
    PasswordForm
  }
};
</script>

<style scoped></style>
