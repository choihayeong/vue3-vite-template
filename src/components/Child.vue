<template>
  <div class="card">
    <header class="card-header">
      <h3>Child Component</h3> 
    </header>
    <div class="card-body">
      <deep-child></deep-child>
    </div>
  </div>
</template>

<script setup>
import DeepChild from './DeepChild.vue';
</script>
