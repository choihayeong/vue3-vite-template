<template>
  <div>
    <p>Name: {{ name }}</p>
    <p>position: {{ position }}</p>
  </div>
</template>

<script>
import { reactive, toRef, toRefs } from 'vue';

export default {
  setup () {
    const user = reactive({
      name: 'Brooksy',
      age: 31,
      nickName: 'Emily',
      position: 'Front Developer',
      level: 'Junior',
    })

    // const { name, position } = toRefs(user);
    const name = toRef(user, 'name');
    const position = toRef(user, 'position');

    return {
      name,
      position,
    }
  }
}
</script>