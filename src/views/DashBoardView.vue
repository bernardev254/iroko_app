<template>
  <div class="dashboard-view">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="logo">
        <h2>IROKO</h2>
      </div>
      <nav class="nav">
        <a href="https://forms.gle/Wwrnvs8fsXAHpFvF9" class="nav-item" target="_blank" rel="noopener noreferrer">Add Property</a>
        <router-link to="/rent-tracking" class="nav-item">track rent</router-link>
        <router-link to="/invoicing" class="nav-item">Invoicing</router-link>
        <router-link to="/reminders" class="nav-item">Reminders</router-link>
        <router-link to="/issues-response" class="nav-item">Issues</router-link>
        
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="main-content">
      <!-- Top Header -->
      <header class="dashboard-header">
        <h1>Welcome {{user}}</h1>
        <div class="user-info">
          <p>Westlink properties</p>
          <p>P id: 2</p>
        </div>
      </header>

      <!-- Statistics Cards -->
      <section class="stats">
        <div class="stat-card">
          <h3>Total Property</h3>
          <p>{{totalProp}}</p>
        </div>
        <div class="stat-card">
          <h3>Total Tenant</h3>
          <p>{{tenants}}</p>
        </div>
        <div class="stat-card">
          <h3>Total Rent Collected</h3>
          <p>Ksh {{tenants * 6500}}</p>
        </div>
      </section>

      <!-- Recent Activities and Rent Tracking -->
      <section class="dashboard-details">
        <div class="recent-activities">
          <h2>Recent Activities</h2>
          <ul>
            <p v-if="recentActivities.length === 0">No recent activities yet.</p>
            <li v-else v-for="(activity, index) in recentActivities" :key="index">
              <div class="activity-tenant">{{ activity.tenant }}</div>
              <div class="activity-action">{{ activity.action }}</div>
              <div :class="{'activity-status': true, 'success': activity.status === 'Payment notification', 'late': activity.status === 'Late payment'}">
                {{ activity.status }}
              </div>
            </li>
          </ul>
        </div>

        <div class="rent-tracking">
          <h2>Rent Tracking</h2>
          <p>Total Rent Collected</p>
          <p class="rent-amount">Ksh {{tenants * 6500}}</p>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'DashboardView',
  data() {
    return {
      totalProp: 0,
      tenants: 0,
      rentAmount: 0,
      recentActivities: [],
      recentActivities1: [
        { tenant: 'Kamau G.K', action: 'Payment notification', status: 'Payment notification' },
        { tenant: 'Alice Makau', action: 'Payment notification', status: 'Payment notification' },
        { tenant: 'Tyler Susan', action: 'Payment notification', status: 'Payment notification' },
        { tenant: 'Michael J.', action: 'Late payment', status: 'Late payment' },
      ],
    };
  },
  methods: {
    // Method to update the totals and recent activities
    updateDashboard(properties, tenants, rent, activities) {
      this.totalProperties = properties;
      this.totalTenants = tenants;
      this.totalRent = rent;
      this.recentActivities = activities;
    }
  },
  created() {
    // Simulate fetching data from an API or other source
    // This is where you would make your API call to get the initial data
    this.updateDashboard(0, 0, 0, []);
  }
};
</script>

<style scoped>
.dashboard-view {
  display: flex;
  height: 100vh;
  background-color: #f5f5f5;
}

.sidebar {
  width: 250px;
  background-color: #2c3e50;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  margin-bottom: 30px;
  color: #ffffff;
}

.nav {
  width: 100%;
  height: 100%;
}

.nav-item {
  display: block;
  padding: 15px;
  color: #ffffff;
  text-decoration: none;
  margin-bottom: 10px;
  border-radius: 5px;
}

.nav-item:hover {
  background-color: #34495e;
}

.main-content {
  flex: 1;
  padding: 20px;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.dashboard-header h1 {
  font-size: 2.5em;
  color: #2c3e50;
}

.user-info {
  text-align: right;
  color: #7f8c8d;
}

.stats {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}

.stat-card {
  flex: 1;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-right: 20px;
}

.stat-card:last-child {
  margin-right: 0;
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

.dashboard-details {
  display: flex;
  justify-content: space-between;
}

.recent-activities,
.rent-tracking {
  flex: 1;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-right: 20px;
}

.recent-activities:last-child,
.rent-tracking:last-child {
  margin-right: 0;
}

.recent-activities h2,
.rent-tracking h2 {
  margin-bottom: 20px;
  font-size: 1.5em;
  color: #2c3e50;
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

.rent-amount {
  font-size: 2em;
  font-weight: bold;
  color: #16a085;
}
</style>
