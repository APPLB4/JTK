import Vue from "vue";
import VueRouter from "vue-router";
// import LandingPage from '../views/LandingPageView.vue'
import ListArticle from "../views/ListArticleView.vue";
import ProfilJurusan from "../views/ProfilJurusanView.vue";
import ProfilProdi from "../views/ProfilProdiView.vue";
import ArticleRead from "../views/ArticleReadView.vue";
import InfoKerjasama from "../views/InfoKerjasamaView.vue";
import Agenda from "../views/AgendaView.vue";
import TujuanKontak from "../views/TujuanKontakView.vue";
import Prestasi from "../views/PrestasiView.vue";
import ProfilPegawai from "../views/ProfilPegawaiView.vue";
import Fasilitas from "../views/FasilitasView.vue";
import Gallery from "../views/GalleryView.vue";
import Kurikulum from "../views/KurikulumView.vue";
import PegawaiDetail from "../views/PegawaiDetailView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "ListArticle",
    component: ListArticle,
  },
  // {
  //   path: '/Article',
  //   name: 'ListArticle',
  //   component: ListArticle
  // },
  {
    path: "/ProfilJurusan",
    name: "ProfilJurusan",
    component: ProfilJurusan,
  },
  {
    path: "/ProfilProdi",
    name: "ProfilProdi",
    component: ProfilProdi,
  },
  {
    path: "/ArticleRead/:id",
    name: "ArticleRead",
    component: ArticleRead,
  },
  {
    path: "/InfoKerjasama/:id?",
    name: "InfoKerjasama",
    component: InfoKerjasama,
  },
  {
    path: "/Agenda",
    name: "Agenda",
    component: Agenda,
  },
  {
    path: "/TujuanKontak",
    name: "TujuanKontak",
    component: TujuanKontak,
  },
  {
    path: "/Prestasi",
    name: "Prestasi",
    component: Prestasi,
  },
  {
    path: "/Kurikulum",
    name: "Kurikulum",
    component: Kurikulum,
  },
  {
    path: "/ProfilPegawai",
    name: "ProfilPegawai",
    component: ProfilPegawai,
  },
  {
    path: "/Fasilitas",
    name: "Fasilitas",
    component: Fasilitas,
  },
  {
    path: "/Gallery",
    name: "Gallery",
    component: Gallery,
  },
  {
    path: "/DetailPegawai",
    name: "PegawaiDetail",
    component: PegawaiDetail,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  props: true,
});

export default router;
