<template>
  <header class="header">
    <nav>
      <router-link to="/dashboard" class="logo">
        <h1>Iroko</h1>
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderView",
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem;
  
}

.logo h1 {
  margin: 0;
  font-size: 1.5rem;
  color: #2c3e50;
  cursor: pointer;
}

.logo {
  text-decoration: none;
}
</style>
