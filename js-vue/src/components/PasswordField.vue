<template>
  <div class="password-field-container">
    <label :for="id">{{ labelText }}</label>
    <input
      :id="id"
      type="password"
      :value="modelValue"
      @input="updateModelValue"
    />
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
    default: "text",
  },
  labelText: {
    type: String,
    required: true,
    default: "text",
  },
});

const emit = defineEmits(["update:modelValue"]);

function updateModelValue(event) {
  emit("update:modelValue", event.target.value);
}
</script>

<style scoped>
.password-field-container {
  display: flex;
  flex-direction: column;
}

.password-field-container label {
  font-size: 14px;
}

.password-field-container input {
  height: 32px;
  border: none;
  border-bottom: 1px solid #474747;
}
</style>
