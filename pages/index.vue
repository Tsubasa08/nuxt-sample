<template>
  <h1>Topページ</h1>
  <button @click="enableCustomLayout">Update layout</button>
</template>

<script setup>
const route = useRoute();
const enableCustomLayout = () => {
  route.meta.layout = "custom";
};
definePageMeta({
  layout: false,
});
</script>
