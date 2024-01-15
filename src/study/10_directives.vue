<template>
	<div>
		<p>{{ msg }}</p>
		<p v-text="msg"></p>
		<p v-html="htmlStr"></p>
		<p v-text="htmlStr"></p>
		<p v-pre>{{ msg Hithere! }}</p>
		<p v-once>{{ msg }} !!!</p>
	</div>
</template>

<script>
import { ref } from "vue";

export default {
	setup() {
		const msg = ref("Hello"),
			htmlStr = ref("<strong>Hello Stranger!</strong>");

		return {
			msg,
			htmlStr,
		};
	},
};
</script>
