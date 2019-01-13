<template>
  <div>
    <v-container grid-list-xl fluid> <table-user></table-user> </v-container>
  </div>
</template>

<script>
import TableUser from "@/components/widgets/list/TableUser";

export default {
  name: "UsersList",
  components: {
    TableUser
  }
};
</script>

<style scoped></style>
