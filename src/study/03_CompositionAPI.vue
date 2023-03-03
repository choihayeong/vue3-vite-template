<template>
  <div>
    <h2>Reactive Message</h2>
    <p>{{ reactiveMessage }}</p>
    <button type="button" @click="updateReactiveMessage">Update Message</button>
    <h2>Normal Message</h2>
    <p>{{ normalMessage }}</p>
    <button type="button" @click="updateNormalMessage">Update Message</button>
  </div>
</template>

<script>
import { isRef, onBeforeMount, onMounted, ref } from 'vue';

export default {
  setup() {
    console.log('setup');
    const reactiveMessage = ref('Hello Stranger!');
    const updateReactiveMessage = () => {
      reactiveMessage.value = reactiveMessage.value + ':P';
    }
    console.log('isRef(message): ', isRef(reactiveMessage)); // Boolean

    let normalMessage = 'Hi there!';
    const updateNormalMessage = () => {
      normalMessage = normalMessage + ':P';
    }
    console.log('isRef(normalMessage): ', isRef(normalMessage)); // Boolean

    onBeforeMount(() => {
      console.log('Before Mounted.........');
    })
    onMounted(() => {
      console.log('Mounted!');
    })

    return {
      reactiveMessage,
      normalMessage,
      updateReactiveMessage,
      updateNormalMessage,
    }
  }
}
</script>