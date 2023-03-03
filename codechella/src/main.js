import { createApp } from 'vue'
import App from './App.vue'
require('@/assets/main.scss')

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBars, faTicket } from '@fortawesome/free-solid-svg-icons'
import { faTwitch, faWhatsapp, faInstagram, faTwitter  } from '@fortawesome/free-brands-svg-icons'

import {createWebHashHistory, createRouter } from 'vue-router';
import HomePage from '@/pages/HomePage.vue'
/* add icons to the library */
library.add(faBars,faInstagram,faTwitch,faTwitter,faWhatsapp,faTicket)

const routes = [
  {path: '/', component: HomePage},
  //{path: '/experience', component: AboutPage},
  //{path: '/sectionMap', component: AboutPage},
  //{path: '/info', component: AboutPage},
  //{path: '/tickets', component: AboutPage},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.mount('#app')

