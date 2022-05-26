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
            <h1 class="text-white font-semibold text-5xl mt-4 mb-24">Prodi</h1>
            <div class="grid grid-cols-8">
              <div class="col-start-3 col-end-9 ml-4">
                <div class="flex flex-row">
                  <button class="bg-second p-2 px-4 mr-4"  @click="deskripsi = 'visimisi'">
                    <p class="text-white text-center">Visi misi</p>
                  </button>
                  <button class="bg-second p-2 px-4 mr-4" @click="deskripsi = 'profillulusan'">
                    <p class="text-white text-center">Profil Jurusan</p>
                  </button>

                </div>
              </div>

              <div class="col-start-1 col-end-3 mt-4">
                <div class="">
                  <button class="bg-second p-2 mr-4 w-full mb-4"  @click="prodi = article[0].namaprodi">
                    <p class="text-white text-center">
                      D3 - Teknik Informatika
                    </p>
                  </button>
                  <button class="bg-second p-2 mr-4 w-full mb-4" @click="prodi = article[1].namaprodi">
                    <p class="text-white text-center">
                      D4 - Teknik Informatika
                    </p>
                  </button>
                </div>
              </div>

              <div class="col-start-3 col-end-9 border-4">
                <div
                v-for="tag in article"
                :key = "tag">

                <div
                v-show="prodi == tag.namaprodi">

                <div
                 v-show="deskripsi == 'visimisi'">
                  <h1 class=" text-5xl mb-10 font-serif">
                    {{tag.namaprodi}}
                  </h1>
                  <h1 class=" text-justify">
                    {{tag.visimisi}}
                  </h1>
                </div>

                <div
                 v-show="deskripsi == 'profillulusan'">
                   <h1 class=" text-5xl mb-10 font-serif">
                    {{tag.namaprodi}}
                  </h1>
                  <h1 class=" text-justify">
                    {{tag.profillulusan}}
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
                  class="
                    text-white
                    flex flex-wrap
                    font-semibold
                    text-2xl
                    pt-5
                    mb-10
                  "
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
                          class="
                            text-indigo-900
                            tracking-widest
                            text-md
                            title-font
                            font-medium
                            text-gray-400
                            mb-1
                          "
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
      articlee:[],
      prodi : [],
      deskripsi : {},
      
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
    changeprodi(){

    },
    changedeskripsi(){
      
    }

  },
});
</script>
