<script setup lang="ts">
import AppBar from "~/components/layouts/AppBar.vue";
import NavigationMenu from "~/components/layouts/NavigationMenu.vue";

const drawer = ref(true);
</script>

<template>
  <v-layout>
    <NavigationMenu :drawer class="p-3" />
    <AppBar class="p-2" @changeDrawer="drawer = !drawer" />

    <v-main>
      <slot />
    </v-main>
  </v-layout>
</template>
