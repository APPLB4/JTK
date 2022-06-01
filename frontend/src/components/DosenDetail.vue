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
          <div class="lg:w-3/4 sm:w-full sm:pr-0 ...">
            <table
              class="w-3/4 table-fixed text-sm text-left text-gray-500 dark:text-gray-400"
            >
              <tbody>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    class="w-1/3 px-6 py-4 font-medium bg-gray-50 text-gray-900 dark:text-white"
                  >
                    Nama
                  </th>

                  <td class="w-2/3 px-6 py-4">{{ $route.params.nama }}</td>
                </tr>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium bg-gray-50 text-gray-900 dark:text-white"
                  >
                    NIP
                  </th>
                  <td class="px-6 py-4">{{ $route.params.nip }}</td>
                </tr>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium bg-gray-50 text-gray-900 dark:text-white"
                  >
                    Jenis Kelamin
                  </th>
                  <td class="px-6 py-4">{{ $route.params.gender }}</td>
                </tr>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium bg-gray-50 text-gray-900 dark:text-white"
                  >
                    Email
                  </th>
                  <td class="px-6 py-4">{{ $route.params.kontak }}</td>
                </tr>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium bg-gray-50 text-gray-900 dark:text-white"
                  >
                    Status Ikatan Kerja
                  </th>
                  <td class="px-6 py-4">{{ $route.params.jabatan }}</td>
                </tr>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium bg-gray-50 text-gray-900 dark:text-white"
                  >
                    Mata Kuliah yang diampu
                  </th>
                  <td class="px-6 py-4">{{ $route.params.matkul }}</td>
                </tr>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium bg-gray-50 text-gray-900 dark:text-white"
                  >
                    Expertise
                  </th>
                  <td class="px-6 py-4">{{ $route.params.expertise }}</td>
                </tr>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium bg-gray-50 text-gray-900 dark:text-white"
                  >
                    Pengalaman
                  </th>
                  <td class="px-6 py-4">{{ $route.params.pengalaman }}</td>
                </tr>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium bg-gray-50 text-gray-900 dark:text-white"
                  >
                    Publikasi
                  </th>
                  <td class="px-6 py-4">{{ $route.params.publikasi }}</td>
                </tr>
              </tbody>
            </table>
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
  name: "DetailDosen",
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
        console.log(this.article[0].nama);
      })
      .catch((error) => console.log(error));
  },
  methods: {},
});
</script>
