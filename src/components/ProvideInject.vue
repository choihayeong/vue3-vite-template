<template>
  <div class="container py-4">
    <div class="card">
      <header class="card-header">
        <h2>Project / Inject Component</h2>
      </header>
      <div class="card-body">
        <button @click="() => {count++}">Increment(++)</button>
        {{ appMessage }}
        <child></child>
      </div>
    </div>
  </div>
</template>

<script setup>
import { provide, inject, readonly, ref, onMounted } from 'vue';
import Child from './Child.vue';

const staticMessage = "It's Static Message";
const message = ref("message");

/**
 * @param {string} appendMessage 
 */
const updateMessage = (appendMessage) => {
  message.value = message.value + appendMessage;
};

const count = ref(10);

// provide("static-message", staticMessage);
provide("message", {message : readonly(message), updateMessage});
provide("count", count);

const appMessage = inject("app-message");

onMounted(() => {
  console.log(this); // undefined
});
</script>

