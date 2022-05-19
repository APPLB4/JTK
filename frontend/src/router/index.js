import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../views/LandingPageView.vue'
import ListArticle from '../views/ListArticleView.vue'
import ProfilJurusan from '../views/ProfilJurusanView.vue'
import ArticleRead from '../views/ArticleReadView.vue'
import InfoKerjasama from '../views/InfoKerjasamaView.vue'
import Agenda from '../views/AgendaView.vue'
import TujuanKontak from '../views/TujuanKontakView.vue'

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
  },
  {
    path: '/ArticleRead/:id',
    name: 'ArticleRead',
    component: ArticleRead
  },
  {
    path: '/InfoKerjasama',
    name: 'InfoKerjasama',
    component: InfoKerjasama
  },
  {
    path: '/Agenda',
    name: 'Agenda',
    component: Agenda
  },
  {
    path: '/TujuanKontak',
    name: 'TujuanKontak',
    component: TujuanKontak
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  props: true 
})

export default router
