<script setup lang="ts">
import NavigationMenu from '../components/layouts/NavigationMenu.vue';

// import type { NavigationMenuItem } from '@nuxt/ui';
</script>

<template>
  <NuxtLayout>
    <v-app>
      <NavigationMenu class="p-3"/>
    <div>
      <h1>This is layout</h1>
      <NuxtPage />
    </div>
    </v-app>
  </NuxtLayout>
</template>
