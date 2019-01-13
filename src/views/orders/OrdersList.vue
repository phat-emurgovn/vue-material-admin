<template>
    <div>
        <v-container grid-list-xl fluid>
            <plain-table-order></plain-table-order>
        </v-container>
    </div>
</template>

<script>
  import PlainTableOrder from '@/components/widgets/list/PlainTableOrder';

  export default {
    name: "OrdersList",
    components: {
      PlainTableOrder
    },
  }
</script>

<style scoped>

</style>