<script setup lang="ts">
import NavigationMenu from "~/components/layouts/NavigationMenu.vue";
</script>

<template>
  <v-layout>
    <NavigationMenu class="p-3" />
    <v-main>
      <slot />
    </v-main>
  </v-layout>
</template>
