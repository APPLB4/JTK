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

          <div class="lg:w-3/4 sm:w-full lg:pr-20 sm:pr-0 ...">
            <h1 class="text-white font-semibold text-4xl mt-4 mb-24">
              Fasilitas
            </h1>
            <p class="text-white text-justify">
              <ul class="list-disc">
                <li>Laboratorium Database</li>
                <li>Laboratorium Media</li>
                <li>Laboratorium AI</li>
                <li>Laboratorium Teknologi</li>
                <li>Ruang Kelas</li>
                <li>Musholla</li>

              </ul>
            </p>
            <p class="text-white text-justify">
              &emsp;
            </p>
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
