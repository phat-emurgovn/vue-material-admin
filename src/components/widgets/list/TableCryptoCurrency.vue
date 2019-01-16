<template>
  <v-card>
    <v-toolbar card dense color="transparent">
      <v-toolbar-title><h4>Crypto currencies</h4></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon> <v-icon>more_vert</v-icon> </v-btn>
    </v-toolbar>
    <v-divider></v-divider>
    <v-card-text class="pa-0">
      <template>
        <v-data-table
          :headers="headers"
          :items="listCryptoCurrencies"
          :pagination.sync="pagination"
          :total-items="totalCryptoCurrencies"
          :loading="loading"
          :rows-per-page-items="optionsPerPage"
          class="elevation-0 table-striped"
        >
          <template slot="items" slot-scope="props">
            <td class="text-xs-left">{{ props.item.name }}</td>
            <td class="text-xs-left">{{ props.item.symbol }}</td>
            <td class="text-xs-left">{{ props.item.rank }}</td>
            <td class="text-xs-left">
              <v-switch v-model="props.item.available" @change="updateItem(props.item)"></v-switch>
            </td>
          </template>
        </v-data-table>
      </template>
      <v-divider></v-divider>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TableCryptoCurrency",
  data() {
    return {
      optionsPerPage: [5, 10, 15, 20, 25, 30],
      loading: false,
      pagination: {
        page: 1,
        rowsPerPage: 10
      },
      headers: [
        { text: "Name", sortable: false },
        { text: "Symbol", sortable: false },
        { text: "Rank", sortable: false },
        { text: "Available", sortable: false }
      ],
      colors: {
        unconfirmed: "blue",
        pending: "orange",
        paid: "green",
        expired: "pink",
        illegal: "red"
      }
    };
  },
  computed: {
    ...mapGetters(["listCryptoCurrencies", "totalCryptoCurrencies"])
  },
  methods: {
    getData() {
      this.loading = true;
      this.$store
        .dispatch("fetchListCryptoCurrency", {
          page: this.pagination.page,
          per_page: this.pagination.rowsPerPage
        })
        .then(() => {
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },
    updateItem(item) {
      this.$store.dispatch("updateCryptoCurrency", item);
    }
  },
  mounted() {
    this.getData();
  },
  watch: {
    pagination: {
      handler() {
        this.getData();
      },
      deep: true
    }
  }
};
</script>
