<template>
<div class="bg-JTK ">
   <Navbar/>

<div class="w-full pt-10 mb-10">
  <img class=" w-full h-96" src="https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80" alt="blog">
</div>
                

<hr class="mb-10">


<div class="container mx-auto">    
        
                        <!-- Body Gan -->
                        <div>
                            <div class=" flex flex-wrap ">

                                <!-- Bagian Left Side Gan -->
                              
                                <div class="  lg:w-3/4 sm:w-full lg:pr-20 sm:pr-0 ... ">
                                  
                                    <h1 class=" text-white font-semibold text-5xl mt-4 mb-24"> {{$route.params.judul}}</h1>
                                    <img class="mx-auto mb-10"  v-bind:src="$route.params.image">
                                    
                                    <p class=" text-white"> {{$route.params.deskripsi}}</p>
                                </div>

                  

                                  <!-- Bagian Right Side Gan ------------------------------------------------------------------------------------------------------------------------------------------------>
                                    <div class=" lg:w-1/4 sm:w-full  ...">
                                            <section class="mb-4">
                                              <div class="border-l-2  pl-4">
                                                <h1 class=" text-white flex flex-wrap font-semibold text-2xl pt-5 mb-10 " >Artikel Lainnya</h1>

                                                <div
                                                 v-for="(tag,index) in article.slice(0,4)"
                                                :key="tag">

                                                     <div class="flex mb-10 bg-white">
                                                           <img class=" mr-4 min-h-0 min-w-0 float-left  w-full" v-bind:src="article[index].article_medias[0].media.url">
                                        
                                                          <div>
                                                              <h2 class="   text-indigo-900 tracking-widest text-md title-font font-medium text-gray-400 mb-1">{{tag.judul}}</h2>
                                                          </div>
                                                    </div>

                                                </div>
                                                  

                                              </div>
                                            </section>

                


                                    </div>

                            </div>
            </div>
      </div>

<Footer />
</div>

</template>

<script lang="ts">
import Vue from "vue";
import Footer from "./Footer.vue"
import Navbar from "./Navbar.vue"
import axios from 'axios';



export default Vue.extend({
    name: "ArticleRead",
    components:{Navbar ,Footer},

  data() {
    return {
      article : [], 
      function() {
        const lang = localStorage.getItem('lang') || 'en';
        return{
          lang : lang
        }
      }
    };
  },
  mounted(){
        axios
            .get('Articles')
            .then(response => {
                this.article = response.data
                // console.log(response.data)
            })
            .catch(error => console.log(error))
},
methods:{

}

});

</script>
