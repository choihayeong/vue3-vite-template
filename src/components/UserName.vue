<template>
	<div>
		<LabelInput
			:model-value="firstName"
			@update:model-value="value => $emit('update:firstName', value)"
			label="First Name"
		/>
		<LabelInput
			:model-value="lastName"
			@update:model-value="value => $emit('update:lastName', value)"
			label="Last Name"
		/>
	</div>
</template>

<script>
import LabelInput from "@/components/LabelInput.vue";

export default {
	props: ["firstName", "lastName"],
	emits: ["update:firstName", "update:lastName"],
	components: {
		LabelInput,
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
