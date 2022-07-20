<template>
  <div class="box-modal">
    Usuário {{ info_alert }} já logado!
  </div>
</template>

<script>
export default {
  name: 'PopUpAlert',
  props: {
    info_alert: String,
  }
}
</script>

<style scoped>
  .box-modal {
    padding: 30px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 2px solid red;
    background-color: #ff000068;
    position: absolute;
    top: 25px;
    right: 85px;
    font-size: 15px;
    animation: roar .5s;
  }

  @keyframes roar {
    from {
      opacity: 0;
      visibility: hidden;
    }
    to {
      opacity: 1;
      visibility: visible;
    }
  }
</style>