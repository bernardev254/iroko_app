<template>
  <div class="dashboard-view">
    <header class="dashboard-header">
      <h1>Welcome, Karaba</h1>
      <div class="stats">
        <div class="stat-card">
          <h3>Total Property</h3>
          <p>5</p>
        </div>
        <div class="stat-card">
          <h3>Total Tenant</h3>
          <p>20</p>
        </div>
      </div>
    </header>

    <section class="recent-activities">
      <h2>Recent Activities</h2>
      <ul>
        <li v-for="(activity, index) in recentActivities" :key="index">
          <div class="activity-tenant">{{ activity.tenant }}</div>
          <div class="activity-action">{{ activity.action }}</div>
          <div :class="{'activity-status': true, 'success': activity.status === 'Payment notification', 'late': activity.status === 'Late payment'}">
            {{ activity.status }}
          </div>
        </li>
      </ul>
    </section>

    <router-link to="/rent-tracking" class="rent-tracking-link">
      <div class="rent-tracking">
        <h2>Rent Tracking</h2>
        <p>Total Rent Collected</p>
        <p class="rent-amount">Ksh 1,220,000</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'DashboardView',
  data() {
    return {
      recentActivities: [
        { tenant: 'Kamau G.K', action: 'Payment notification', status: 'Payment notification' },
        { tenant: 'Alice Makau', action: 'Payment notification', status: 'Payment notification' },
        { tenant: 'Tyler Susan', action: 'Payment notification', status: 'Payment notification' },
        { tenant: 'Michael J.', action: 'Late payment', status: 'Late payment' },
      ],
    };
  },
};
</script>

<style scoped>
.dashboard-view {
  padding: 20px;
  background-color: #ffffff;
}

.dashboard-header {
  text-align: center;
  margin-bottom: 30px;
}

h1 {
  font-size: 1.8em;
  color: #2c3e50;
  margin-bottom: 10px;
}

.stats {
  display: flex;
  justify-content: space-around;
}

.stat-card {
  background-color: #ecf0f1;
  padding: 15px;
  border-radius: 10px;
  width: 45%;
  text-align: center;
}

.stat-card h3 {
  font-size: 1.2em;
  color: #2c3e50;
  margin-bottom: 10px;
}

.stat-card p {
  font-size: 1.5em;
  color: #16a085;
}

.recent-activities {
  margin-top: 20px;
}

.recent-activities h2 {
  font-size: 1.5em;
  color: #2c3e50;
  margin-bottom: 15px;
}

.recent-activities ul {
  list-style-type: none;
  padding: 0;
}

.recent-activities li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ecf0f1;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}

.activity-tenant {
  font-size: 1em;
  color: #2c3e50;
}

.activity-action {
  font-size: 1em;
  color: #7f8c8d;
}

.activity-status {
  font-size: 1em;
  padding: 5px 10px;
  border-radius: 5px;
}

.success {
  background-color: #2ecc71;
  color: #ffffff;
}

.late {
  background-color: #e74c3c;
  color: #ffffff;
}

.rent-tracking-link {
  text-decoration: none;
}

.rent-tracking {
  background-color: #2c3e50;
  padding: 20px;
  margin-top: 30px;
  text-align: center;
  border-radius: 10px;
  color: #ffffff;
}

.rent-tracking h2 {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.rent-tracking p {
  font-size: 1.2em;
  margin: 5px 0;
}

.rent-amount {
  font-size: 1.8em;
  font-weight: bold;
}
</style>
