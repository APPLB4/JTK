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
          <!-- Bagian Left Side Gan -->

          <div class="mb-10 text-white lg:w-3/4 sm:w-full lg:pr-20 sm:pr-0 ...">
            <h1 class="text-white font-semibold text-5xl mb-24">Prodi</h1>
            <div class="grid grid-cols-8">
              <div class="col-start-3 col-end-9 ml-4">
                <div class="flex flex-row">
                  <button
                    class="p-2 px-4 mr-4"
                    @click="
                      changeClicked('VM');
                      deskripsi = 'visimisi';
                    "
                    v-bind:class="{
                      ungu: !clickedVisiMisi,
                      unguTua: clickedVisiMisi,
                    }"
                  >
                    <p class="text-white text-center mb-0">Visi misi</p>
                  </button>
                  <button
                    class="p-2 px-4 mr-4"
                    @click="
                      changeClicked('PL');
                      deskripsi = 'profillulusan';
                    "
                    v-bind:class="{
                      ungu: !clickedProfilLulusan,
                      unguTua: clickedProfilLulusan,
                    }"
                  >
                    <p class="text-white text-center mb-0">Profil Lulusan</p>
                  </button>
                </div>
              </div>

              <div class="col-start-1 col-end-3 mt-4">
                <div class="">
                  <button
                    class="p-2 mr-4 w-full mb-4"
                    @click="
                      changeClicked('D3');
                      prodi = article[0].namaprodi;
                    "
                    v-bind:class="{ ungu: !clickedD3, unguTua: clickedD3 }"
                  >
                    <p class="text-white text-center mb-0">
                      D3 - Teknik Informatika
                    </p>
                  </button>

                  <button
                    class="p-2 mr-4 w-full mb-4"
                    @click="
                      changeClicked('D4');
                      prodi = article[1].namaprodi;
                    "
                    v-bind:class="{ ungu: !clickedD4, unguTua: clickedD4 }"
                  >
                    <p class="text-white text-center mb-0">
                      D4 - Teknik Informatika
                    </p>
                  </button>
                </div>
              </div>

              <div class="col-start-3 col-end-9 border-4">
                <div class="m-7" v-for="tag in article" :key="tag">
                  <div v-show="prodi == tag.namaprodi">
                    <div v-show="deskripsi == 'visimisi'">
                      <h1 class="text-5xl mb-10 font-serif">
                        {{ tag.namaprodi }}
                      </h1>
                      <h1 class="text-justify">
                        {{ tag.visimisi }}
                      </h1>
                    </div>

                    <div v-show="deskripsi == 'profillulusan'">
                      <h1 class="text-5xl mb-10 font-serif">
                        {{ tag.namaprodi }}
                      </h1>
                      <h1 class="text-justify">
                        {{ tag.profillulusan }}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

                <div v-for="(tag, index) in articlee.slice(0, 4)" :key="tag">
                  <router-link
                    :to="{
                      name: 'ArticleRead',
                      params: {
                        id: index,
                        judul: 'article',
                        image: articlee[index].article_medias[0].media.url,
                        deskripsi: tag.deskripsi,
                      },
                    }"
                  >
                    <div class="flex mb-10 bg-white">
                      <img
                        class="mr-4 min-h-0 min-w-0 float-left w-full"
                        v-bind:src="articlee[index].article_medias[0].media.url"
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

<style scoped>
.ungu {
  background-color: rgb(139 92 246);
}
.unguTua {
  background-color: rgb(91 33 182);
}
</style>

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
      clicked: false,
      clickedVisiMisi: true,
      clickedProfilLulusan: false,
      clickedD3: true,
      clickedD4: false,
      articlee: [],
      prodi: "D3 Teknik Informatika",
      deskripsi: "visimisi",
    };
  },
  mounted() {
    axios
      .get("prodis")
      .then((response) => {
        this.article = response.data;
        // console.log(response.data)
      })
      .catch((error) => console.log(error));
    axios
      .get("articles")
      .then((response) => {
        this.articlee = response.data;
        // console.log(response.data)
      })
      .catch((error) => console.log(error));
  },
  methods: {
    changeprodi() {},
    changedeskripsi() {},
    changeClicked(value) {
      console.log(this.article[1].namaprodi);
      let keyword = value;
      console.log(keyword);
      if (keyword == "VM") {
        this.clickedVisiMisi = true;
        this.clickedProfilLulusan = false;
      } else if (keyword == "PL") {
        this.clickedVisiMisi = false;
        this.clickedProfilLulusan = true;
      } else if (keyword == "D3") {
        this.clickedD3 = true;
        this.clickedD4 = false;
      } else {
        this.clickedD3 = false;
        this.clickedD4 = true;
      }
    },
  },
});
</script>
