<template>
  <div class="bg-JTK">
    <Navbar />

    <div class="w-full pt-1 mb-1">
      <img class="w-full h-102" src="/img/jurusan.jpg" alt="blog" />
    </div>

    <hr class="mb-10" />

    <!-- component -->
    <section class="text-gray-600 body-font mt-2">
      <div class="container px-5 pt-2 mx-auto mb-10">
        <div>
          <h1 class="text-white mb-1 font-semibold text-4xl">Agenda</h1>
        </div>
        <div>
          <a href="#">
            <h1 class="mb-10 text-xl text-right" style="color: #8d5cf6">
              Kalender Akademik
            </h1>
          </a>
        </div>

        <div class="flex flex-wrap -m-4">
          <div class="p-4 md:w-1/3" v-for="(tag, index) in article" :key="tag">
            <router-link
              :to="{
                name: 'ArticleRead',
                params: {
                  id: index,
                  judul: 'Agenda',
                  image: article[index].kegiatan_medias[0].media.url,
                  deskripsi: tag.deskripsi,
                },
              }"
            >
              <div
                class="h-full rounded shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden"
              >
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                  v-bind:src="article[index].kegiatan_medias[0].media.url"
                />
                <div class="p-6">
                  <h1 class="title-font text-lg font-medium text-gray-600 mb-3">
                    {{ tag.judul }}
                  </h1>

                  <div class="flex items-center flex-wrap">
                    <button
                      class="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md shadow-cla-blue px-4 py-1 rounded-lg outline-second"
                    >
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <div class="flex items-center space-x-1 justify-center my-10">
      <a
        href="#"
        class="flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md"
      >
        Previous
      </a>

      <a
        href="#"
        class="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white"
      >
        1
      </a>
      <a
        href="#"
        class="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white"
      >
        2
      </a>
      <a
        href="#"
        class="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white"
      >
        3
      </a>
      <a
        href="#"
        class="px-4 py-2 font-bold text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white"
      >
        Next
      </a>
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
  components: { Navbar, Footer },

  data() {
    return {
      article: [],
    };
  },
  mounted() {
    axios
      .get("kegiatans")
      .then((response) => {
        this.article = response.data;
        // console.log(response.data)
      })
      .catch((error) => console.log(error));
  },
});
</script>
