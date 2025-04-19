<script setup lang="ts">
import { navigation } from "~/configs";

const props = defineProps({
  rail: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <v-navigation-drawer :rail="props.rail" width="200">
    <div class="flex items-center">
      <v-img
        src="public/logo.svg"
        height="48px"
        width="48px"
        alt="Medimio"
        class="ml-1"
      />
      <span class="w-full ml-2 text-2xl font-bold text-[#45c74c]">
        Miodium</span
      >
    </div>

    <v-divider />

    <v-list density="compact" nav>
      <v-list-item
        v-for="item in navigation"
        :key="item.to"
        :prepend-icon="item.icon"
        :title="item.title"
        :value="item.to"
      />
    </v-list>
  </v-navigation-drawer>
</template>
