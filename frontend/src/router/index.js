import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../views/LandingPageView.vue'
import ListArticle from '../views/ListArticleView.vue'
import ProfilJurusan from '../views/ProfilJurusanView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/Article',
    name: 'ListArticle',
    component: ListArticle
  },
  {
    path: '/ProfilJurusan',
    name: 'ProfilJurusan',
    component: ProfilJurusan
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  props: true 
})

export default router
