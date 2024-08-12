<template>
  <div class="welcome-view">
    <h1>Welcome to Iroko</h1>
    <p>
      Your one-stop solution for managing properties, tracking rent, and staying on top of reminders. 
    </p>
    <router-link to="/sign-in" class="btn btn-primary">Get Started</router-link>
  </div>
</template>

<script>
export default {
  name: 'WelcomeView',
};
</script>

<style scoped>
.welcome-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #f5f5f5;
}

h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
}

p {
  font-size: 1.2em;
  margin-bottom: 40px;
}

.btn {
  padding: 10px 20px;
  background-color: #2c3e50;
  color: #fff;
  border: none;
  border-radius: 5px;
  text-decoration: none;
}

.btn:hover {
  background-color: #34495e;
}
</style>
