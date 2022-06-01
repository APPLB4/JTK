<template>
  <div class="bg-JTK">
    <Navbar />

    <div class="w-full pt-1 mb-1">
      <img class="w-full h-102" src="/img/jurusan.jpg" alt="blog" />
    </div>

    <hr class="mb-10" />

    <div class="mx-24 mt-10 mb-10">
      <div>
        <h1 class="text-white text-4xl mb-4">Prestasi Mahasiswa</h1>
      </div>

      <div class="flex flex-row">
        <button
          class="px-8 mr-4 b-height"
          @click="
            changeClicked('IN');
            test = cat[0].category;
          "
          v-bind:class="{
            ungu: !clickedInternasional,
            unguTua: clickedInternasional,
          }"
        >
          <p class="text-white text-center mb-0">Internasional</p>
        </button>
        <button
          class="px-8 mr-4"
          @click="
            changeClicked('RE');
            test = cat[3].category;
          "
          v-bind:class="{
            ungu: !clickedRegional,
            unguTua: clickedRegional,
          }"
        >
          <p class="text-white text-center mb-0">Regional</p>
        </button>
        <button
          class="px-8 mr-4"
          @click="
            changeClicked('NA');
            test = cat[1].category;
          "
          v-bind:class="{
            ungu: !clickedNasional,
            unguTua: clickedNasional,
          }"
        >
          <p class="text-white text-center mb-0">Nasional</p>
        </button>
        <button
          class="px-8 mr-4"
          @click="
            changeClicked('PR');
            test = cat[2].category;
          "
          v-bind:class="{
            ungu: !clickedProvinsi,
            unguTua: clickedProvinsi,
          }"
        >
          <p class="text-white text-center mb-0">Provinsi</p>
        </button>
        <button
          class="px-8 mr-4"
          @click="
            changeClicked('LA');
            test = cat[4].category;
          "
          v-bind:class="{
            ungu: !clickedLainnya,
            unguTua: clickedLainnya,
          }"
        >
          <p class="text-white text-center mb-0">Lain lain</p>
        </button>
      </div>

      <div class="border-4 mb-10 flex flex-wrap mb-4 mr-4">
        <div v-for="(tag, index) in prestasi" :key="tag">
          <div
            v-show="test == tag.prestasi_category.category"
            class="p-4 md:w-full"
          >
            <div class="my-10">
              <router-link
                :to="{
                  name: 'ArticleRead',
                  params: {
                    id: index,
                    judul: 'Prestasi',
                    image: tag.media.url,
                    deskripsi: tag.deskripsi,
                  },
                }"
              >
                <div
                  class="h-full rounded shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden"
                >
                  <img
                    class="lg:h-48 md:h-36 w-96 object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                    v-bind:src="tag.media.url"
                  />
                  <div class="p-6">
                    <h1
                      class="title-font text-lg font-medium text-gray-600 mb-3"
                    >
                      {{ tag.judul }}
                    </h1>

                    <div class="flex items-center flex-wrap">
                      <button
                        class="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md shadow-cla-blue px-4 py-1 rounded-lg outline-second"
                      >
                        {{ tag.prestasi_category.category }}
                      </button>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
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
      prestasi: [],
      image: [],
      judul: [],
      cat: [],
      test: [],
      clickedRegional: true,
      clickedInternasional: false,
      clickedNasional: false,
      clickedProvinsi: false,
      clickedLainnya: false,
    };
  },
  mounted() {
    axios
      .get("prestasis")
      .then((response) => {
        this.prestasi = response.data;
        // console.log(response.data)
      })
      .catch((error) => console.log(error));
    axios
      .get("prestasi-categories")
      .then((response) => {
        this.cat = response.data;
        this.test = this.cat[3].category;
        // console.log(response.data)
      })
      .catch((error) => console.log(error));
  },
  methods: {
    changeClicked(value) {
      // console.log(this.article[1].namaprodi);
      let keyword = value;
      console.log(keyword);
      if (keyword == "IN") {
        (this.clickedInternasional = true),
          (this.clickedRegional = false),
          (this.clickedNasional = false),
          (this.clickedProvinsi = false),
          (this.clickedLainnya = false);
      } else if (keyword == "RE") {
        (this.clickedInternasional = false),
          (this.clickedRegional = true),
          (this.clickedNasional = false),
          (this.clickedProvinsi = false),
          (this.clickedLainnya = false);
      } else if (keyword == "NA") {
        (this.clickedInternasional = false),
          (this.clickedRegional = false),
          (this.clickedNasional = true),
          (this.clickedProvinsi = false),
          (this.clickedLainnya = false);
      } else if (keyword == "PR") {
        (this.clickedInternasional = false),
          (this.clickedRegional = false),
          (this.clickedNasional = false),
          (this.clickedProvinsi = true),
          (this.clickedLainnya = false);
      } else {
        (this.clickedInternasional = false),
          (this.clickedRegional = false),
          (this.clickedNasional = false),
          (this.clickedProvinsi = false),
          (this.clickedLainnya = true);
      }
    },
  },
});
</script>
