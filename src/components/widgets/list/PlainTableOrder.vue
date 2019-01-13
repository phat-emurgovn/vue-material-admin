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
          class="elevation-0 table-striped"
        >
          <template slot="items" slot-scope="props">
            <td>{{ props.item.id }}</td>
            <td class="text-xs-left">{{ props.item.product }}</td>
            <td class="text-xs-left">{{ props.item.price }}</td>
            <td class="text-xs-left">
              <v-chip
                label
                small
                :color="getColorByStatus(props.item.status)"
                text-color="white"
                >{{ props.item.status }}
              </v-chip>
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
        { text: "Product", value: "deadline" },
        { text: "Price", value: "progress" },
        { text: "Status", value: "status" }
      ],
      colors: {
        processing: "blue",
        sent: "red",
        delivered: "green"
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
