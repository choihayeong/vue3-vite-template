<template>
	<div>
		<button @click="printEventInfo('Hello Vue3', $event)">Inline Event Handler</button>
		<hr>
		<input type="text" @keyup="onKeyupHandler">
	</div>
</template>

<script>
export default {
	setup () {
		const printEventInfo = (message, event) => {
			console.log('Message: ', message);
			console.log('event.target: ', event.target);
			console.log('event.tagert.tagName: ', event.target.tagName);
		}
		const onKeyupHandler = event => {
			console.log('event.key: ', event.key);
		}

		return {
			printEventInfo,
			onKeyupHandler
		}
	}
}
</script>
