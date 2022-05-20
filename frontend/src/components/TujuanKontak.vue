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
            <h1 class="text-white font-semibold text-5xl mt-4 mb-24">
              Tujuan Kontak
            </h1>

            <div class="ml-12 mb-10">
              <div class="form-check mb-2">
                <input
                  class="
                    p-4
                    form-check-input
                    appearance-none
                    rounded-full
                    h-4
                    w-4
                    border border-gray-300
                    bg-white
                    checked:bg-red-600 checked:border-blue-600
                    focus:outline-none
                    transition
                    duration-200
                    mt-1
                    align-top
                    bg-no-repeat bg-center bg-contain
                    float-left
                    mr-2
                    cursor-pointer
                  "
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label
                  class="form-check-label inline-block text-gray-800"
                  for="flexRadioDefault1"
                >
                  <p class="text-white text-2xl">Beasiswa</p>
                  <p class="text-white text-2xl">
                    Pertanyaan mengenai Beasiswa
                  </p>
                </label>
              </div>
              <div class="form-check mb-2">
                <input
                  class="
                    p-4
                    form-check-input
                    appearance-none
                    rounded-full
                    h-4
                    w-4
                    border border-gray-300
                    bg-white
                    checked:bg-red-600 checked:border-blue-600
                    focus:outline-none
                    transition
                    duration-200
                    mt-1
                    align-top
                    bg-no-repeat bg-center bg-contain
                    float-left
                    mr-2
                    cursor-pointer
                  "
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label
                  class="form-check-label inline-block text-gray-800"
                  for="flexRadioDefault1"
                >
                  <p class="text-white text-2xl">Webmaster</p>
                  <p class="text-white text-2xl">
                    Pertanyaan mengenai Website JTK
                  </p>
                </label>
              </div>
              <div class="form-check mb-2">
                <input
                  class="
                    p-4
                    form-check-input
                    appearance-none
                    rounded-full
                    h-4
                    w-4
                    border border-gray-300
                    bg-white
                    checked:bg-red-600 checked:border-blue-600
                    focus:outline-none
                    transition
                    duration-200
                    mt-1
                    align-top
                    bg-no-repeat bg-center bg-contain
                    float-left
                    mr-2
                    cursor-pointer
                  "
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label
                  class="form-check-label inline-block text-gray-800"
                  for="flexRadioDefault1"
                >
                  <p class="text-white text-2xl">Kantor</p>
                  <p class="text-white text-2xl">Pertanyaan mengenai Kantor</p>
                </label>
              </div>
            </div>

            <div class="mb-6">
              <label
                for="large-input"
                class="
                  block
                  mb-2
                  text-sm
                  font-medium
                  text-white
                  dark:text-gray-300
                  text-3xl
                "
                >Nama
              </label>
              <input
                type="text"
                id="large-input"
                class="
                  block
                  w-3/4
                  p-4
                  text-gray-900
                  border border-gray-300
                  rounded-lg
                  bg-gray-50
                  sm:text-md
                  focus:ring-blue-500 focus:border-blue-500
                  dark:bg-gray-700
                  dark:border-gray-600
                  dark:placeholder-gray-400
                  dark:text-white
                  dark:focus:ring-blue-500
                  dark:focus:border-blue-500
                "
              />
            </div>

            <div class="mb-6">
              <label
                for="large-input"
                class="
                  block
                  mb-2
                  text-sm
                  font-medium
                  text-white
                  dark:text-gray-300
                  text-3xl
                "
                >Email
              </label>
              <input
                type="text"
                id="large-input"
                class="
                  block
                  w-3/4
                  p-4
                  text-gray-900
                  border border-gray-300
                  rounded-lg
                  bg-gray-50
                  sm:text-md
                  focus:ring-blue-500 focus:border-blue-500
                  dark:bg-gray-700
                  dark:border-gray-600
                  dark:placeholder-gray-400
                  dark:text-white
                  dark:focus:ring-blue-500
                  dark:focus:border-blue-500
                "
              />
            </div>

            <div class="mb-6">
              <label
                for="large-input"
                class="
                  block
                  mb-2
                  text-sm
                  font-medium
                  text-white
                  dark:text-gray-300
                  text-3xl
                "
                >Pesan
              </label>
              <input
                type="text"
                id="large-input"
                class="
                  block
                  w-full
                  h-96
                  p-4
                  text-gray-900
                  border border-gray-300
                  rounded-lg
                  bg-gray-50
                  sm:text-md
                  focus:ring-blue-500 focus:border-blue-500
                  dark:bg-gray-700
                  dark:border-gray-600
                  dark:placeholder-gray-400
                  dark:text-white
                  dark:focus:ring-blue-500
                  dark:focus:border-blue-500
                "
              />
            </div>

            <div class="text-center">
              <button
                class="
                  text-black
                  p-4
                  outline-white
                  rounded-xl
                  mb-10
                  bg-white
                  hover:bg-gray-500
                "
              >
                Kirim Pesan
              </button>
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
                  Alamat
                </h1>

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
                  Gegerkalong
                </h1>
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
  name: "ArticleRead",
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
      .get("languages?_locale=en")
      .then((response) => {
        this.article = response.data;
        // console.log(response.data)
      })
      .catch((error) => console.log(error));
  },
  methods: {},
});
</script>
