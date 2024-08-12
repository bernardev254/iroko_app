<template>
  <div class="payment-view">
    <header class="payment-header">
      <h2>Pay for the service</h2>
    </header>

    <section class="price-details">
      <div class="price-item">
        <p>Price details</p>
        <p class="price-amount">Ksh 650</p>
      </div>
    </section>

    <section class="payment-methods">
      <h3>Pay with</h3>
      <ul>
        <li v-for="(method, index) in paymentMethods" :key="index">
          <input
            type="radio"
            :id="method"
            :value="method"
            v-model="selectedMethod"
          />
          <label :for="method">{{ method }}</label>
        </li>
      </ul>
    </section>

    <button @click="makePayment" class="btn btn-primary">Pay Now</button>

    <section v-if="paymentSuccess" class="payment-success">
      <p>Success</p>
      <p>You have completed your payment</p>
      <router-link to="/dashboard" class="btn btn-secondary">Dashboard</router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PaymentView',
  data() {
    return {
      selectedMethod: 'Debit card',
      paymentMethods: ['Debit card', 'Mpesa', 'Apple Pay', 'PayPal'],
      paymentSuccess: false,
    };
  },
  methods: {
    makePayment() {
      // Simulate payment processing
      this.paymentSuccess = true;
      alert('Payment successful!');
    },
  },
};
</script>

<style scoped>
.payment-view {
  padding: 20px;
  background-color: #ffffff;
}

.payment-header {
  margin-bottom: 20px;
  text-align: center;
}

h2 {
  font-size: 1.8em;
  color: #2c3e50;
}

.price-details {
  display: flex;
  justify-content: space-between;
  background-color: #ecf0f1;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.price-item {
  font-size: 1.2em;
}

.price-amount {
  font-size: 1.5em;
  font-weight: bold;
  color: #2c3e50;
}

.payment-methods {
  margin-bottom: 20px;
}

.payment-methods h3 {
  font-size: 1.5em;
  color: #2c3e50;
  margin-bottom: 10px;
}

.payment-methods ul {
  list-style-type: none;
  padding: 0;
}

.payment-methods li {
  margin-bottom: 10px;
}

input[type='radio'] {
  margin-right: 10px;
}

.btn {
  padding: 10px 20px;
  background-color: #2c3e50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover {
  background-color: #34495e;
}

.payment-success {
  margin-top: 20px;
  text-align: center;
  padding: 20px;
  background-color: #2ecc71;
  color: #ffffff;
  border-radius: 10px;
}

.payment-success p {
  margin: 0 0 10px;
  font-size: 1.5em;
}

.btn-secondary {
  padding: 10px 20px;
  background-color: #3498db;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
}

.btn-secondary:hover {
  background-color: #2980b9;
}
</style>
