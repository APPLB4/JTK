<template>
  <div class="bg-JTK">
    <Navbar />
    <div class="mx-24">
      <div>
        <h1 class="text-white text-4xl mb-4">Prestasi Mahasiswa</h1>
      </div>

      <div class="flex flex-row">
        <button class="bg-second px-8 mr-4">
          <p class="text-white text-center">Internasional</p>
        </button>
        <button class="bg-second px-8 mr-4">
          <p class="text-white text-center">Regional</p>
        </button>
        <button class="bg-second px-8 mr-4">
          <p class="text-white text-center">Nasional</p>
        </button>
        <button class="bg-second px-8 mr-4">
          <p class="text-white text-center">Prestasi</p>
        </button>
        <button class="bg-second px-8 mr-4">
          <p class="text-white text-center">Lain lain</p>
        </button>
      </div>

      <div class="border-4 mb-10">
        <div class="my-10">
          <img
            class="m-auto w-1/2 rounded-md"
            src="https://images.unsplash.com/photo-1631700611307-37dbcb89ef7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
            alt="blog"
          />
        </div>

        <div class="m-10">
          <h1 class="text-white text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni culpa
            veniam dolorem officia? Dolorem quaerat suscipit quia ex. Impedit,
            optio unde fugit suscipit numquam ducimus corporis error officia
            laudantium sunt.
          </h1>
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

export default Vue.extend({
  components: { Footer, Navbar },

  data() {
    return {};
  },
});
</script>
