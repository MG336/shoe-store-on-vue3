<template>
<div>
<div class="container">
    <!-- <section class="image-gallery-section">
        
        <div class="items" @click="modalVis">
            <img class="items__item" :data-index="index"  
            :src="item()" 
            v-for="(item, index) of gallery.photoColorSet.img" 
            :key="item.id" alt="">
        </div>
            
        
        <div>
            {{ item }}
        </div>
    </section>   -->
    <photo-video :arrImgProps="gallery.photoColorSet.img"></photo-video>
</div>
<!-- <todo-item></todo-item> -->


</div>
</template>




<script>
import PhotoVideo from "./photoVideo"

    export default {
        name: 'itemSelect',
         components: {
            PhotoVideo
        },
        props:{
            title: String,
            sneakers: Object
        },
        data(){
            return {

                gallery: {
                    photoColorSet: this.sneakers.colors.color1,
                }
            }
                
        },
       
        methods: {
         
         
         },
        computed:{
            
        }
    }
         

            








</script>

<style lang="scss">
  
</style>