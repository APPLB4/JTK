<template>
  <div class="bg-JTK">
    <Navbar />

    <div class="w-full pt-1 mb-1">
      <img class="w-full h-102" src="/img/jurusan.jpg" alt="blog" />
    </div>

    <hr class="mb-10" />

    <div class="mx-24 mt-10 mb-10">
      <div>
        <h1 class="text-white text-4xl mb-4">Tracer Study</h1>
      </div>

      <div class="flex flex-row"></div>

      <div class="border-4 mb-10 flex flex-wrap -m-4">
        <img
          v-bind:src="tracer[0].idk[0].url"
          alt="black chair and white table"
          class="w-1/2 h-1/2 mx-auto"
        />
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

<script
  type="text/javascript"
  src="https://www.gstatic.com/charts/loader.js"
></script>
<script type="text/javascript">
import Vue from "vue";
import Footer from "./Footer.vue";
import Navbar from "./Navbar.vue";
import axios from "axios";

export default Vue.extend({
  components: { Footer, Navbar },

  data() {
    return {
      tracer: [],
    };
  },
  mounted() {
    axios.get("languages").then((response) => {
      this.tracer = response.data;
      // console.log(response.data)
    });
  },
  methods: {},
});
</script>
