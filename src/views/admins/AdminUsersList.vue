<template>
  <div>
    <v-container grid-list-xl fluid> <table-admin-user></table-admin-user> </v-container>
  </div>
</template>

<script>
import TableAdminUser from "@/components/widgets/list/TableAdminUser";

export default {
  name: "AdminUsersList",
  components: {
    TableAdminUser
  }
};
</script>

<style scoped></style>
