import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../views/Main.vue'
import SelectedItems from '../views/SelectedItems.vue'
import SelectItems from '../views/SelectItems.vue'
import SelectSelectedItems from '../views/SelectSelectedItems.vue'

import InfoItems from '../views/InfoItems.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Главная',
    component: Main
  },
  {
    path: '/selected-items',
    name: 'Компонент отображения выбранных элементов',
    component: SelectedItems
  },

  {
    path: '/select-items',
    name: 'Компонент выбора элементов',
    component: SelectItems
  },
  {
    path: '/select-selected-items',
    name: 'Объединение компонентов SelectItems и SelectedItems',
    component: SelectSelectedItems
  },
  {
    path: '/information-items',
    name: 'Отчет по элементам',
    component: InfoItems
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
