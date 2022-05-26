<template>
  <div class="bg-JTK">
    <Navbar />
    <div class="mx-24 mt-10 mb-10">
      <div>
        <h1 class="text-white text-4xl mb-4">Prestasi Mahasiswa</h1>
      </div>

      <div class="flex flex-row">
        <button class="bg-second px-8 mr-4 b-height"  @click="test = cat[0].category">
          <p class="text-white text-center mb-0">Internasional</p>
        </button>
        <button class="bg-second px-8 mr-4">
          <p class="text-white text-center mb-0" @click="test = cat[3].category">Regional</p>
        </button>
        <button class="bg-second px-8 mr-4">
          <p class="text-white text-center mb-0" @click="test = cat[1].category">Nasional</p>
        </button>
        <button class="bg-second px-8 mr-4">
          <p class="text-white text-center mb-0" @click="test = cat[2].category">Provinsi</p>
        </button>
        <button class="bg-second px-8 mr-4">
          <p class="text-white text-center mb-0" @click="test = cat[4].category">Lain lain</p>
        </button>
      </div>


  

     
      <div class="border-4 mb-10 flex flex-wrap -m-4 ">
        <div
        v-for="(tag,index) in prestasi"
        :key="tag" >

        <div
        v-show="test == tag.prestasi_category.category" class="p-4 md:w-full" >

        

        
        <div class=" my-10">

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
                    w-96
                    object-cover object-center
                    scale-110
                    transition-all
                    duration-400
                    hover:scale-100
                  "
                  v-bind:src="tag.media.url"
                />
                <div class="p-6">
                  <h1 class="title-font text-lg font-medium text-gray-600 mb-3">
                    {{ tag.judul }}
                  </h1>

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
                     {{tag.prestasi_category.category}}
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
      prestasi : [],
      image : [],
      judul : [],
      cat : [],
      test : []
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
        // console.log(response.data)
      })
      .catch((error) => console.log(error));
  },
  methods: {
  
  
  }
});
</script>
