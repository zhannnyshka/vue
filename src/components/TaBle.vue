<template>
  <table class="v-table">
    <thead class="v-table-header">
    <tr>
      <th class="v-table-element" v-for="item in headers" :key="item">{{ item }}</th>
    </tr>
    </thead>
    <tbody class="v-table-content">
    <tr v-for="row in content" :key="row">
      <td class="v-table-element" v-for="item in row" :key="item">{{ item }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'v-table',
  props: ['headers', 'content']
};
</script>

<style>
th,
td {
  border: 1px solid teal;
}
.v-table {
  width: 95%;
  border: 1px solid teal;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
}
.v-table-header {
  border-bottom: 1px solid teal;
}
.v-table-element {
  padding: 10px;
}
</style>