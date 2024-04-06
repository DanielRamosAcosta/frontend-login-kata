<template>
  <div class="dummy">
    <p>Counter value: {{ counter }}</p>
    <button @click="increment">Increment</button>
    <input v-model="text" placeholder="Type here" />
    <p>Text value: {{ text }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const counter = ref(0);
const text = ref("");

function increment() {
  counter.value++;
}
</script>

<style scoped></style>
