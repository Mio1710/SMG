<script setup>
definePageMeta({
  layout: 'blank',
  name: 'Login',
})

const form = ref(false)
const loading = ref(false)
const email = ref('')
const password = ref('')

const onSubmit = () => {}
</script>
<template>
  <div class="flex flex-col items-center justify-center w-full h-screen">
    <v-card class="mx-auto px-6 py-8 w-1/4" max-width="344">
      <v-form v-model="form" @submit.prevent="onSubmit">
        <v-text-field
          v-model="email"
          :readonly="loading"
          :rules="[required]"
          class="mb-2"
          label="Email"
          clearable
        />

        <v-text-field
          v-model="password"
          :readonly="loading"
          :rules="[required]"
          label="Password"
          placeholder="Enter your password"
          clearable
        />

        <br />

        <v-btn
          :disabled="!form"
          :loading="loading"
          color="success"
          size="large"
          type="submit"
          variant="elevated"
          block
        >
          Sign In
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>
