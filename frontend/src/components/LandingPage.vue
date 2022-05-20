<template>
  <div>
    <Navbar />

    <Footer />
  </div>
</template>

<style scoped>
.bg-header {
  height: 96px;
  background-color: #26335d;
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
