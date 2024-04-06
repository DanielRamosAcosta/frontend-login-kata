<template>
  <div class="recipe-card">
    <h2 class="recipe-card-title">{{ name }}</h2>
    <ul class="recipe-card-ingredients">
      <li v-for="ingredient in ingredients" :key="ingredient">
        {{ ingredient }}
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  ingredients: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.recipe-card {
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.recipe-card-title {
  font-size: 28px;
  margin-bottom: 10px;
}

.recipe-card-ingredients {
  font-size: 16px;
}
</style>
