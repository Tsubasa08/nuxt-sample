<template>
  <h1>Aboutページ</h1>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
});
useHead({
  title: "Aboutページ",
  meta: [
    {
      name: "description",
      content: "Aboutページ",
    },
  ],
});
</script>
