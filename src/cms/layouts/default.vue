<script setup lang="ts">
import NavigationMenu from '../components/layouts/NavigationMenu.vue';

// import type { NavigationMenuItem } from '@nuxt/ui';
</script>

<template>
  <div class="flex flex-row h-screen">
    <NavigationMenu />
    <div>
      <h1>This is layout</h1>
      <slot />
    </div>
  </div>
</template>
