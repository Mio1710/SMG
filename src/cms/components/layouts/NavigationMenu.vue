<script setup lang="ts">
const props = defineProps({
  drawer: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <v-navigation-drawer :rail="props.drawer" permanent>
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
      <v-list-item prepend-icon="mdi-home-city" title="Home" value="home" />
      <v-list-item
        prepend-icon="mdi-account"
        title="My Account"
        value="account"
      />
      <v-list-item
        prepend-icon="mdi-account-group-outline"
        title="Users"
        value="users"
      />
    </v-list>
  </v-navigation-drawer>
</template>
