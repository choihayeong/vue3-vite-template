<template>
  <div class="container py-4">
    <input ref="inputRef" type="text" value="hello stranger 👋" />

    <life-cycle-child></life-cycle-child>

    <ul class="colors">
      <li v-for="color in colors" :key="color.name">
        <span class="color-chip" :style="`background-color: #${color.value}`"></span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onBeforeMount, onMounted, ref } from 'vue';
import LifeCycleChild from './LifeCycleChild.vue';

const colors = [
  {
    name: "Payne's gray",
    value: "5d737e"
  },
  {
    name: "Verdigris",
    value: "64b6ac"
  },
  {
    name: "Celeste",
    value: "c0fdfb"
  },
  {
    name: "Mint green",
    value: "daffef"
  },
  {
    name: "Baby Powder",
    value: "fcfffd"
  }
];

console.log("setup");

const inputRef = ref(null);

onBeforeMount(() => {
  console.log("onBeforeMount", inputRef.value);
});
onMounted(() => {
  console.log("onMounted", inputRef.value.value);
});
</script>

<style scoped>
.colors {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
}
.color-chip {
  display: block;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
}
</style>