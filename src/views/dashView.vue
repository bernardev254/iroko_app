<template>
  <div class="dashboard">
    <header>
      <h1>Welcome, Karaba</h1>
    </header>
    <div class="stats">
      <div class="stat">
        <h3>Total Property</h3>
        <p>4</p>
      </div>
      <div class="stat">
        <h3>Total Tenant</h3>
        <p>10</p>
      </div>
    </div>
    <div class="recent-activities">
      <h2>Recent Activities</h2>
      <ul>
        <li v-for="activity in activities" :key="activity.id">
          <p>{{ activity.tenant }}</p>
          <p>{{ activity.action }}</p>
          <p>{{ activity.status }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activities: [
        { id: 1, tenant: 'Kamau G.K', action: 'Payment notification', status: 'Paid' },
        { id: 2, tenant: 'Alice Makau', action: 'Payment notification', status: 'Pending' },
        // ... other activities
      ]
    }
  }
}
</script>

<style scoped>
.dashboard {
  padding: 20px;
}
header {
  text-align: center;
}
.stats {
  display: flex;
  justify-content: space-around;
}
.stat {
  text-align: center;
}
.recent-activities {
  margin-top: 20px;
}
</style>