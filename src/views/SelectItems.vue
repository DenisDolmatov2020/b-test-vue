<template>
<v-row justify="">
    <v-dialog v-model="dialog" scrollable max-width="50%">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on"> Выбрать элементы </v-btn>
      </template>
      <v-card>
        <v-card-title class="title green--text">Диалог выбора элементов</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 20%">
          <v-text-field label="Поиск" v-model="searchText"></v-text-field>
        </v-card-text>

        <v-card-text style="height: 230px;">
          <v-checkbox v-for="item in searchItems" :key="item.id"
                      v-model="selectItems" :disabled="disabled_ && selectItems.indexOf(item.id) == -1"
                      :label="item.title" :value="item.id" hide-details>
          </v-checkbox>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-subtitle style="height: 5%">
          Выбрано элементов: {{ selectItems.length }}
        </v-card-subtitle>
        <v-card-text style="height: 10%">
          <v-btn x-small color="primary" dark v-for="(item, index) in selectItems" :key="item">
                  Элемент {{ item }}
                <v-icon right color="error" @click="remove(index)">mdi-close</v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="red darken-1" text @click="closeModal"> Отменить </v-btn>
          <v-btn color="green darken-1" text @click="saveItems"> Сохранить </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'SelectItems',

  data: () => ({
    dialog: false,
    dialogm1: '',
    items: [],
    searchText: '',
    selectItemsMax: 5,
    selectItems: []
  }),
  created() {
    for (let i = 1; i < 301; i++) {
      this.items.push({id: i, title: "Элемент " + i})
    }
  },
  computed: {
    searchItems() {
      return this.items.filter(item => item.title.indexOf(this.searchText) !== -1)
    },
    disabled_() {
      return this.selectItems.length >= this.selectItemsMax
    },
  },
  methods: {
    remove (index) {
        this.selectItems.splice(index, 1);
    },
    closeModal() {
      this.dialog = false
      this.selectItems = []
    },
    saveItems() {
      for (let i = 0; i < this.selectItems.length; i++) {
        if(this.$store.getters.selectedItemsStore.indexOf(this.selectItems[i]) == -1){
          this.$store.dispatch('selectedItem', this.selectItems[i])
        }
      }
      this.closeModal()
    },
  }
}
</script>
