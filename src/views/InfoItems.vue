<template>
  <div>
    <div ref="content">
      <v-container>
          <v-row class="pa-1">
            <v-col> В системе обнаружено 300 элементов </v-col>
          </v-row>
          <v-row class="pa-1">
            <v-col> Выбрано пользователем {{ this.$store.getters.selectedItemsStore.length }} элементов </v-col>
          </v-row>
          <v-data-table
          :headers="headers"
          :items="selectedItemsStore"
          class="elevation-1"
          ></v-data-table>
      </v-container>
      </div>
    <v-row class="pa-3">
      <v-btn color="blue" dark @click="downloadPdf"> Скачать pdf </v-btn>
    </v-row>
  </div>
</template>

<script>
import jsPDF from "jspdf";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data () {
      return {
        output: '',
        headers: [
          {
            text: 'Выбранные элементы',
            align: 'left',
            sortable: false,
            value: 'id',
          },
        ],
      }
    },
  methods: {
    async downloadPdf() {
        const doc = new jsPDF();

        const el = this.$refs.content;
        const options = {
          type: 'dataURL'
        }
        const img = await this.$html2canvas(el, options);
        doc.addImage(img,'JPEG', 20, 20);
        doc.save("sample.pdf");

        console.log('output : ' + img);
      }

  },
  computed: {
      selectedItemsStore() {
        let items = []
        this.$store.getters.selectedItemsStore.forEach(function(element) {
          console.log(element)
          items.push({id: 'Элемент ' + element})
        })
        return items
      }
    },
};
</script>

<style scoped>

</style>
