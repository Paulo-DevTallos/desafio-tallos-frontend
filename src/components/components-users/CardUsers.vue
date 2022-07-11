<template>
  <ul class="users">
    <li>
      <div>
        <div class="content-user">
          <span class="title-id">Nome:</span><span>Paulo Sérgio</span>
        </div>
        <div class="content-user"> 
          <span class="title-id">Email:</span><span>email@email.com</span>
        </div>
        <div class="content-user"> 
          <span class="title-id">Permissão:</span><span>User</span>
        </div>
      </div>
      <div class="command-user">
        <font-awesome-icon :icon="['fas', 'user-pen']" />
        <font-awesome-icon :icon="['fas', 'trash-can']" />
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CardUsers'
}
</script>

<style scoped>
  @import '../../assets/components/card-users.css';
</style>