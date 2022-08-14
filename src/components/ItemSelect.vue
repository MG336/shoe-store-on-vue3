<template>
<div>
<!-- NAV -->
<top-nav :basketNum="basketNum" :favorites="favorites"/>

<div class="wrap">

    <div class="container item-select">
        <photo-video :arrImgProps="gallery.colorVersion.img" :key="gallery.colorVersion"/>
        
        <div class="right-nav">
            <h1 class="right-nav__title mb--3">{{gallery.title}}</h1>
            <span>{{ gallery.colorVersion.priсe }}</span>

            <div class="color mt--3">
                <h2 class="color__title mb--2" right-nav__color>Color</h2>
                <h4 class="color__subTitle mb--3">{{gallery.colorVersion.title}}</h4>

                <right-panel @on-change-color="changeСolor" :color-version="gallery.colorVersion" 
                :obj="sneakers"/>

                <size-grid
                :size="gallery.colorVersion.size" 
                :key="gallery.colorVersion" 
                @size-value="selectData.size = $event"/>
                <hr>
                <!-- sizeValue -->
            </div>
            
            
            

            <div class="btn-box mt--4">
                <button 
                class="btn-box__addToCart btn-box__addToCart--one" 
                @click="addBasketNum"
                :disabled="!selectData.size"
                >add to cart</button>

                <button class="btn-box__addToCart btn-box__addToCart--two"
                @click="addFavoritesNum"
                :disabled="!selectData.size"
                >Add to Wishlist</button>
            </div>
            <div class="description m-top">
                <h2 class="description__title">Description</h2>
                <div>We reached into the archives for this one. Hitting the streets in the early 2000’s as a low-profile silhouette with roots back to a </div>
                <ul class="description__list">
                    <li class="description__li">
                        Style: 193069_15 
                    </li>
                    <li>
                        Color: High Risk Red-Puma Black
                    </li>
                </ul>
            </div>
            <hr class="m-top">
            <div class="reviews ">
                <h2 class="reviews__title">Reviews {{gallery.reviews}}</h2>
                <div class="reviews__stars">
                    <svg v-for="item in gallery.stars" :key="item.id" class="flex-shrink-0" height="1rem" width="1rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path stroke-width="1.5" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="currentColor"></path></svg>
                </div>
            </div>
            <hr>
            <div class="shipping">
                <p>
                    Free standard shipping on orders over $75 before tax, plus free returns on all qualifying orders.
                </p>
            </div>
        </div>
            
        
        <!-- :key="gallery.colorVersion" -->
    </div>
</div>


</div>
</template>




<script>
import PhotoVideo from "./photoVideo"
import RightPanel from "./rightPanel"
import SizeGrid from "./SizeGrid"
import TopNav from "./TopNav"

    export default {
    name: 'itemSelect',

    components: {
    PhotoVideo,
    RightPanel,
    SizeGrid,
    TopNav
    },
        props:{
            title: String,
            sneakers: Object
        },
        data(){
            return {
                rightNav: this.sneakers,
                colorVersion: this.sneakers.colors.color0,
                gallery: {
                    colorVersion: this.sneakers.colors.color0,
                    title: this.sneakers.title,
                    reviews: this.sneakers.reviews,
                    stars: this.sneakers.stars
                },
                selectData: {
                    size: false
                },
                basketNum:0,
                favorites:0
            }
                
        },
       
        methods: {
            changeСolor(event){
                this.gallery.colorVersion = this.sneakers.colors['color'+event]
                console.log('CV',this.gallery.colorVersion)
            },
            showSize(e){
                console.log(e)
            },
            addBasketNum(){
                if(this.selectData.size){
                    this.basketNum++
                }
            },
            addFavoritesNum(){
                if(this.selectData.size){
                    this.favorites++
                }
            }
                


         
         },
         watch: {
            'gallery.colorVersion'(){
                this.selectData.size = false
            }

         },

        computed:{
            
        },
        created(){
            // console.log(selectSize)
        }
    }
         

            








</script>

<style lang="scss">

  .item-select {
        display: grid;
        grid-template-columns: 1fr;
        gap:0;

  }




  .contant {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0;
  }
  .color{
    display: flex;
    flex-direction: column;

    &__title{

    }
    &__subTitle{
        
    }
  }
  .right-nav{
    &__title{
        margin-top: 0;
    }
  }
  .btn-box {
    display: flex;
    flex-direction: column;
    gap: 12px;
    &__addToCart{
        cursor: pointer;
        height: 42px;
        text-transform: uppercase;
        border: none;
        &:hover{
            
        }
        &--two{
            background-color: rgb(255, 255, 255, 0);
            border: 1px solid;
        }
        &--one{
            background-color: rgb(210, 210, 210);
        }
    }
    
  }
  .m-top{
    margin-top: 1.6rem;
  }
  .description{
    display: flex;
    flex-direction: column;
    gap:16px;
        &__title{
            margin: 0;
            padding: 0;
        }
        &__list{
            list-style-position: inside;
            list-style-type: disc;
            padding: 0px;
            margin: 0;
            &__li{
                padding: 0;
            }
        }
    }
            
  .reviews{
    padding: 8px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    &__title{
        margin: 0;

    }
  }

@media (min-width: 768px){
    .item-select {
        display: grid;
        grid-template-columns: 1fr .5fr;
        gap: 32px;
  }
}



  
</style>