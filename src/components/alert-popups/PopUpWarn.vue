<template>
  <div id="box-modal">
    {{ info_message }}
  </div>
</template>

<script>
export default {
  name: 'PopUpAlert',
  props: {
    info_message: String,
  }
}
</script>

<style scoped>
  #box-modal {
    padding: 30px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 2px solid rgb(251, 201, 21);
    background-color: #ece80068;
    position: absolute;
    bottom: 25px;
    right: 25px;
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