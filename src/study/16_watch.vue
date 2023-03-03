<template>
	<div></div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
	setup () {
		const message = ref('');

		watch(message, (newValue, oldValue) => {
			// DOM ~
			console.log('newValue: ', newValue);
			console.log('oldValue: ', oldValue);
			// API ~ state 변경
		})

		return {
			message
		}
	}
}
</script>
