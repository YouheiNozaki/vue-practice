import { createApp } from "vue/dist/vue.esm-browser.js"

const app = createApp({
  template: `
    <button v-on:click="increment(5)">Increment</button>
    <p>{{ count }}</p>

    <div v-if="isEven()">
      Even
    </div>
    <div v-else>
      Odd
    </div>
  `,
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment(val) {
      this.count += val
    },
    isEven() {
      return this.count % 2 === 0
    }
  }
}).mount('#app')
