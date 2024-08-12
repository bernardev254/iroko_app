<template>
   <HeaderView/>
   <router-view></router-view>
    <!-- Footer (Optional) -->
    <footer>
      <p>© 2024 Iroko. All rights reserved.</p>
    </footer>
</template>

<script>
import HeaderView from './components/HeaderView.vue';
export default {
  name: 'App',
  components: {
    HeaderView,
  },
  };
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 1px;
}
</style>
