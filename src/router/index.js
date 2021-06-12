import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import About from '../views/About.vue'
import Sources from '../views/Sources.vue'
import Contact from '../views/Contact.vue'
import Results from '../views/Results.vue'

// Vue.use(vueRouter);

const routes = [
  {
    path: '/',
    name: 'Search',
    component: Search
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/sources',
    name: 'Sources',
    component: Sources
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/results',
    name: 'Results',
    component: Results
  }

  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../views/About.vue')
  //   }
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
