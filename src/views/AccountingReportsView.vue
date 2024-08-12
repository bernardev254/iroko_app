<template>
  <div class="accounting-reports-view">
    <header class="reports-header">
      <h2>Accounting Reports</h2>
      <button @click="linkWithQuickBooks" class="btn btn-primary">Link with QuickBooks</button>
    </header>

    <section class="reports-content">
      </section>
  </div>
</template>

<script>
export default {
  name: 'AccountingReportsView',
  methods: {
    linkWithQuickBooks() {
      // Logic for linking with QuickBooks
      alert('QuickBooks integration not yet implemented!');
    },
  },
};
</script>

<style scoped>
.accounting-reports-view {
  padding: 20px;
  background-color: #ffffff;
}

.reports-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

h2 {
  font-size: 1.8em;
  color: #2c3e50;
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

.reports-content {
  text-align: center;
}

.reports-image {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}
</style>
