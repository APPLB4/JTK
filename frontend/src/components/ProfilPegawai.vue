<template>
  <div class="bg-JTK">
    <Navbar />

    <div class="grid gap-x-12 gap-y-3 mb-8 lg:grid-cols-4">
      <div v-for="tag in pegawai" :key="tag">
        <div
          class="mx-10 mt-10 p-1 group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl"
        >
          <img
            v-bind:src="tag.photo.url"
            alt="art cover"
            loading="lazy"
            width="1000"
            height="667"
            class="rounded-full h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
          />
          <div class="sm:w-7/12 pl-0 p-5">
            <div class="space-y-2">
              <div class="space-y-4">
                <h4 class="text-2xl font-semibold text-cyan-900">
                  {{ tag.nama }}
                </h4>
                <p class="text-gray-600">{{ tag.jabatan }}</p>
              </div>
            </div>
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
  components: { Navbar, Footer },

  data() {
    return {
      pegawai: [],
    };
  },
  mounted() {
    axios
      .get("pegawais")
      .then((response) => {
        this.pegawai = response.data;
        // console.log(response.data)
      })
      .catch((error) => console.log(error));
  },
});
</script>
