<script setup lang="ts">

import NavigationMenu from '~/components/layouts/NavigationMenu.vue';

</script>

<template>
    <v-app>
      <NavigationMenu class="p-3"/>
    <div>
      <h1>This is layout</h1>
      <!-- <NuxtPage /> -->
       <slot />
    </div>
    </v-app>
</template>
