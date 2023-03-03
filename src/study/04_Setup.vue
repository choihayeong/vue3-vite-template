<template>
  <div>
    <p>{{ counter }}</p>
    <p>{{ message }}</p>
    <button type="button" @click="increment">Click</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup () {
    const counter = ref(0);
    const message = ref('Hello Stranger!');
    const increment = () => {
      counter.value++;
    }

    return {
      counter,
      message,
      increment,
    }
  }
}
</script>