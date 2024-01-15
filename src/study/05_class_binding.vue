<template>
	<div>
		<div
			class="text"
			:class="[isActive ? 'active' : '', errorClass, classObject]"
		>
			Hello Stranger!
		</div>
		<!-- <div class="text" :class="isActive ? 'active' : '', hasError ? 'text--error' : ''">Hello Stranger!</div> -->
		<button @click="toggle">toggle</button>
		<button @click="hasError = !hasError">toggle Error</button>
	</div>
</template>

<script>
import { ref, reactive, computed } from "vue";

export default {
	setup() {
		const isActive = ref(true),
			hasError = ref(false);
		// const classObject = reactive({
		// 	active: true,
		// 	textError: false,
		// });
		const classObject = computed(() => {
			return {
				active: true,
				"text--error": false,
				"text--warning": true,
			};
		});
		const activeClass = ref("active"),
			errorClass = ref("text--error");

		const toggle = () => {
			isActive.value = !isActive.value;
		};

		return {
			isActive,
			hasError,
			classObject,
			activeClass,
			errorClass,
			toggle,
		};
	},
};
</script>

<style lang="scss" scoped>
.active {
	font-weight: bold;
}
.text {
	&--error {
		color: red;
	}
	&--warning {
		color: rgb(184, 184, 23);
	}
}
</style>
