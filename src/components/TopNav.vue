<template>
    <div class="nav">
        <div class="container nav__con">
            <a class="nav__logo">MG</a>
            <ul class="nav__items">
                <li class="nav__item">
                    <a href="#" class="nav__link">item</a>
                </li>
                <li class="nav__item">
                    <a href="#" class="nav__link">item</a>
                </li>
                <li class="nav__item">
                    <a href="#" class="nav__link">item</a>
                </li>
                <li class="nav__item">
                    <a href="#" class="nav__link">item</a>
                </li>
            </ul>
            <a class="nav__iconLink" href="#">
             <svg aria-hidden="true" width="1.5rem" height="1.5rem" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.3204 7.3593C17.0595 5.49195 14.507 5.55555 13.3306 7.50742L12.8565 8.29405L11.1435 8.29405L10.6694 7.50743C9.49303 5.55555 6.94056 5.49195 5.67967 7.35931C4.6353 8.90601 4.81585 11.0564 6.07358 12.3691L12 18.5546L17.9264 12.3691C19.1842 11.0564 19.3647 8.90601 18.3204 7.3593ZM12 5.91963C9.93124 3.27969 5.98029 3.34013 4.02215 6.2401C2.46092 8.55226 2.70774 11.7471 4.62945 13.7528L12 21.4454L19.3706 13.7528C21.2923 11.7471 21.5391 8.55226 19.9779 6.2401C18.0197 3.34012 14.0688 3.27969 12 5.91963Z" fill="white"></path></svg>
                <samp class="nav__basketNum" v-if="favorites">{{favorites}}</samp>
            </a>
            <a class="nav__iconLink" href="#">
                <svg aria-hidden="true" width="1.5rem" height="1.5rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="white" fill-rule="evenodd" clip-rule="evenodd" d="M3 5H5.15287L6.97183 15.9137C7.0763 16.5406 7.61865 17 8.25414 17H18.2575C18.8705 17 19.4002 16.5718 19.5286 15.9724L21.237 8H7.68046L6.84713 3H3V5ZM8.84713 15L8.01379 10H18.763L17.6916 15H8.84713Z"></path><path fill="white" d="M19 19H8V21H19V19Z"></path></svg>
                <samp class="nav__basketNum" v-if="basketNum">{{basketNum}}</samp>
            </a>
            
        </div>    
    </div>
</template>
<script>
    export default {
        props:{
            basketNum: Number,
            favorites: Number
        },
        data(){
            return {

            }
        }
    }
</script>
<style lang="scss">
    .nav{
        z-index: 2;
        top: 0;
        position: sticky;
        background-color: black;
        &__con {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
        }
        &__items {
            
            display: flex;
            flex-direction: row;
        }
        &__link {
            margin-right: 16px;
            color: white;
        }
        &__iconLink {
            position: relative;
            margin-right: 16px;
        }
        &__basketNum {
            border-radius: 50%;
            background-color: red;
            width: 20px;
            height: 20px;
            display: block;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: -8px;
            left: 15px;
        }
    }
</style>
            