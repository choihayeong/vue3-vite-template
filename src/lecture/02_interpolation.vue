<template>
  <div>
    <h2>Interpolation</h2>
    <div>{{ defaultMsg }}</div>
    <div v-once>{{ defaultMsg }}</div>
    <button type="button" v-on:click="defaultMsg = defaultMsg + '!'">
      Click It!
    </button>
    <hr />
    <h2>v-html</h2>
    <div>{{ rawHtml }}</div>
    <div v-html="rawHtml"></div>
    <hr />
    <h2>Attr Binding</h2>
    <div :title="dynamicTitle">Enter you Mouse cursor</div>
    <input type="text" value="Marilyn Ha" :disabled="isDisabled" />
    <input v-bind="attrs" />
    <hr />
    <h2>Javascript</h2>
    {{ defaultMsg.split("").reverse().join("") }}
    {{ isDisabled ? "Disabled" : "Able" }}
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    /* Interpolation */
    const defaultMsg = ref("Hi there!");
    /* v-html */
    const rawHtml = ref("<strong>Strong Tag For Message</strong>");
    /* Attr Binding */
    const dynamicTitle = ref("Good to see ya!");
    const isDisabled = ref(false);
    const attrs = ref({
      type: "number",
      value: 10001011110,
      disabled: false,
    });

    return {
      defaultMsg,
      rawHtml,
      dynamicTitle,
      isDisabled,
      attrs,
    };
  },
};
</script>

<style scoped></style>
