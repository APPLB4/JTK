<template>
  <div class="bg-JTK">
    <Navbar />

    <h1 class="text-3xl mx-4 my-4 font-serif text-white">Dosen</h1>
    <div class="grid gap-x-8 gap-y-3 mb-8 lg:grid-cols-4">
      <div v-for="(tag, index) in dosen" :key="tag">
        <router-link
          :to="{
            name: 'DetailDosen',
            params: {
              id: index,
              nama: dosen[index].nama,
              nip: dosen[index].nip,
              photo: dosen[index].photo,
              gender: dosen[index].gender,
              kontak: dosen[index].kontak,
              matkul: dosen[index].matkul,
              jabatan: dosen[index].jabatan,
              expertise: dosen[index].expertise,
              pengalaman: dosen[index].pengalaman,
              publikasi: dosen[index].publikasi,
            },
          }"
        >
          <div
            class="mx-10 mt-1 mb-10 p-1 group sm:flex space-x-3 bg-white shadow-xl hover:rounded-2xl text-cyan"
          >
            <img
              v-bind:src="tag.photo.url"
              alt="art cover"
              loading="lazy"
              width="1000"
              height="667"
              class="rounded-full h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
            />
            <div class="sm:w-7/12 pl-0 px-3 pr-2">
              <div class="space-y-2 mt-2">
                <div class="space-y-4">
                  <h4 class="text-xl font-semibold text-black">
                    {{ tag.nama }}
                  </h4>
                  <p class="mt-0 text-cyan-400">{{ tag.jabatan }}</p>
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>

    <h1 class="text-3xl mx-4 my-4 font-serif text-white">Staff</h1>
    <div class="grid gap-x-8 gap-y-3 mb-8 lg:grid-cols-4">
      <div v-for="(tag, index) in pegawai" :key="tag">
        <router-link
          :to="{
            name: 'DetailPegawai',
            params: {
              id: index,
              nama: pegawai[index].nama,
              nip: pegawai[index].nip,
              photo: pegawai[index].photo,
              gender: pegawai[index].gender,
              kontak: pegawai[index].kontak,
              jabatan: pegawai[index].jabatan,
            },
          }"
        >
          <div
            class="mx-10 mt-1 mb-10 p-1 group sm:flex space-x-3 bg-white shadow-xl hover:rounded-2xl text-cyan"
          >
            <img
              v-bind:src="tag.photo.url"
              alt="art cover"
              loading="lazy"
              width="1000"
              height="667"
              class="rounded-full h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
            />
            <div class="sm:w-7/12 pl-0 px-3 pr-2">
              <div class="space-y-2 mt-2">
                <div class="space-y-4">
                  <h4 class="text-xl font-semibold text-black">
                    {{ tag.nama }}
                  </h4>
                  <p class="mt-0 text-cyan-400">{{ tag.jabatan }}</p>
                </div>
              </div>
            </div>
          </div>
        </router-link>
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
      dosen: [],
    };
  },
  mounted() {
    axios
      .get("dosens")
      .then((response) => {
        this.dosen = response.data;
        // console.log(response.data)
      })
      .catch((error) => console.log(error));
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
