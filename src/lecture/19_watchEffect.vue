<template>
	<div>
		<form @submit.prevent>
			<input type="text" v-model.lazy="title" placeholder="Title"> <br>
			<textarea v-model.lazy="contents" placeholder="Contents"></textarea>
			<hr>
			<button @click="save(title, contents)">Save It</button>
		</form>
	</div>
</template>

<script>
import { ref, watchEffect } from 'vue';

export default {
	setup () {
		const title = ref(''),
			contents = ref('');

		const save = (title, contents) => {
			console.log(`save! title: ${title}, contents: ${contents}`);
		}
		watchEffect(() => {
			console.log('Watch Effect');
			save(title.value, contents.value);
		})

		/*
		
		watch vs watchEffect

		watch는 명시적으로 관찰

		watchEffect는 즉시 실행 (watch도 immediate를 사용하면 똑같은 효과)

		 */

		return {
			title, contents, save
		}
	}
}
</script>
