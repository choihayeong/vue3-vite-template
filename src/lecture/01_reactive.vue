<template>
  <div>
    <h2>Vue Reactive: {{ reactiveMessage }}</h2>
    <button type="button" v-on:click="updateMessage">Click Event</button>
    <hr />
    <h2>
      Click Count <span>{{ clickCnt }}</span>
    </h2>
    <button type="button" v-on:click="clickCntEvent">Press</button>
    <hr />
    <h2>Input Box</h2>
    <input type="text" v-model="inputValue" />
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    /* reactive */
    const reactiveMessage = ref("Hello Stranger!");
    const updateMessage = () => {
      reactiveMessage.value = `${reactiveMessage.value} !`;
    };
    const clickCnt = ref(0);
    const clickCntEvent = () => {
      clickCnt.value++;
    };
    const inputValue = ref("placeholder");

    return {
      reactiveMessage,
      clickCnt,
      inputValue,
      updateMessage,
      clickCntEvent,
    };
  },
};
</script>

<style scoped></style>
