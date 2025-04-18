<script setup lang="ts">
const emit = defineEmits(["changeDrawer"]);
</script>

<template>
  <v-app-bar :elevation="1" height="48">
    <template #prepend>
      <v-app-bar-nav-icon @click="emit('changeDrawer')" />
    </template>

    <v-app-bar-title>Application Bar</v-app-bar-title>

    <template #append>
      <v-btn icon="mdi-heart" />
      <v-btn icon="mdi-magnify" />
      <v-btn icon="mdi-dots-vertical" />
    </template>
  </v-app-bar>
</template>
