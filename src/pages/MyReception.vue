<template>
  <v-div>
    <h1>Прием</h1>
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
        "ID", "ID Пациента", "ID Врача", "Дата приема", "Время приема", "Стоимость"
      ],
      tableContent: [
        [0, 0, 0, '23.04.2021 13:00', '10300'],
        [1, 0, 1, '12.03.2022 15:20', '2900'],
        [2, 4, 2, '13.06.2020 14:40', '30000'],
        [3, 5, 3, '11.09.2022 17:30', '8900'],
        [4, 6, 4, '08.04.2021 16:50', '7000'],
        [5, 6, 5, '29.05.2022 15:00', '560']
      ]
    }
  }
}
</script>

<style>
</style>
