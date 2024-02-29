<template>
  <div class="card">
    <header class="card-header">
      <h4>The Deep Child Component</h4>
    </header>
    <div class="card-body">
      <p>injected static message : {{ injectedStaticMessage }}</p>
      <p>injected message : {{ message }}</p>
      <p>injected count : {{ injectedCount }}</p>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue';

const injectedStaticMessage =  inject("static-message", "default message");
const {message, updateMessage} =  inject("message");
updateMessage("🍾");

message.value = message.value + "!!!";

const injectedCount =  inject("count");
</script>

