<template>
  <v-div>
    <h1>Диагнозы</h1>
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
        "ID", "Название"
      ],
      tableContent: [
        [0, 'Кариес'],
        [1, 'Пульпит'],
        [2, 'Эрозия зубов'],
        [3, 'Флюороз',],
        [4, 'Адентия частичная'],
        [5, 'Стоматит',]
      ]
    }
  }
}
</script>

<style>
</style>