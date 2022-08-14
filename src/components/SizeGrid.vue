<template>
       <section class="size mt--4">
        <h2 class="size__text mb--2">Size: {{selectSize? selectSize : ''}}</h2>
        <div class="size-box" @click="
        selectSize = $event.target.value,
        $event.target.tagName ==='INPUT' 
        ? $emit('sizeValue', $event.target.value)
        :'' ">
        <label class="size-box__item" v-for="value in changeOrderSize"  :key="value.id">
        <span class="size-box__num">{{value[0]}}</span>
        <input class="size-box__input" type="radio" name="size" :disabled="!value[1]" :value="value[0]">
        </label>
        </div>
                
    </section>
</template>
<script>
    export default {
        name:"SizeGrid",
        props: {
            size: Object,
        },
        emits: {
            sizeValue(){  
             return true
            },
        },
        data(){
            return {
                sizeTest: this.size,
                selectSize: false,
            }
        },
        computed: {
            changeOrderSize(){
                let arr = Object.entries(this.size)
                .sort((a,b) => a[0] - b[0])
                console.log(arr)
                return arr
            }
        },
        methods:{
            // selectSizeValue(e){
            //     if(e.target.tagName === 'INPUT'){
                    
            //         return $emit('sizeValue', e.target.value)
            //     }else return ''
            // }
        },
        watch:{
            sizeTest(){
                console.log(111111111111111111)
                this.selectSize = false
            }
        },
        created() {
            this.selectSize = false
        }
    }
</script>
<style lang="scss">

.size-box{
        display: grid;
        gap:8px;
        grid-template-columns: repeat(auto-fill, minmax(3rem, 1fr));
         grid-template-rows: repeat(auto-fill, 1fr);
        &__input{
            cursor: pointer;
            appearance: none;
            width: 100%;
            height: 100%;
            position: relative;

            &:checked{
                border: 1.6px solid;
            }
            &:disabled{
                background-color: rgb(207, 207, 207);
            }
        }
        &__item{
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid;
            flex: 0 0 auto;
            min-width: 3rem;
            min-height: 3rem;
        }
        &__num{
            cursor: pointer;
            position: absolute;
            z-index: 1;
        }

    }
</style>
