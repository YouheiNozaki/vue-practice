import { createApp } from "vue/dist/vue.esm-browser.js"

const app = createApp({
  template: `
    <button @click="increment(5)">Increment</button>
    <p>{{ count }}</p>

    <div v-if="isEven(count)">
      Even
    </div>
    <div v-else>
      Odd
    </div>

    <div v-for="number in numbers">
      <div :class="getClass(number)" :title="number">
        {{ number }}
      </div>
    </div>

    <input v-model="value" />
    {{ value }}

    <div v-if="error">{{ error }}</div>
    <input type="checkbox" v-model="value" />
    {{ value }}

    <input type="radio" v-model="value" value="a" />
    <input type="radio" v-model="value" value="b" />
    {{ value }}

    <input type="checkbox" v-model="value" value="a" />
    <input type="checkbox" v-model="value" value="b" />
    {{ value }}
  `,
  computed: {
    evenList() {
      return this.numbers.filter(num => this.isEven(num))
    },
    error() {
      if (this.value.length < 7) {
        return this.error = "Too short"
      }
    }
  },
  data() {
    return {
      username: "user",
      count: 0,
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      value: ["a"]
    }
  },
  methods: {
    input($evt) {
      this.value = $evt.target.value
    },
    getClass(number) {
      if (this.isEven(number)) {
        return "red"
      }
      return "blue"
    },
    increment(val) {
      this.count += val
    },
    isEven(number) {
      return number % 2 === 0
    }
  }
}).mount('#app')
