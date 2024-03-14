<template>
  <button class="button-container">{{ title }}</button>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.button-container {
  height: 40px;
  background-color: black;
  color: white;
  border: 0;
  border-radius: 20px;
}
</style>
