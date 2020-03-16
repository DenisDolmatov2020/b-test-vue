<template>
    <v-container>
          <v-card flat>
    <v-card-text>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <p>Выбрано элементов: {{ this.$store.getters.selectedItemsStore.length }}</p>
            <v-divider/>
          </v-col>

          <v-col sm="4" md="3" v-for="(item, index) in this.$store.getters.selectedItemsStore" :key="item" >
            <v-tooltip bottom >
              <template v-slot:activator="{ on }">
                <v-btn color="grey" dark v-on="on">
                  Элемент {{ item }}
                  <v-icon right color="error" @click="remove(index)">mdi-close</v-icon>
                </v-btn>
              </template>
              <span> Close button id: {{ item }} </span>            </v-tooltip>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
      </v-container>

</template>

<script>
export default {
    name: 'SelectedItems',
    data: () => ({}),
    computed: {},
    methods: {
      remove (index) {
        this.$store.dispatch('removeItem', index)
      }
    }
}
</script>
