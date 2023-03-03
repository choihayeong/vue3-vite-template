<template>
  <div>
    <h2>Interpolation</h2>
    <div>{{ defaultMsg }}</div>
    <div v-once>{{ defaultMsg }}</div>
    <button type="button" @click="defaultMsg = defaultMsg + ':P'">Click</button>
    <hr>
    <h2>v-html</h2>
    <div v-html="rawHtml"></div>
    <hr>
    <h2>Attr Binding</h2>
    <div :title="dynamicTitle">Mouse up</div>
    <input type="text" value="Marilyn" :disabled="isDisabled">
    <input v-bind="attrs">
    <hr>
    <h2>Javascript</h2>
    {{ defaultMsg.split('').reverse().join('') }} <br>
    {{ isDisabled ? 'Disabled' : 'Able' }}
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup () {
    /* Interpolation */
    const defaultMsg = ref('Hello Stranger!');
    /* v-html */
    const rawHtml = ref('<strong>Strong Tag For......</strong>');
    /* Attr Binding */
    const dynamicTitle = ref('Hi there!');
    const isDisabled = ref(false);
    const attrs = ref({
      type: 'number',
      value: '1001011110',
      disabled: false,
    })

    return {
      defaultMsg,
      rawHtml,
      dynamicTitle,
      isDisabled,
      attrs,
    }
  }
}
</script>