<template>
  <div>
    <p>{{ message }}</p>
    <button type="button" @click="updateMessage">Click</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup () {
    let message = ref('Hello Stranger :P');
    const updateMessage = () => {
      message.value = message.value + ':P';
    }

    console.log(message);
    console.log('message: ', message.value);
    console.log('type of message: ', typeof message.value);

    return {
      message,
      updateMessage,
    }
  }
}
</script>
