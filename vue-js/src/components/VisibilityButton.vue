<template>
  <button
    class="visibility-button"
    type="button"
    @click="$emit('update:modelValue', !modelValue)"
    :aria-label="modelValue ? 'Hide password' : 'Show password'"
  >
    <VisibilityIcon v-if="modelValue" />
    <VisibilityOffIcon v-else />
  </button>
</template>

<script setup>
import VisibilityIcon from "./icons/VisibilityIcon.vue";
import VisibilityOffIcon from "./icons/VisibilityOffIcon.vue";

defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});
</script>

<style scoped>
.visibility-button {
  background-color: transparent;
  display: flex;
  height: 36px;
  width: 36px;
  justify-content: center;
  align-items: center;
  border: none;
}
</style>
