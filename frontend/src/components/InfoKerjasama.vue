<template>
  <div class="bg-JTK">
    <Navbar />

    <div class="w-full pt-1 mb-1">
      <img class="w-full h-102" src="/img/jurusan.jpg" alt="blog" />
    </div>

    <hr class="mb-10" />

    <div class="container mx-auto">
      <!-- Body Gan -->
      <div>
        <div class="flex flex-wrap">
          <!-- Bagian Right Side Gan ------------------------------------------------------------------------------------------------------------------------------------------------>
          <div class="lg:w-1/4 pr-4 sm:w-full ...">
            <section class="mb-4">
              <div class="border-r-2 pr-4">
                <h1
                  class="text-white flex flex-wrap font-semibold text-2xl pt-5 mb-10"
                >
                  List Kerja Sama
                </h1>

                <div v-for="(tag, index) in article.slice(0, 4)" :key="tag">
                  <router-link
                    :to="{
                      name: 'InfoKerjasama',
                      params: {
                        id: index,
                        judul: tag.judul,
                        image: article[index].media[0].url,
                        deskripsi: tag.deskripsi,
                      },
                    }"
                  >
                    <div class="flex mb-10 bg-white">
                      <img
                        class="mr-4 min-h-0 min-w-0 float-left w-48"
                        v-bind:src="article[index].media[0].url"
                      />

                      <div>
                        <h2
                          class="text-indigo-900 tracking-widest text-md title-font font-medium text-gray-400 mb-1"
                        >
                          {{ tag.judul }}
                        </h2>
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
            </section>
          </div>

          <!-- Bagian Left Side Gan -->

          <div class="lg:w-3/4 sm:w-full pl-5 lg:pr-20 sm:pr-0 ...">
            <h1 class="text-white font-semibold text-5xl mt-4 mb-24">
              {{ $route.params.judul }}
            </h1>
            <img
              style="max-width: 60%; height: auto"
              class="object-center mx-auto mb-10"
              v-bind:src="$route.params.image"
              alt=""
            />
            <p class="text-white text-justify">
              {{ $route.params.deskripsi }}
              Jurusan Teknik Komputer dan Informatika Politeknik Negeri Bandung
              telah menjalin kerja sama dengan berbagai mitra, baik dari dalam
              negeri maupun luar negeri. Para mitra yang telah menjalin kerja
              sama dan hubungan baik dengan JTK Polban tersebut di antaranya
              dari kalangan pemerintah, perguruan tinggi, industri, perusahaan
              swasta, dan asosiasi atau yayasan. Selain kerja sama kemitraan,
              JTK Polban juga menjalin kerja sama di bidang pendidikan,
              penelitian, dan pengabdian kepada masyarakat bagi civitas
              akademika JTK Polban yang diimplementasikan melalui program riset
              kolaborasi (joint research program), pertukaran mahasiswa (student
              exchange program), dan program magang (internship program).
            </p>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Footer from "./Footer.vue";
import Navbar from "./Navbar.vue";
import axios from "axios";

export default Vue.extend({
  name: "InfoKerjasama",
  components: { Footer, Navbar },

  data() {
    return {
      article: [],
      function() {
        const lang = localStorage.getItem("lang") || "en";
        return {
          lang: lang,
        };
      },
    };
  },
  mounted() {
    axios
      .get("kerjasamas")
      .then((response) => {
        this.article = response.data;
        // console.log(response.data)
      })
      .catch((error) => console.log(error));
  },
  methods: {},
});
</script>
