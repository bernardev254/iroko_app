<template>
    <div class="dashboard-container">
      <h1>Dashboard</h1>
      <div class="stats-container">
        <div class="stat-item">
          <h3>Total Properties</h3>
          <p>{{ totalProperties }}</p>
        </div>
        <div class="stat-item">
          <h3>Total Tenants</h3>
          <p>{{ totalTenants }}</p>
        </div>
        <div class="stat-item">
          <h3>Total Rent</h3>
          <p>${{ totalRent }}</p>
        </div>
      </div>
      <div class="recent-activities">
        <h3>Recent Activities</h3>
        <p v-if="recentActivities.length === 0">No recent activities yet.</p>
        <ul v-else>
          <li v-for="activity in recentActivities" :key="activity.id">
            {{ activity.description }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        totalProperties: 0,
        totalTenants: 0,
        totalRent: 0,
        recentActivities: []
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
  .dashboard-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  h1 {
    text-align: center;
    color: #333;
  }
  
  .stats-container {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
  }
  
  .stat-item {
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 20px;
    background-color: #f9f9f9;
  }
  
  .recent-activities {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 20px;
    background-color: #f9f9f9;
  }
  
  .recent-activities h3 {
    margin-bottom: 10px;
  }
  
  .recent-activities p {
    color: #777;
  }
  
  .recent-activities ul {
    list-style-type: none;
    padding: 0;
  }
  
  .recent-activities li {
    margin-bottom: 10px;
  }
  </style>
  