import { createApp } from "vue/dist/vue.esm-browser.js"

const app = createApp({
  template: `
    <p>{{ person }}</p>
  `,
  data() {
    return {
      msg: "world",
      person: {
        name: "Ryusou",
        age: 26
      }
    }
  }
}).mount('#app')
