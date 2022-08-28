<template>
<div>
<!-- NAV -->
<top-nav :basketNum="basketNum" :favorites="favorites"/>

<div class="wrap ">

    <div class="container item-select">
        <photo-video :arrImgProps="gallery.colorVersion.img" :key="gallery.colorVersion"/>
        
        <div class="right-nav">
            <h1 class="right-nav__title mb--3">{{gallery.title}}</h1>
            <span>{{ gallery.colorVersion.priсe }}</span>

            <div class="color mt--3">
                <h2 class="color__title mb--2" right-nav__color>Color</h2>
                <h2 class="color__subTitle mb--3 fs--6">{{gallery.colorVersion.title}}</h2>

                <color-picker @on-change-color="changeСolor" @mousedown.prevent :color-version="gallery.colorVersion" :obj="sneakers"/>

                <size-grid
                :size="gallery.colorVersion.size" 
                :key="gallery.colorVersion" 
                @size-value="selectData.size = $event"/>
                <hr>
            </div>
            
            
            

            <div class="btn-box mt--4">
                <button 
                class="btn-box__addToCart btn-box__addToCart--one" 
                @click="addBasketNum"
                :disabled="!selectData.size">
                <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.005 13.2074L23.9747 4.67617C24.1169 4.0602 23.6413 3.47363 22.9996 3.47363H6.63367L6.25175 1.63572C6.15658 1.17762 5.74708 0.848633 5.27204 0.848633H1C0.447708 0.848633 0 1.28935 0 1.83301V2.48926C0 3.03292 0.447708 3.47363 1 3.47363H3.91179L6.83879 17.5598C6.13854 17.9562 5.66667 18.6995 5.66667 19.5518C5.66667 20.8203 6.71133 21.8486 8 21.8486C9.28867 21.8486 10.3333 20.8203 10.3333 19.5518C10.3333 18.9089 10.0647 18.3281 9.63234 17.9111H18.3676C17.9353 18.3281 17.6667 18.9089 17.6667 19.5518C17.6667 20.8203 18.7113 21.8486 20 21.8486C21.2887 21.8486 22.3333 20.8203 22.3333 19.5518C22.3333 18.6424 21.7963 17.8565 21.0175 17.4844L21.2474 16.4887C21.3896 15.8727 20.914 15.2861 20.2723 15.2861H9.08821L8.8155 13.9736H21.0299C21.4968 13.9736 21.9015 13.6556 22.005 13.2074Z" fill="#F6E059"/>
                </svg>
                add to cart</button>


                <button 
                class="btn-box__addToCart btn-box__addToCart--two fc--b"
                @click="addFavoritesNum"
                :disabled="!selectData.size">
                <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.6705 2.28454C19.1018 0.0955153 15.2815 0.489258 12.9238 2.92203L12.0003 3.87357L11.0769 2.92203C8.72385 0.489258 4.89892 0.0955153 2.33022 2.28454C-0.613476 4.79699 -0.76816 9.30628 1.86616 12.0297L10.9363 21.3951C11.5222 21.9998 12.4738 21.9998 13.0597 21.3951L22.1298 12.0297C24.7689 9.30628 24.6142 4.79699 21.6705 2.28454V2.28454Z" fill="#6F42C1"/>
                </svg>

                Add to Wishlist</button>
            </div>
            <div class="description mt--4">
                <h2 class="description__title">Description</h2>
                <div>We reached into the archives for this one. Hitting the streets in the early 2000’s as a low-profile silhouette with roots back to a </div>
            </div>
            <hr class="mt--4">
            <div class="reviews">
                <h2 class="reviews__title">Reviews {{gallery.reviews}}</h2>
                <div class="reviews__stars">
                    <svg v-for="item in gallery.stars" :key="item.id" class="flex-shrink-0" height="1rem" width="1rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path stroke-width="1.5" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="#6F42C1"></path></svg>
                </div>
            </div>
            <hr class="">
            <div class="shipping mt--4">
                <h2 class="shipping__title mb--3">Shipping and Returns</h2>
                <p>
                    Free standard shipping on orders over $75 before tax, plus free returns on all qualifying orders.
                </p>
            </div>
        </div>
            
    </div>
    <footer-comp class=" mt--5"/>
</div>


</div>
</template>




<script>
import PhotoVideo from "./PhotoVideo.vue"
import ColorPicker from "./ColorPicker.vue"
import SizeGrid from "./SizeGrid.vue"
import TopNav from "./TopNav.vue"
import FooterComp from "./FooterComp.vue"
    
    export default {
    name: 'itemSelect',

    components: {
        PhotoVideo,
        ColorPicker,
        SizeGrid,
        TopNav,
        FooterComp
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
                if(!event) return
                this.gallery.colorVersion = this.sneakers.colors['color'+event]
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
        font-weight: 400;
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
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 16px;
        border-radius: 8px;
        &:hover{
            
        }
        &:disabled{
              opacity: .9;  
        }
        &--two{
            background-color: rgb(208, 208, 208,0);
            border: 1px solid $color-1;
        }
            
        &--one{
            background-color: $color-1;
            color: white;
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
  .shipping {
    
  }

@media (min-width: 768px){
    .item-select {
        display: grid;
        grid-template-columns: 1fr .5fr;
        gap: 32px;
  }
}



  
</style>