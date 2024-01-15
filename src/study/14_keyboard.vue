<template>
	<div>
		<input type="text" @keyup.ctrl.enter="addTodo" />
		<ul>
			<li v-for="(item, index) in todos" :key="index">
				{{ item }}
			</li>
		</ul>
	</div>
</template>

<script>
import { reactive } from "vue";

export default {
	setup() {
		const todos = reactive([]);

		const addTodo = event => {
			// console.log('event.key', event.key);
			// if (event.key === 'Enter') {
			// 	todos.push(event.target.value);
			// }
			todos.push(event.target.value);
			event.target.value = "";
			event.target.focus();
		};

		return {
			todos,
			addTodo,
		};
	},
};
</script>
