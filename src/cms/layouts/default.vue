<script setup lang="ts">
import AppBar from "~/components/layouts/AppBar.vue";
import NavigationMenu from "~/components/layouts/NavigationMenu.vue";

const rail = ref(false);
</script>

<template>
  <v-layout>
    <NavigationMenu :rail class="p-3" />
    <AppBar class="p-2" @change-rail="rail = !rail" />

    <v-main>
      <slot />
    </v-main>
  </v-layout>
</template>
