<template>
  <div>
    Life cycle Child
  </div>
</template>

<script setup>
import { onBeforeMount, onMounted } from 'vue';

console.log("{Child} : setup");

onBeforeMount(() => {
  console.log("{Child} : onBeforeMount");
});
onMounted(() => {
  console.log("{Child} : onMounted");
});
</script>
