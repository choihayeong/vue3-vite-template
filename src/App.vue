<template>
	<div>
		<h2>보간법</h2>
		<p>{{ message }}</p>
		<p v-once>{{ message }}</p>
		<button v-on:click="message = message + '!'">Click ME!</button>
		<hr />
		<h2>v-html</h2>
		<p>{{ rawHtml }}</p>
		<p v-html="rawHtml"></p>
		<h2>속성 바인딩</h2>
		<div :title="dynamicTitle">마우스를 올려보세용</div>
		<input type="text" value="길동 홍" :disabled="isInputDisabled" />
		<input v-bind="attrs" />
		<h2>Javascript</h2>
		{{ message.split('').reverse().join('') }} <br />
		{{ isInputDisabled ? 'yes' : 'no' }}
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const message = ref('Hello Stranger!');
		const rawHtml = ref('<strong>Hello Stranger!</strong>');

		const dynamicTitle = ref('Hola!');
		const isInputDisabled = ref(false);
		const attrs = ref({
			type: 'text',
			value: '12345678!@#$',
			disabled: false,
		});

		return {
			message,
			rawHtml,
			dynamicTitle,
			isInputDisabled,
			attrs,
		};
	},
};
</script>

<style lang="scss" scoped></style>
