<template>
  <div class="password-field-container">
    <label :for="id">{{ labelText }}</label>
    <div>
      <input
        :id="id"
        :type="inputType"
        :value="modelValue"
        @input="updateModelValue"
      />
      <VisibilityButton v-model="passwordIsVisible" />
    </div>
  </div>
</template>

<script setup>
import VisibilityButton from "./VisibilityButton.vue";
import { computed, ref } from "vue";

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

const passwordIsVisible = ref(false);

const emit = defineEmits(["update:modelValue"]);

const inputType = computed(() =>
  passwordIsVisible.value ? "text" : "password",
);

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
  flex: 1;
}

.password-field-container div {
  display: flex;
  align-items: center;
}
</style>
