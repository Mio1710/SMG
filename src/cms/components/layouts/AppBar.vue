<script setup lang="ts">
import UserTool from "./UserTool.vue";

const emit = defineEmits(["changeRail"]);
</script>

<template>
  <v-app-bar :elevation="1" height="48">
    <template #prepend>
      <v-app-bar-nav-icon @click="emit('changeRail')" />
    </template>

    <v-app-bar-title>Content Management</v-app-bar-title>

    <template #append> <UserTool class="px-2" /> </template>
  </v-app-bar>
</template>
