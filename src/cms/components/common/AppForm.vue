<template>
  <form v-bind="$attrs">
    <slot />
    <div class="flex justify-end mt-4">
      <AppButton type="submit" color="primary">Submit</AppButton>
    </div>
  </form>
</template>
