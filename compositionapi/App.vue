<template>
  <div>{{ msg }}</div>
</template>

<script>
  export default {
    created() {
      console.log('created')
    },
    mounted() {
      console.log("mounted")
    },
    setup() {
      console.log("setup")
      return {
        msg: "hello world"
      }
    }
  }
</script>
