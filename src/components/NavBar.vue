<template>
  <nav class="nav">
    <h1>Стоматологическая клиника</h1>
    <div class="nav-btns">
      <v-button @click="$router.push('/')">Home</v-button>
      <v-button @click="$router.push('/doctors')">Врачи</v-button>
      <v-button @click="$router.push('/diagnosis')">Диагнозы</v-button>
      <v-button @click="$router.push('/patients')">Пациенты</v-button>
      <v-button @click="$router.push('/reception')">Прием</v-button>
      <v-button @click="$router.push('/services')">Услуги</v-button>
      <v-button @click="$emit('logOut', false)">Выход</v-button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "v-nav"
};
</script>

<style>
.nav {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  border-bottom: 1px solid teal;
  margin-bottom: 5px;
}
</style>