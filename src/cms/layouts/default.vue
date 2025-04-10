<script setup lang="ts">
// import type { NavigationMenuItem } from '@nuxt/ui';
</script>

<template>
  <div>
    <UNavigationMenu
      orientation="vertical"
      class="data-[orientation=vertical]:w-48"
    />
    <slot />
  </div>
</template>
