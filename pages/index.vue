<template>
  <div>
    <NuxtLayout name="default">
      <template #header>ヘッダー</template>
      <h1>Main Page</h1>
      <h2>{{ $hello("World") }}</h2>
    </NuxtLayout>
  </div>
</template>

<script setup>
const { $hello } = useNuxtApp();
</script>
