<template>
	<div>
		<h2>{{ userInfo.name }}'s Info</h2>
		<h3>Is there Item?</h3>
		<p>{{ hasItem }}</p>
		<p>{{ hasItem }}</p>
		<p>{{ isItem() }}</p>
		<p>{{ isItem() }}</p>
		<button @click="counter++">Counter: {{ counter }}</button>
		<h2>Name</h2>
		<p>{{ fullName }}</p>
	</div>
</template>

<script>
import { computed, reactive, ref } from "vue";

export default {
	setup() {
		/* userInfo */
		const userInfo = reactive({
				name: "Brooksy",
				items: ["Mistic Wind", "Lobe", "Nambi Shield"],
			}),
			hasItem = computed(() => {
				// computed
				console.log("computed");
				return userInfo.items.length > 0 ? "Yes 👍" : "No 😞";
			}),
			isItem = () => {
				// method
				console.log("method");
				return userInfo.items.length > 0 ? "Yes 👍" : "No 😞";
			};

		/* counter, fullName */
		const counter = ref(0),
			firstName = ref("Brooksy"),
			lastName = ref("Belbin"),
			fullName = computed({
				get() {
					return `${firstName.value} ${lastName.value}`;
				},
				set(value) {
					[firstName.value, lastName.value] = value.split(" ");
				},
			});

		console.log("Print Console", fullName.value);
		fullName.value = "Tanith White"; // computed는 readonly

		return {
			userInfo,
			hasItem,
			isItem,
			counter,
			fullName,
		};
	},
};
</script>
