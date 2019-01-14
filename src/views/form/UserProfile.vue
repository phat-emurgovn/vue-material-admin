<template>
  <div id="page-forms">
    <v-container grid-list-xl fluid>
      <v-card>
        <v-card-text class="">
          <shipment-form></shipment-form>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import ShipmentForm from "@/components/widgets/form/ShipmentForm";

export default {
  name: "UserProfile",
  components: {
    ShipmentForm
  }
};
</script>

<style scoped></style>
