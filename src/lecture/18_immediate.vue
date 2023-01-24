<template>
	<div>
		<p>{{ message }}</p>
		<p>{{ reverseMessage }}</p>
	</div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
	setup () {
		const message = ref('Hello Strangers!'),
			reverseMessage = ref('');

		/* watch(message, (newData) => {
			reverseMessage.value = newData.split('').reverse().join('');
		}, {
			immediate: true
		}) */	
		const printReverseMessage = () => {
			console.log('immediate');
			reverseMessage.value = message.value.split('').reverse().join('');
		}
		watch(message, printReverseMessage);
		printReverseMessage();

		/*
		
		computed vs watch

		computed의 경우 위에 예시를 보면 message에 따라서 reverseMessage가 결정되어야 한다면 cmputed를 쓰는게 좋다

		watch는 call api, push route 등 특정 액션에 적합

		*/

		return {
			message,
			reverseMessage
		}
	}
}
</script>
