<script setup>
// const {
//   data: posts,
//   error,
//   refresh,
// } = await useFetch("https://jsonplaceholder.typicode.com/posts/");
// const { data: posts, error } = await useAsyncData("porsts", () =>
//   $fetch("https://jsonplaceholder.typicode.com/posts/")
// );
const {
  data: posts,
  error,
  pending,
} = await useLazyFetch("https://jsonplaceholder.typicode.com/posts/");
console.log(("error", error.value));
</script>
<template>
  <div>
    <h1>Posts一覧</h1>
    <button @click="refresh()">再取得</button>
    <p v-if="error">{{ error }}</p>
    <p v-if="pending">Loading...</p>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <NuxtLink :to="`/posts/${post.id}`">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
