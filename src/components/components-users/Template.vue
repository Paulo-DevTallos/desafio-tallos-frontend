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

  @media(max-width: 768px) {
    .main-container {
      padding: 10px 80px;
      height: 100vh;
    }
  }

  @media(max-width: 500px) {
    .main-container {
      padding: 10px 20px;
    }
  }
</style>