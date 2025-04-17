<script setup lang="ts">
const rail = ref(true);
const drawer = ref(true);
</script>

<template>
  <v-card>
    <v-navigation-drawer
      v-model="drawer"
      :rail="rail"
      permanent
      @click="rail = false"
    >
      <div class="flex items-center">
        <v-img
          src="public/logo.svg"
          height="60px"
          width="60px"
          alt="Medimio"
          @click.stop="rail = !rail"
        />
        <span class="w-full ml-2 text-2xl font-bold text-[#45c74c]"
          >Miodium</span
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
  </v-card>
</template>
