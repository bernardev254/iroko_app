//import Vue from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import WelcomeView from '@/views/WelcomeView.vue';
import SignInView from '@/views/SignInView.vue';
import SignUpView from '@/views/SignUpView.vue';
import DashBoardView from '@/views/DashBoardView.vue';
import RentTrackingView from '@/views/RentTrackingView.vue';
import RemindersView from '@/views/RemindersView.vue';
import AccountingReportsView from '@/views/AccountingReportsView.vue';
import IssuesResponseView from '@/views/IssuesResponseView.vue';
import PaymentView from '@/views/PaymentView.vue';
import AddPropertyView from '@/views/AddPropertyView.vue';

const routes = [
    { path: '/', component: WelcomeView },
    { path: '/sign-in', component: SignInView },
    { path: '/sign-up', component: SignUpView },
    { path: '/dashboard', component: DashBoardView },
    { path: '/rent-tracking', component: RentTrackingView },
    { path: '/reminders', component: RemindersView },
    { path: '/accounting-reports', component: AccountingReportsView },
    { path: '/issues-response', component: IssuesResponseView },
    { path: '/payment', component: PaymentView },
    { path: '/add-property', component: AddPropertyView },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;
