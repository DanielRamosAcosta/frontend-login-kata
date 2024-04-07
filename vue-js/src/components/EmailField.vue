<template>
  <div class="email-field-container">
    <label :for="id">{{ labelText }}</label>
    <input
      :id="id"
      type="email"
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
.email-field-container {
  display: flex;
  flex-direction: column;
}

.email-field-container label {
  font-size: 14px;
}

.email-field-container input {
  height: 32px;
  border: none;
  border-bottom: 1px solid #474747;
}
</style>
