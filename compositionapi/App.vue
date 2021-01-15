<template>
<div>
  <button @click="increment">{{ count }}</button>
  <button @click="increase">{{ numbers.a }}</button>
  <button @click="increase">{{ numbers.b }}</button>
</div>
</template>

<script>
  import {ref, reactive} from "vue"
  export default {
    setup() {
      const count = ref(0)
      const numbers = reactive({
        a: 0,
        b: 0
      })

      const increase = (num) => {
        numbers[num] += 1
      }

      const increment = () => {
        count.value += 1
      }
      return {
        increment,
        count,
        numbers
      }
    }
  }
</script>
