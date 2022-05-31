<template>
  <div class="bg-JTK">
    <Navbar />

    <hr class="mb-10" />

    <div class="container mx-auto">
      <!-- Body Gan -->
      <div>
        <div class="flex flex-wrap text-white" style="height: 600px">
          <!-- Bagian Left Side Gan -->

          <div class="lg:w-1/4 sm:w-full sm:pr-0 ...">
            <img
              src="/img/blankpicture.png"
              style="max-width: 60%; height: auto"
              class="object-center mx-auto mb-10"
              alt=""
            />
          </div>

          <!-- Bagian Right Side Gan ------------------------------------------------------------------------------------------------------------------------------------------------>
          <div class="lg:w-1/4 sm:w-full ...">
            <section class="mb-4">
              <div class="border-l-2 pl-4">Nama :</div>
              <div class="border-l-2 pl-4">Nip :</div>
              <div class="border-l-2 pl-4">Gender :</div>
              <div class="border-l-2 pl-4">Jabatan :</div>
              <div class="border-l-2 pl-4">Kontak :</div>
              <div class="border-l-2 pl-4">Matakuliah yang diampu :</div>
              <div class="border-l-2 pl-4">Pengalaman :</div>
              <div class="border-l-2 pl-4">Publikasi :</div>
            </section>
          </div>
          <div class="lg:w-2/4 sm:w-full ...">
            <section class="mb-4">
              <div class="border-l-2 pl-4">:</div>
              <div class="border-l-2 pl-4">:</div>
              <div class="border-l-2 pl-4">:</div>
              <div class="border-l-2 pl-4">:</div>
              <div class="border-l-2 pl-4">:</div>
              <div class="border-l-2 pl-4">:</div>
              <div class="border-l-2 pl-4">: {{ article[0].pengalaman }}</div>
              <div class="border-l-2 pl-4">:</div>
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
      .get("dosens")
      .then((response) => {
        this.article = response.data;
        // console.log(response.data)
      })
      .catch((error) => console.log(error));
  },
  methods: {},
});
</script>
