<template>
	<div>
		<p>{{ reactiveMessage }}</p>

		<button v-on:click="updateRactiveMessage">Update Message</button>
	</div>
</template>

<script>
import { ref } from "vue";

export default {
	setup() {
		const reactiveMessage = ref("Hello Stranger");

		const updateRactiveMessage = () => {
			reactiveMessage.value = reactiveMessage.value + "!";
		};

		return {
			reactiveMessage,
			updateRactiveMessage,
		};
	},
};
</script>

<style lang="scss" scoped></style>
