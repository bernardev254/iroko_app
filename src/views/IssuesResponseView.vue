<template>
  <div class="issues-response-view">
    <header class="issues-header">
      <h2>Issues Response</h2>
    </header>

    <section class="system-health">
      <div class="system-health-status">
        <p>System Health</p>
        <p class="health-percentage">100%</p>
      </div>
    </section>

    <section class="issues-summary">
      <div class="issues-card resolved">
        <p class="issues-number">{{ issuesResolved }}</p>
        <p>Issues Resolved</p>
      </div>
      <div class="issues-card failed">
        <p class="issues-number">{{ issuesFailed }}</p>
        <p>Failed</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IssuesResponseView',
  data() {
    return {
      issuesResolved: 0,
      issuesFailed: 0,
    };
  },
};
</script>

<style scoped>
.issues-response-view {
  padding: 20px;
  background-color: #ffffff;
}

.issues-header {
  margin-bottom: 20px;
  text-align: center;
}

h2 {
  font-size: 1.8em;
  color: #2c3e50;
}

.system-health {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2ecc71;
  color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.system-health-status p {
  margin: 0;
  font-size: 1.5em;
}

.health-percentage {
  font-size: 2.5em;
  font-weight: bold;
}

.issues-summary {
  display: flex;
  justify-content: space-between;
}

.issues-card {
  flex: 1;
  padding: 20px;
  margin-right: 10px;
  background-color: #ecf0f1;
  color: #2c3e50;
  text-align: center;
  border-radius: 10px;
}

.issues-card:last-child {
  margin-right: 0;
}

.issues-card.resolved {
  background-color: #3498db;
  color: #ffffff;
}

.issues-card.failed {
  background-color: #e74c3c;
  color: #ffffff;
}

.issues-number {
  font-size: 2.5em;
  margin: 0 0 10px;
  font-weight: bold;
}
</style>
