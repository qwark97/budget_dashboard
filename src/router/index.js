import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import ExpenseAddingPage from '../components/ExpensesAddingPage.vue'
import CategoriesPage from '../components/CategoriesPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/add-expense',
    name: 'ExpenseAddingPage',
    component: ExpenseAddingPage
  },
  {
    path: '/categories',
    name: 'CategoriesPage',
    component: CategoriesPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
