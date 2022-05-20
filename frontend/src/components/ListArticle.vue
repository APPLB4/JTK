<template>
  <div class="bg-JTK">
    <Navbar />

    <div class="w-full pt-10">
      <img
        class="
          lg:h-48
          md:h-36
          w-full
          object-cover object-center
          scale-110
          transition-all
          duration-400
          hover:scale-100
        "
        src="https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
        alt="blog"
      />
    </div>

    <!-- component -->
    <section class="text-gray-600 body-font">
      <div class="container px-5 pt-10 mx-auto mb-10">
        <div>
          <h1 class="text-white mb-10 text-3xl">Article</h1>
        </div>

        <div class="flex flex-wrap -m-4">
          <div class="p-4 md:w-1/3" v-for="(tag, index) in article" :key="tag">
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
              <div
                class="
                  h-full
                  rounded
                  shadow-cla-blue
                  bg-gradient-to-r
                  from-indigo-50
                  to-blue-50
                  overflow-hidden
                "
              >
                <img
                  class="
                    lg:h-48
                    md:h-36
                    w-full
                    object-cover object-center
                    scale-110
                    transition-all
                    duration-400
                    hover:scale-100
                  "
                  v-bind:src="article[index].article_medias[0].media.url"
                />
                <div class="p-6">
                  <h1 class="title-font text-lg font-medium text-gray-600 mb-3">
                    {{ tag.judul }}
                  </h1>
                  <p class="leading-relaxed mb-3">
                    {{ tag.deskripsi.slice(0, 100) }}
                  </p>

                  <div class="flex items-center flex-wrap">
                    <button
                      class="
                        bg-gradient-to-r
                        from-cyan-400
                        to-blue-400
                        hover:scale-105
                        drop-shadow-md
                        shadow-cla-blue
                        px-4
                        py-1
                        rounded-lg
                        outline-second
                      "
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
        class="
          px-4
          py-2
          text-gray-700
          bg-gray-200
          rounded-md
          hover:bg-blue-400 hover:text-white
        "
      >
        1
      </a>
      <a
        href="#"
        class="
          px-4
          py-2
          text-gray-700
          bg-gray-200
          rounded-md
          hover:bg-blue-400 hover:text-white
        "
      >
        2
      </a>
      <a
        href="#"
        class="
          px-4
          py-2
          text-gray-700
          bg-gray-200
          rounded-md
          hover:bg-blue-400 hover:text-white
        "
      >
        3
      </a>
      <a
        href="#"
        class="
          px-4
          py-2
          font-bold
          text-gray-500
          bg-gray-300
          rounded-md
          hover:bg-blue-400 hover:text-white
        "
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
      .get("Articles")
      .then((response) => {
        this.article = response.data;
        // console.log(response.data)
      })
      .catch((error) => console.log(error));
  },
});
</script>
