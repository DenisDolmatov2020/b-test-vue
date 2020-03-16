<template>
  <v-container class="fill-height">
      <SelectedItems/>
      <SelectItems/>
      </v-container>
</template>

<script>
  import SelectItems from './SelectItems'
  import SelectedItems from './SelectedItems'

  export default {
    name: 'SelectSelectedItems',
    components: {
        SelectItems, SelectedItems
    },
  };
</script>

<style scoped>

</style>