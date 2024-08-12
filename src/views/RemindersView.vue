<template>
  <div class="reminders-view">
    <header class="reminders-header">
      <h2>Reminders</h2>
      <button @click="addReminder" class="btn btn-primary">Set reminder</button>
    </header>

    <section class="reminders-list">
      <ul>
        <li v-for="(reminder, index) in reminders" :key="index" :class="{'overdue': reminder.isOverdue}">
          <div class="reminder-details">
            <h3>{{ reminder.tenant }}</h3>
            <p>{{ reminder.message }}</p>
          </div>
          <div class="reminder-date">{{ reminder.date }}</div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'RemindersView',
  data() {
    return {
      reminders: [
        { tenant: 'James Kinyua', message: 'Rent is due in 2 days', date: '12/08/2024', isOverdue: false },
        { tenant: 'Onesmus Murkomen', message: 'Your rent is overdue', date: 'Yesterday', isOverdue: true },
        { tenant: 'Susan Selby', message: 'Water bill not cleared', date: '11/08/2024', isOverdue: false },
      ],
    };
  },
  methods: {
    addReminder() {
      // Logic for adding a new reminder
      alert('Reminder functionality not yet implemented!');
    },
  },
};
</script>

<style scoped>
.reminders-view {
  padding: 20px;
  background-color: #ffffff;
}

.reminders-header {
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

.reminders-list ul {
  list-style-type: none;
  padding: 0;
}

.reminders-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ecf0f1;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
}

.reminder-details {
  font-size: 1em;
  color: #2c3e50;
}

.reminder-details h3 {
  font-size: 1.2em;
  margin: 0 0 5px;
}

.reminder-details p {
  margin: 0;
}

.reminder-date {
  font-size: 1em;
  color: #7f8c8d;
}

.overdue {
  background-color: #e74c3c;
  color: #ffffff;
}
</style>
