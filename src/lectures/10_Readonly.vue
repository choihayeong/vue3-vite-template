<template>
  <div></div>
</template>

<script>
import { reactive, readonly } from 'vue';

export default {
  setup () {
    const origin = reactive({
      count: 0,
    })
    const copy = readonly(origin);

    origin.count++;
    copy.count++;

    console.log(origin.count);
    console.log(copy.count);

    return {}
  }
}
</script>