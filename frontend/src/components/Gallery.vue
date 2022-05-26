<template>
  <div class="bg-JTK">
    <Navbar />

    <h1 class="
    text-4xl
    mx-4
    mb-10
    my-4
    font-serif
    ">
        Gallery
    </h1>


    <h1 class="
    text-4xl
    mx-4
    my-4
    font-serif
    ">
        Image
    </h1>


<div class="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
  <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ --->
  <div class="w-full relative flex items-center justify-center">
    
    <button aria-label="slide backward" class="absolute z-30 left-0 ml-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev"
    @click="goPrev()">
      <svg class="  dark:text-gray-900" width="24" height="24" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 1L1 7L7 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
    
    <div class="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
      <div id="slider" class="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
      >
        
      
       <div class="flex flex-shrink-0 relative w-full sm:w-auto" v-for="(tag,index) in gallery_photo"
          :key = "tag">
            <button v-on:click="toggleModal();toggleNumber(index)">

            
          <img v-bind:src="tag.image.url" alt="black chair and white table" class="object-cover object-center w-96 h-96" />
          <div class="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
            <h2 class="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">{{tag.image.name}}</h2>
            <div class="flex h-full items-end pb-6">
              <h3 class="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">Minimal Interior</h3>
            </div>
          </div>
             </button>

        </div>

      
      </div>
    </div>
    <button aria-label="slide forward" class="absolute z-30 right-0 mr-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next"
    @click="goNext()">
      <svg class="dark:text-gray-900" width="24" height="24" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L7 7L1 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
  </div>
</div>

  <h1 class="
    text-4xl
    mx-4
    my-4
    font-serif
    ">
        Video
    </h1>



<div class="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
  <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ --->
  <div class="w-full relative flex items-center justify-center">
    
    <button aria-label="slide backward" class="absolute z-30 left-0 ml-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev"
    @click="goPrev2()">
      <svg class="  dark:text-gray-900" width="24" height="24" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 1L1 7L7 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
    
    <div class="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
      <div id="sliderr" class="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
      >
        
      
       <div class="flex flex-shrink-0 relative w-full sm:w-auto" v-for="tag in gallery_video"
          :key = "tag">
            <video width="320" height="240" controls>
            <source v-bind:src="tag.video.url" type="video/mp4">
            </video>

        </div>

      
      </div>
    </div>
    <button aria-label="slide forward" class="absolute z-30 right-0 mr-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next"
    @click="goNext2()">
      <svg class="dark:text-gray-900" width="24" height="24" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L7 7L1 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
  </div>
</div>



                            
   
      <!-- CONTAINER MODAL-->
    <div  v-if="showModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
      <!--MODAL ITEM-->
      <div class="bg-gray-800 w-full mx-4 p-4  md:w-1/2 lg:w-1/2">
        <div class=" w-full">
          <button v-on:click="toggleModal()" > <p class=" text-white text-xl border-2 rounded-xl px-2">x</p> </button>
        </div>
        <div>
            <img v-bind:src="gallery_photo[numberr].image.url" alt="black chair and white table" class="object-cover object-center w-full h-full" />
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

let defaultTransform = 0;
let defaultTransform2 = 0;


export default Vue.extend({
  components: { Navbar, Footer },

  data() {
    return {
    showModal: false,
      gallery_photo: [],
      numberr : 0,
      gallery_video: [],
    };
  },
  mounted() {
    axios
      .get("gallery-photos")
      .then((response) => {
        this.gallery_photo = response.data;
        // console.log(response.data)
      })
      .catch((error) => console.log(error));
      axios
      .get("gallery-videos")
      .then((response) => {
        this.gallery_video = response.data;
        // console.log(response.data)
      })
      .catch((error) => console.log(error));
  },
  methods : {
goPrev() {
  var slider = document.getElementById("slider");
  if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
  else defaultTransform = defaultTransform + 398;
  slider.style.transform = "translateX(" + defaultTransform + "px)";
},
goNext() {
  defaultTransform = defaultTransform - 398;
  var slider = document.getElementById("slider");
  if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7)
    defaultTransform = 0;
  slider.style.transform = "translateX(" + defaultTransform + "px)";
},
goPrev2() {
  var sliderr = document.getElementById("sliderr");
  if (Math.abs(defaultTransform2) === 0) defaultTransform2 = 0;
  else defaultTransform2 = defaultTransform2 + 398;
  sliderr.style.transform = "translateX(" + defaultTransform2 + "px)";
},
goNext2() {
  defaultTransform2 = defaultTransform2 - 398;
  var sliderr = document.getElementById("sliderr");
  if (Math.abs(defaultTransform2) >= sliderr.scrollWidth / 1.7)
    defaultTransform2 = 0;
  sliderr.style.transform = "translateX(" + defaultTransform2 + "px)";
},
 toggleModal: function(){
      this.showModal = !this.showModal;
    },
    toggleNumber: function(test){
        this.numberr = test;
    }

  }
});
</script>
