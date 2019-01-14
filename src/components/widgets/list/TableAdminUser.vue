<template>
  <v-card>
    <v-toolbar card dense color="transparent">
      <v-toolbar-title><h4>AdminUsers</h4></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon> <v-icon>more_vert</v-icon> </v-btn>
    </v-toolbar>
    <v-divider></v-divider>
    <v-card-text class="pa-0">
      <template>
        <v-data-table
          :headers="headers"
          :items="listAdminUsers"
          :pagination.sync="pagination"
          :total-items="totalAdminUsers"
          :loading="loading"
          :rows-per-page-items="optionsPerPage"
          class="elevation-0 table-striped"
        >
          <template slot="items" slot-scope="props">
            <td>
              <v-avatar size="36px"> <v-icon>account_circle</v-icon> </v-avatar>
            </td>
            <td class="text-xs-left">{{ formatFullName(props.item) }}</td>
            <td class="text-xs-left">{{ props.item.email }}</td>
            <td class="text-xs-left">{{ formatPhone(props.item) }}</td>
            <td class="text-xs-left">
              {{ props.item.created_at | moment("from", "now") }}
            </td>
            <td class="text-xs-left">{{ props.item.timezone }}</td>
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
import { formatPhone, formatFullName } from "@/util/index";

export default {
  name: "TableUser",
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
          text: "",
          align: "left",
          sortable: false
        },
        { text: "Name", sortable: false },
        { text: "Email", sortable: false },
        { text: "Phone", sortable: false },
        { text: "Joined date", sortable: false },
        { text: "Timezone", sortable: false },
        { text: "", sortable: false }
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
    ...mapGetters(["listAdminUsers", "totalAdminUsers"])
  },
  methods: {
    getColorByStatus(status) {
      return this.colors[status];
    },
    getData() {
      this.loading = true;
      this.$store
        .dispatch("fetchListAdminUser", {
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
    formatPhone(item) {
      return formatPhone(item);
    },
    formatFullName(item) {
      return formatFullName(item);
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
