<template>
  <div class="bg-JTK">
    <Navbar />
    <div class="mx-24 mt-10 mb-10">
      <div>
        <h1 class="text-white text-4xl mb-4">Kurikulum</h1>
      </div>

      <div class="flex flex-row">
        <button class="bg-second px-8 mr-4 b-height">
          <p class="text-white text-center mb-0">Kurikulum 2020</p>
        </button>
        <button class="bg-second px-8 mr-4">
          <p class="text-white text-center mb-0">Kurikulum 2016</p>
        </button>
      </div>

      <div class="border-4 mb-10">
        <!-- <div class="my-10"></div> -->

        <div class="m-10">
          <h1 class="text-white mb-10 text-bold text-3xl text-justify">
            Kurikulum 2020
          </h1>
          <h1 class="text-white text-xl text-justify">
            Sabtu (14/11/2020), Politeknik Negeri Bandung menggelar Sidang
            terbuka senat Politeknik Negeri Bandung Wisuda Program Magister
            Terapan, Sarjana Terapan, dan Diploma Tahun Akademik 2019/2020.
            Wisuda diselenggarakan secara offline di Pendopo Tony Seowandito dan
            online melalui media Youtube sebagai antisipasi penyebaran virus
            covid-19. Berikut merupakan video live-streaming wisuda Polban 2020.
            Acara dimulai pada 8.50 WIB dan berakhir pukul 12.00 WIB. Pada
            wisuda tahun ini JTK berhasil meraih gelar wisudawan terbaik D3
            se-Polban berkat M Wahyu Maulana Akbar (171511019).
          </h1>

          <img
            class="mx-auto my-10 w-1/2 rounded-md"
            src="/img/juara.jpg"
            alt="blog"
          />
          <h1 class="text-white text-xl text-justify">
            Wisudawan dari Jurusan Teknik Komputer dan Informatika mengikuti
            acara ramah tamah mulai pukul 13.00 WIB yang diselenggarakan oleh
            manejemen JTK lewat aplikasi zoom. Kegiatan tersebut diisi dengan
            sambutan manajemen, wisudawan terbaik, serta industri. Selanjutnya
            dilaksanakan pula sesi tanya jawab dan penyampaian kesan dan pesan
            oleh wisudawan dari JTK. Wisuda tahun 2020 ini adalah wisuda ke 30
            tahun, setelah JTK pindah ke kampus Ciwaruga. Sebelumnya JTK,
            beraada di kampus Ganesha, dibawah binaan ITB. Harapan kita semua
            agar JTK semakin dapat menjalankan amanahnya sebagai institusi
            pendidikan yang cukup tua. Selamat kepada wisudawan D3 dan D4 JTK
            Polban ! Semoga ilmu yang telah didapatkan selama kuliah di JTK
            dapat menjadi bekal untuk melangkah lebih jauh ke puncak kesuksesan
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
</style>

<script lang="ts">
import Vue from "vue";
import Footer from "./Footer.vue";
import Navbar from "./Navbar.vue";

export default Vue.extend({
  components: { Footer, Navbar },

  data() {
    return {};
  },
});
</script>
