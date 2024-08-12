<template>
  <div class="rent-tracking-view">
    <header class="rent-header">
      <h2>Rent Tracking</h2>
      <div class="total-rent">
        <p>Total Rent Collected</p>
        <p class="amount">Ksh 1,220,000</p>
      </div>
    </header>

    <section class="payment-list">
      <h3>July Payments</h3>
      <ul>
        <li v-for="(payment, index) in payments" :key="index">
          <div class="tenant-name">{{ payment.tenant }}</div>
          <div class="payment-amount">Ksh {{ payment.amount }}</div>
          <div :class="{'payment-status': true, 'paid': payment.status === 'Paid', 'pending': payment.status === 'Pending'}">
            {{ payment.status }}
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'RentTrackingView',
  data() {
    return {
      payments: [
        { tenant: 'Kamau G.K', amount: 8000, status: 'Paid' },
        { tenant: 'Alice Makau', amount: 14000, status: 'Paid' },
        { tenant: 'Tyler Susan', amount: 14000, status: 'Pending' },
        { tenant: 'Michael J.', amount: 20000, status: 'Paid' },
      ],
    };
  },
};
</script>

<style scoped>
.rent-tracking-view {
  padding: 20px;
  background-color: #ffffff;
}

.rent-header {
  text-align: center;
  margin-bottom: 20px;
}

h2 {
  font-size: 1.8em;
  color: #2c3e50;
}

.total-rent {
  background-color: #2c3e50;
  color: #ffffff;
  padding: 15px;
  border-radius: 10px;
  margin-top: 10px;
}

.total-rent .amount {
  font-size: 1.8em;
  font-weight: bold;
}

.payment-list {
  margin-top: 20px;
}

.payment-list h3 {
  font-size: 1.5em;
  color: #2c3e50;
  margin-bottom: 10px;
}

.payment-list ul {
  list-style-type: none;
  padding: 0;
}

.payment-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ecf0f1;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}

.tenant-name {
  font-size: 1em;
  color: #2c3e50;
}

.payment-amount {
  font-size: 1em;
  color: #7f8c8d;
}

.payment-status {
  font-size: 1em;
  padding: 5px 10px;
  border-radius: 5px;
}

.paid {
  background-color: #2ecc71;
  color: #ffffff;
}

.pending {
  background-color: #f39c12;
  color: #ffffff;
}
</style>
