<template>
  <main class="main-container">
    <slot></slot>
  </main>
</template>

<script>
export default {
  name: 'Template',
}
</script>

<style scoped>
  .main-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 10px 150px;
    min-height: 78vh;
    background-color: #c4c4c42d;
  }
</style>