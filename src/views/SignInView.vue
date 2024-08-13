<template>
  <div class="signin-view">
    <h2>Iroko Sign in</h2>
    <form @submit.prevent="login">
      <div class="input-group">
        <label for="email">Your Email</label>
        <input type="email" v-model="email" id="email" required />
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input type="password" v-model="password" id="password" required />
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
      <router-link to="/sign-up" class="create-account">Don't have an account? Create an Account</router-link>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SignInView',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      // Handle the login logic here
      console.log('Logging in with', this.email, this.password);
      this.$store.dispatch('login', { email: this.email });
      this.$router.push('/dashboard');
    },
  },
};
</script>

<style scoped>
.signin-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ffffff;
}

h2 {
  font-size: 2em;
  margin-bottom: 20px;
}

form {
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.input-group {
  margin-bottom: 20px;
}

.input-group label {
  display: block;
  font-size: 1em;
  margin-bottom: 5px;
}

.input-group input {
  width: 100%;
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.btn {
  width: 100%;
  padding: 10px;
  background-color: #2c3e50;
  color: #fff;
  border: none;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
}

.btn:hover {
  background-color: #34495e;
}

.create-account {
  display: block;
  margin-top: 10px;
  text-align: center;
  color: #2c3e50;
  text-decoration: none;
}

.create-account:hover {
  text-decoration: underline;
}
</style>