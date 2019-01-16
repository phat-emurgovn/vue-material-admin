<template>
  <div>
    <v-container grid-list-xl fluid>
      <table-crypto-currency></table-crypto-currency>
    </v-container>
  </div>
</template>

<script>
import TableCryptoCurrency from "@/components/widgets/list/TableCryptoCurrency";

export default {
  name: "CryptoCurrenciesList",
  components: {
    TableCryptoCurrency
  }
};
</script>

<style scoped></style>
