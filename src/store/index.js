import { createStore } from 'vuex';

export default createStore({
  state: {
    user: null,
    payments: [],
    reminders: [],
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    addPayment(state, payment) {
      state.payments.push(payment);
    },
    setReminders(state, reminders) {
      state.reminders = reminders;
    },
  },
  actions: {
    fetchUser({ commit }, userId) {
      // Simulate an API call to fetch user data
      const user = { id: userId, name: 'John Doe' };
      commit('setUser', user);
    },
    addPayment({ commit }, payment) {
      // Simulate an API call to add a payment
      commit('addPayment', payment);
    },
    fetchReminders({ commit }) {
      // Simulate an API call to fetch reminders
      const reminders = [{ text: 'Pay rent', dueDate: '2024-08-10' }];
      commit('setReminders', reminders);
    },
  },
  getters: {
    user: state => state.user,
    payments: state => state.payments,
    reminders: state => state.reminders,
  },
});
