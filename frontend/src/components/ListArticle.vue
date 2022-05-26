<template>
  <div class="bg-JTK">
    <Navbar />

    <div id="carouselExampleCaptions" class="carousel slide relative" data-bs-ride="carousel">
  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div class="carousel-inner relative w-full overflow-hidden">
    <div class="carousel-item active relative float-left w-full">
      <img
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
        class="block w-full"
        alt="..."
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        <h5 class="text-xl">First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item relative float-left w-full">
      <img
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
        class="block w-full"
        alt="..."
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        <h5 class="text-xl">Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item relative float-left w-full">
      <img
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
        class="block w-full"
        alt="..."
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        <h5 class="text-xl">Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    <!-- component -->
    <section class="text-gray-600 body-font">
      <div class="container px-5 pt-10 mx-auto mb-10">
        <div>
          <h1 class="text-white mb-10 text-3xl">Article</h1>
        </div>

        <div class="flex flex-wrap -m-4">
          <div class="p-4 md:w-1/3" v-for="(tag, index) in article" :key="tag">
            <router-link
              :to="{
                name: 'ArticleRead',
                params: {
                  id: index,
                  judul: 'Article',
                  image: article[index].article_medias[0].media.url,
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
                    w-full
                    object-cover object-center
                    scale-110
                    transition-all
                    duration-400
                    hover:scale-100
                  "
                  v-bind:src="article[index].article_medias[0].media.url"
                />
                <div class="p-6">
                  <h1 class="title-font text-lg font-medium text-gray-600 mb-3">
                    {{ tag.judul }}
                  </h1>
                  <p class="leading-relaxed mb-3">
                    {{ tag.deskripsi.slice(0, 100) }}
                  </p>

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
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>


   <!-- component -->
    <section class="text-gray-600 body-font">
      <div class="container px-5 pt-10 mx-auto mb-10">
        <div>
          <h1 class="text-white mb-1 text-3xl">Agenda</h1>
        </div>
        <div>
          <a href="#">
            <h1 class="mb-10 text-xl text-right" style="color: #8d5cf6">
              Kalender Akademik
            </h1>
          </a>
        </div>

        <div class="flex flex-wrap -m-4">
          <div class="p-4 md:w-1/3" v-for="(tag, index) in agenda" :key="tag">
            <router-link
              :to="{
                name: 'ArticleRead',
                params: {
                  id: index,
                  judul: 'Agenda',
                  image: agenda[index].kegiatan_medias[0].media.url,
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
                    w-full
                    object-cover object-center
                    scale-110
                    transition-all
                    duration-400
                    hover:scale-100
                  "
                  v-bind:src="agenda[index].kegiatan_medias[0].media.url"
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
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    


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
      article: [],
      agenda : []
    };
  },
  mounted() {
    axios
      .get("Articles")
      .then((response) => {
        this.article = response.data;
        // console.log(response.data)
      })
      .catch((error) => console.log(error));

     axios
      .get("Kegiatans")
      .then((response) => {
        this.agenda = response.data;
        // console.log(response.data)
      })
      .catch((error) => console.log(error));

  },
});
</script>
