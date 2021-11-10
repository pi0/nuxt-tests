<template>
  <div>
    Hello Nuxt {{ $config.nuxtVersion }}!<br>

    counter: {{ counter.count }} <button @click="counter.increment">
      +
    </button>
  </div>
</template>

<script setup>
import { defineStore } from 'pinia'

const useCounterStore = defineStore('counter', {
  state: () => ({ count: Math.round(Math.random() * 100) }),
  actions: {
    increment () {
      this.count++
    }
  }
})

const counter = useCounterStore()
</script>
