<template>
	<div>
		<div :style="styleObject">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic optio cumque
			ad id rerum! Deserunt non saepe maxime accusamus aliquid, iure quos
			perferendis accusantium numquam fugiat, voluptates veritatis impedit illo?
		</div>
		<button @click="fontSize--">-</button>
		<button @click="fontSize = 18">reset</button>
		<button @click="fontSize++">+</button>
	</div>
</template>

<script>
import { reactive, ref, computed } from "vue";

export default {
	setup() {
		// const styleObject = reactive({
		// 	color: 'blue',
		// 	fontSize: '18px'
		// })
		const fontSize = ref(18),
			styleObject = computed(() => {
				return {
					color: "blue",
					fontSize: `${fontSize.value}px`,
				};
			});

		return {
			fontSize,
			styleObject,
		};
	},
};
</script>
