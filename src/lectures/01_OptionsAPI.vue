<template>
	<div>
		<button type="button" @click="increment">Counter: {{ counter }}</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
		counter: 0,
		}
	},
	methods: {
		increment() {
		this.counter++;
		}
	},
	mounted() {
		console.log('Mounted!');
	}
}
</script>