<template>
  <div>
    <NuxtLayout name="default">
      <template #header>ヘッダー</template>
      <h1>Main Page</h1>
      <img src="~/assets/icon.ico" alt="" />
    </NuxtLayout>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false,
});
</script>
