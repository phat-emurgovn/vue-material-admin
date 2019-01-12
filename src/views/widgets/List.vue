<template>
  <div id="social">
    <v-container grid-list-xl fluid>
        <v-layout row wrap>

          <v-flex lg7 sm12 xs12>
            <plain-table></plain-table>
          </v-flex>
          <v-flex lg5 sm12 xs12>
            <plain-table-order></plain-table-order>
          </v-flex>

        </v-layout>
      </v-container>
  </div>
</template>

<script>
import PlainTable from '@/components/widgets/list/PlainTable';
import PlainTableOrder from '@/components/widgets/list/PlainTableOrder';
export default {
  components: {
    PlainTable,
    PlainTableOrder
  },
  methods: {
    handleClick: (e) => {
      console.log(e);
    }
  }
  
};
</script>