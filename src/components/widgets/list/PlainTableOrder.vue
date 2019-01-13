<template>
  <v-card>
    <v-toolbar card dense color="transparent">
      <v-toolbar-title><h4>Order</h4></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon> <v-icon>more_vert</v-icon> </v-btn>
    </v-toolbar>
    <v-divider></v-divider>
    <v-card-text class="pa-0">
      <template>
        <v-data-table
          :headers="headers"
          :items="listOrders"
          :pagination.sync="pagination"
          :total-items="totalOrders"
          :loading="loading"
          :rows-per-page-items="optionsPerPage"
          class="elevation-0 table-striped"
        >
          <template slot="items" slot-scope="props">
            <td>{{ props.item.id }}</td>
            <td class="text-xs-left">{{ props.item.title }}</td>
            <td class="text-xs-left">
              {{ props.item.price_amount + " " + props.item.price_currency }}
            </td>
            <td class="text-xs-left">
              {{
                props.item.pay_amount +
                  (props.item.pay_currency ? " " + props.item.pay_currency : "")
              }}
            </td>
            <td class="text-xs-left">
              <v-chip
                label
                small
                :color="getColorByStatus(props.item.status)"
                text-color="white"
                >{{ props.item.status.toUpperCase() }}
              </v-chip>
            </td>
            <td class="text-xs-left">
              {{ props.item.created_at | moment("from", "now") }}
            </td>
            <td class="text-xs-left green--text">
              {{
                props.item.received_amount +
                  (props.item.pay_currency ? " " + props.item.pay_currency : "")
              }}
            </td>
            <td class="text-xs-left">
              <v-btn outline small color="indigo"> Detail </v-btn>
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
  data() {
    return {
      optionsPerPage: [5, 10, 15, 20, 25, 30],
      loading: false,
      pagination: {
        page: 1,
        rowsPerPage: 10
      },
      headers: [
        {
          text: "#",
          align: "left",
          sortable: false,
          value: "id"
        },
        { text: "Title", sortable: false, value: "deadline" },
        { text: "Price", sortable: false, value: "progress" },
        { text: "Pay amount", sortable: false, value: "status" },
        { text: "Status", sortable: false, value: "status" },
        { text: "Created", sortable: false, value: "status" },
        { text: "Received amount", sortable: false, value: "status" },
        { text: "", sortable: false, value: "status" }
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
    ...mapGetters(["listOrders", "totalOrders"])
  },
  methods: {
    getColorByStatus(status) {
      return this.colors[status];
    },
    getData() {
      this.loading = true;
      this.$store
        .dispatch("fetchListOrder", {
          page: this.pagination.page,
          per_page: this.pagination.rowsPerPage
        })
        .then(() => {
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
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
