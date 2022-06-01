<template>
  <div class="bg-JTK">
    <Navbar />
    <div class="w-full pt-1 mb-1">
      <img class="w-full h-102" src="/img/jurusan.jpg" alt="blog" />
    </div>

    <hr class="mb-10" />

    <div class="mx-24 mt-10 mb-10">
      <div>
        <h1 class="text-white text-4xl mb-4">Kurikulum</h1>
      </div>

      <div class="flex flex-row">
        <button
          class="px-8 mr-4 b-height"
          @click="
            clicked2020 = true;
            clicked2016 = false;
            choosedKurikulum = kurikulum[0];
          "
          v-bind:class="{
            ungu: !clicked2020,
            unguTua: clicked2020,
          }"
        >
          <p class="text-white text-center mb-0">Kurikulum 2020</p>
        </button>
        <button
          class="px-8 mr-4"
          @click="
            clicked2020 = false;
            clicked2016 = true;
            choosedKurikulum = kurikulum[1];
          "
          v-bind:class="{
            ungu: !clicked2016,
            unguTua: clicked2016,
          }"
        >
          <p class="text-white text-center mb-0">Kurikulum 2016</p>
        </button>
      </div>

      <div class="border-4 mb-10">
        <!-- <div class="my-10"></div> -->

        <div class="m-10">
          <h1 class="text-white mb-13 text-bold text-center text-4xl">
            {{ choosedKurikulum.judul }}
          </h1>

          <img
            class="mx-auto my-10 w-1/2 rounded-md"
            v-bind:src="choosedKurikulum.media[0].url"
            alt="blog"
          />

          <h1 class="text-white text-xl text-justify">
            {{ choosedKurikulum.deskripsi }}
          </h1>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<style scoped>
.b-height {
  height: 40px;
}
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
      kurikulum: [],
      choosedKurikulum: [],
      clicked2016: false,
      clicked2020: true,
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
      .get("kurikulums")
      .then((response) => {
        this.kurikulum = response.data;
        this.choosedKurikulum = this.kurikulum[0];
        // console.log(response.data);
      })
      .catch((error) => console.log(error));
  },
});
</script>
