<template>
	<div></div>
</template>

<script>
import { ref, reactive, watch } from "vue";

export default {
	setup() {
		const x = ref(0),
			y = ref(0),
			obj = reactive({
				count: 0,
			}),
			user = reactive({
				name: "Brooksy",
				age: "31",
				hobby: "Running",
				obj: {
					count: 0,
				},
			});

		// watch(
		// 	() => x.value + y.value,
		// 	(sum, oldValue) => {
		// 		console.log('Sum: ', sum);
		// 		console.log('oldValue: ', oldValue);
		// 	}
		// )

		// watch([x, y], ([newX, newY]) => {
		// 	console.log(newX, newY);
		// })

		console.log(typeof obj.count);
		// watch(
		// 	() => obj.count,
		// 	(newData, oldData) => {
		// 		console.log('newData: ', newData);
		// 	}
		// )
		/* object의 속성을 감지하고 싶을땐 getter함수 사용 */

		// watch(
		// 	obj,
		// 	(newData, oldData) => {
		// 		console.log('newData: ', newData);
		// 		console.log('oldData: ', oldData);
		// 	}
		// )

		// watch(user, (newValue) => {
		// 	console.log('newValue: ', newValue);
		// })

		watch(
			() => user.obj,
			newValue => {
				console.log("newValue: ", newValue);
			},
		);

		return {
			x,
			y,
			obj,
			user,
		};
	},
};
</script>
