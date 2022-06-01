<template>
  <div class="bg-JTK">
    <Navbar />

    <div class="w-full pt-10 mb-10">
      <img
        class="w-full h-96"
        src="https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
        alt="blog"
      />
    </div>

    <hr class="mb-10" />

    <div class="container mx-auto">
      <!-- Body Gan -->
      <div>
        <div class="flex flex-wrap">
          <!-- Bagian Left Side Gan -->

          <div class="lg:w-3/4 sm:w-full lg:pr-20 sm:pr-0 ...">
            <h1 class="text-white font-semibold text-4xl mt-4 mb-24">
              {{ jurusan[0].judul }}
            </h1>
            <img
              v-bind:src="jurusan[0].media[0].url"
              style="max-width: 60%; height: auto"
              class="object-center mx-auto mb-10"
              alt=""
            />
            <p class="text-white text-justify">
              {{ jurusan[0].deskripsi }}
              <!-- &emsp;Jurusan Teknik Komputer dan Informatika Politeknik Negeri
              Bandung (lebih dikenal dengan singkatan JTK) merupakan jurusan
              penyelenggara pendidikan diploma bidang teknologi informasi
              pertama di Indonesia. Jurusan ini telah menyelenggarakan
              pendidikan D-3 bidang teknik komputer dan informatika sejak 1977
              dan pendidikan D-4 sejak 2009. Dengan daya tampung sekitar 96
              mahasiswa per tahun, sampai saat ini JTK telah menghasilkan lebih
              dari 2.500 alumni yang bekerja pada berbagai sektor industri, baik
              di dalam maupun di luar negeri. Selain menjalankan pendidikan, JTK
              juga menyelenggarakan penelitian dan pengabdian kepada masyarakat
              dalam bidang teknologi informasi. Sebagai jurusan pertama yang
              menyelenggarakan pendidikan profesional bidang teknologi
              informasi, JTK selalu dijadikan tolok ukur dan telah banyak
              memberikan bantuan teknis dan non-teknis kepada institusi lain
              maupun kepada masyarakat umum. Beberapa aktivitas yang sering
              dilakukan di antaranya adalah pembinaan institusi, pelatihan
              bidang TI, konsultasi pemanfaatan TI untuk menunjang kegiatan
              kerja, pengembangan sistem informasi, dan lab/bengkel komputer
              layanan masyarakat.
            </p>
            <p class="text-white text-justify">
              &emsp;JTK memiliki visi untuk menjadi jurusan unggulan dan
              terdepan di bidang pengkajian, penerapan dan pengembangan
              teknologi informasi, yang diakui baik di tingkat nasional maupun
              internasional. Visi ini dijabarkan ke dalam misi sebagai berikut:
              Menyelenggarakan pendidikan yang menghasilkan sumber daya manusia
              yang profesional dibidang teknologi informasi; Menyelenggarakan
              program penelitian yang menghasilkan produk unggulan dibidang
              teknologi informasi; Meningkatkan pemanfaatan teknologi informasi
              di lingkungan internal maupun lingkungan eksternal (industri,
              pemerintah dan masyarakat umum); Menjadi tempat bagi sivitas
              akademika untuk saling bertukar gagasan dalam lingkungan yang
              kondusif.
            </p> -->
            </p>
          </div>

          <!-- Bagian Right Side Gan ------------------------------------------------------------------------------------------------------------------------------------------------>
          <div class="lg:w-1/4 sm:w-full ...">
            <section class="mb-4">
              <div class="border-l-2 pl-4">
                <h1
                  class="text-white flex flex-wrap font-semibold text-2xl pt-5 mb-10"
                >
                  Artikel Lainnya
                </h1>

                <div v-for="(tag, index) in article.slice(0, 4)" :key="tag">
                  <router-link
                    :to="{
                      name: 'ArticleRead',
                      params: {
                        id: index,
                        judul: 'article',
                        image: article[index].article_medias[0].media.url,
                        deskripsi: tag.deskripsi,
                      },
                    }"
                  >
                    <div class="flex mb-10 bg-white">
                      <img
                        class="mr-4 min-h-0 min-w-0 float-left w-full"
                        v-bind:src="article[index].article_medias[0].media.url"
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
  components: { Footer, Navbar },

  data() {
    return {
      article: [],
      jurusan: [],
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
      .get("jurusans")
      .then((response) => {
        this.jurusan = response.data;
        // console.log(response.data)
      })
      .catch((error) => console.log(error));
    axios
      .get("articles")
      .then((response) => {
        this.article = response.data;
        // console.log(response.data)
      })
      .catch((error) => console.log(error));
  },
  methods: {},
});
</script>
