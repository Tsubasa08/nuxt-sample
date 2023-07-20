<template>
  <div>
    <NuxtLayout name="default">
      <template #header>ヘッダー</template>
      <h1>Main Page</h1>
      <img src="~/assets/icon.ico" alt="" />
      <div>Count: {{ count }}</div>
      <div>
        <button @click="() => inc()">increase</button>
        <button @click="() => dec()">decrease</button>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
const { count, inc, dec } = useCounter(100);
definePageMeta({
  layout: false,
});
</script>
