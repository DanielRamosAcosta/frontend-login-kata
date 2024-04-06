<template>
  <button class="button-container" :disabled="disabled">{{ title }}</button>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
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

.button-container:disabled {
  background-color: #b7b7b7;
}
</style>
