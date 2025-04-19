<script setup lang="ts">
const items = [
  {
    title: "My Account",
    icon: "mdi-account",
  },
  {
    title: "Settings",
    icon: "mdi-cog",
  },
  {
    title: "Logout",
    icon: "mdi-logout",
  },
];
</script>

<template>
  <v-menu>
    <template #activator="{ props }">
      <v-avatar class="elevation-1" size="40" v-bind="props">
        <v-img src="public/logo.svg" alt="Medimio" />
      </v-avatar>
    </template>

    <v-list>
      <v-list-item v-for="(item, i) in items" :key="i" :value="i">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
