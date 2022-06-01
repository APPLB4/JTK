<template>
  <div>
    <div class="absolute navbar-transparent z-10 w-full shadow-sm">
      <!-- Navbar -->
      <div class="flex items-center justify-between px-4 py-2 sm:p-0">
        <a href="/">
          <img
            class="img-logo"
            style="max-width: 80%; height: auto"
            src="/img/logo-polban.png"
          />
        </a>
        <div class="sm:hidden">
          <button
            @click="isOpen = !isOpen"
            type="button"
            class="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
          >
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                v-if="isOpen"
                fill-rule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
              <path
                v-if="!isOpen"
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>

        <nav
          :class="isOpen ? 'block' : 'hidden'"
          class="px-2 mr-4 sm:flex sm:p-0"
        >
          <a
            href="/"
            class="dropdown navlist relative inline-block block flex items-center justify-center p-3 text-white font-lato font-semibold rounded mx-3"
          >
            <div class="text-white">Home</div>
          </a>
          <a
            href="/Gallery"
            class="dropdown navlist relative inline-block block flex items-center justify-center p-3 text-white font-lato font-semibold rounded mx-3"
          >
            <div class="text-white">Gallery</div>
          </a>
          <a
            href="/"
            class="dropdown navlist relative inline-block block flex items-center justify-center p-3 text-white font-lato font-semibold rounded mx-3"
          >
            <div class="text-white">Profil</div>
            <div class="dropdown-content absolute hidden">
              <a href="/ProfilPegawai">Pegawai</a>
              <a href="/ProfilProdi">Prodi</a>
              <a href="/ProfilJurusan">Jurusan</a>
              <a href="/TracerStudy">Tracer Studi</a>
            </div>
          </a>
          <a
            href="/"
            class="dropdown navlist relative inline-block block flex items-center justify-center p-3 text-white font-lato font-semibold rounded mx-3"
          >
            <div class="text-white">Akademik</div>
            <div class="dropdown-content absolute hidden">
              <a href="/Kurikulum">Kurikulum</a>
              <a href="/Prestasi">Prestasi</a>
            </div>
          </a>
          <a
            href="/Fasilitas"
            class="dropdown navlist relative inline-block block p-3 flex items-center justify-center text-white font-lato font-semibold rounded mx-3"
          >
            <div class="text-white">Fasilitas</div>
          </a>
          <a
            href="/Agenda"
            class="dropdown navlist relative inline-block block flex items-center justify-center p-3 text-white font-lato font-semibold rounded mx-3"
          >
            <div class="text-white">Agenda</div>
          </a>
          <a
            class="dropdown navlist relative inline-block flex items-center justify-center block py-3 px-1 text-white font-lato font-semibold rounded mx-1"
            style="white-space: nowrap"
          >
            <router-link
              :to="{
                name: 'InfoKerjasama',
                params: {
                  id: 0,
                  judul: article[0].judul,
                  image: article[0].media[0].url,
                  deskripsi: article[0].deskripsi,
                },
              }"
            >
              <div class="text-white">Kerja Sama</div>
            </router-link>
          </a>
          <a
            href="/TujuanKontak"
            class="dropdown navlist relative inline-block block flex items-center justify-center p-3 text-white font-lato font-semibold rounded ml-3 mr-8"
          >
            <div class="text-white">Kontak</div>
          </a>
        </nav>
      </div>
    </div>
    <div class="bg-header"></div>
  </div>
</template>

<style scoped>
.navlist:hover {
  background: rgba(0, 0, 0, 0.4);
  border-bottom: 1px solid rgba(255, 255, 255, 1);
}

.navlist {
  transition: background 0.2s ease-in-out;
}

.bg-header {
  background: #142e46;
  height: 75px;
}

.dropdown-content a:hover {
  background: rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  transition: background 0.2s ease-in-out;
}

.dropdown-content {
  background: #f1f1f1;
  top: 100%;
  left: 0;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block !important;
}

.navbar-transparent {
  background: rgba(255, 255, 255, 0);
}

.img-logo {
  height: auto;
  width: auto;
  max-height: 72px;
  max-width: 250px;
}

.search-container {
  height: 260px;
  background: #142e46;
}
.email-subscribe-btn {
  width: 80px;
  height: 38px;
  background: #8d5cf6;
  border: 0.3px solid #142e46;
  box-sizing: border-box;
  border-radius: 5px;
  transition: background 0.1s ease-in-out;
}

.email-subscribe-btn:hover {
  background: #8d5cf6;
}

.email-input-box {
  width: 250px;
  height: 38px;
  background: #f7f7f7;
  border: 1px solid #142e46;
  box-sizing: border-box;
  border-radius: 5px;
}
</style>

<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  name: "Navbar",
  props: ["isTransparent"],

  data() {
    return {
      // CMS_API: process.env.VUE_APP_CMS_API,
      // navbarList: [],
      // logoHeader: [],
      isOpen: false,
      state: "close",
      scrollPosition: 0,
      article: [],
    };
  },
  // created() {
  //   this.fetchData();
  // },
  methods: {
    // async fetchData() {
    //   const navbarList = await axios.get(this.CMS_API + "/navigation-menu");
    //   const logoHeader = await axios.get(this.CMS_API + "/logo-header");
    //   this.navbarList = navbarList.data;
    //   this.logoHeader = logoHeader.data;
    // },
  },
  mounted() {
    axios
      .get("kerjasamas")
      .then((response) => {
        this.article = response.data;
        console.log(this.article[0].judul);
      })
      .catch((error) => console.log(error));
  },
});
</script>
