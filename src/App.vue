<template>
  <item-select title="1234535435tyryerrrj" :sneakers="obj"></item-select>
  <div class="test"></div>

</template>
<script>



 
// import photoVideo from './components/photoVideo' 
import ItemSelect from './components/ItemSelect'
import { obj } from './js/sneakers.js'
console.log(obj)

export default {
  name: 'App',
  components: {
    ItemSelect,
  },
  data(){
    return {
      obj:obj
    }
    
  }
}

</script>

