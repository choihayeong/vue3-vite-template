<template>
	<div>
		<p>{{ message }}</p>
		<button @click="updateMessage">Click It!</button>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		let message = ref('Hello Stranger');
		const updateMessage = () => {
			message.value = message.value + '!';
		};
		console.log(message);
		console.log('message: ', message.value);
		console.log('type of message: ', typeof message.value);

		return {
			message,
			updateMessage,
		};
	},
};
</script>
