<template>
  <button @submit.prevent="$emit('submitNewUser')">{{ btn_title }}</button>
</template>

<script>
export default {
  name: 'ButtonSubmit',
  emits: ['submitNewUser'],
  props: {
    btn_title: String,
  }
}
</script>