import { createApp } from "vue/dist/vue.esm-browser.js"

const app = createApp({
  template: `
    <button v-on:click="increment(5)">Increment</button>
    <p>{{ count }}</p>
  `,
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment(val) {
      this.count += val
    }
  }
}).mount('#app')
