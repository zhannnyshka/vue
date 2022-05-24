<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'v-button'
}
</script>

<style>
.btn {
  padding: 10px 15px;
  margin: 5px;
  background: none;
  font-size: 12pt;
  color: teal;
  border: 1px solid teal;
  border-radius: 5px;
}
</style>