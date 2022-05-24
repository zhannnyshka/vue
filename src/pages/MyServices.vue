<template>
  <v-div>
    <h1>Услуги</h1>
    <v-table :headers="tableHeaders" :content="tableContent" />
  </v-div>
</template>

<script>
import VTable from "@/components/TaBle.vue";
export default {
  components: {
    VTable
  },
  data() {
    return {
      tableHeaders: [
        "ID", "Название", "Цена"
      ],
      tableContent: [
        [0, 'Чистка зубов', '8000'],
        [1, 'Лечение кариеса', '3000'],
        [2, 'Протезирование', '45000'],
        [3, 'Реставрация', '10000'],
        [4, 'Отбеливание зубов', '15000'],
        [5, 'Лечение десен', '9000'],
      ]
    }
  }
}
</script>

<style>
</style>