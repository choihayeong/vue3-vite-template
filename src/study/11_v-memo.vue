<template>
	<div>
		<div v-memo="[protein, fat]">
			<p>carb: {{ carb }}g</p>
			<p>protein: {{ protein }}g</p>
			<p>fat: {{ fat }}g</p>
		</div>
		<button @click="carb++">Carb ++</button>
		<button @click="protein++">Protein ++</button>
		<button @click="fat++">Fat ++</button>
		<div>
			<p>carb: {{ carb }}g</p>
			<p>protein: {{ protein }}g</p>
			<p>fat: {{ fat }}g</p>
		</div>
	</div>
</template>

<script>
import { ref } from "vue";

export default {
	setup() {
		const carb = ref(300),
			protein = ref(40),
			fat = ref(20);

		return {
			carb,
			protein,
			fat,
		};
	},
};
</script>
