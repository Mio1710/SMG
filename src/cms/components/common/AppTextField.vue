<script setup lang="ts">
const value = defineModel({
  type: String,
  default: '',
})
</script>

<template>
  <v-text-field
    v-model="value"
    color="primary"
    label="First name"
    variant="underlined"
  />
</template>
