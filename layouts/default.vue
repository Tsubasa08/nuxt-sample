<template>
  <div>
    <Navbar />
    <slot />
  </div>
</template>
<script setup>
useHead({
  titleTemplate: (title) => {
    return title ? `${title} - Nuxt 3 basic` : "Nuxt 3 basic";
  },
});
</script>
