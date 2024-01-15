<template>
	<div>
		<h2>Input Values</h2>
		<!-- <input type="text" :value="inputVal" @input="event => inputVal = event.target.value"> -->
		<!-- <input type="text" v-model.lazy="inputVal"> -->
		<!-- <input type="text" v-model.number="inputVal"> -->
		<input type="text" v-model.trim="inputVal" />
		<div>{{ inputVal }}</div>
		<div>{{ typeof inputVal }}</div>
		<hr />
		<h2>Textarea Values</h2>
		<!-- <textarea v-model="taVal" @input="event => taVal= event.target.value"></textarea> -->
		<textarea v-model.lazy="taVal"></textarea>
		<div>{{ taVal }}</div>
		<hr />
		<h2>Checkbox Value</h2>
		<label for="defaultChk">{{ chkVal }}</label>
		<!-- <input type="checkbox" id="defaultChk" :checked="chkVal" @change="event => chkVal = event.target.checked"> -->
		<input
			type="checkbox"
			id="defaultChk"
			v-model="chkVal"
			true-value="Yes"
			false-value="No"
		/>
		<h3>Checkbox Values</h3>
		<label for="Sugar">
			<input
				type="checkbox"
				name="ingredients"
				id="Sugar"
				value="Sugar"
				v-model="chkValues"
			/>
			Sugar
		</label>
		<label for="Salt">
			<input
				type="checkbox"
				name="ingredients"
				id="Salt"
				value="Salt"
				v-model="chkValues"
			/>
			Salt
		</label>
		<label for="Pepper">
			<input
				type="checkbox"
				name="ingredients"
				id="Pepper"
				value="Pepper"
				v-model="chkValues"
			/>
			Pepper
		</label>
		<div>{{ chkValues }}</div>
		<hr />
		<h2>Radio Value</h2>
		<label for="typeA">
			<!-- <input type="radio" name="bloodType" id="typeA" value="A" :checked="radioVal === 'A'" @change="event => radioVal = event.target.value"> -->
			<input
				type="radio"
				name="bloodType"
				id="typeA"
				value="A"
				v-model="radioVal"
			/>
			Blood type A
		</label>
		<label for="typeB">
			<!-- <input type="radio" name="bloodType" id="typeB" value="B" :checked="radioVal === 'B'" @change="event => radioVal = event.target.value"> -->
			<input
				type="radio"
				name="bloodType"
				id="typeB"
				value="B"
				v-model="radioVal"
			/>
			Blood type B
		</label>
		<label for="typeO">
			<!-- <input type="radio" name="bloodType" id="typeO" value="O" :checked="radioVal === 'O'" @change="event => radioVal = event.target.value"> -->
			<input
				type="radio"
				name="bloodType"
				id="typeO"
				value="O"
				v-model="radioVal"
			/>
			Blood type O
		</label>
		<label for="typeAB">
			<!-- <input type="radio" name="bloodType" id="typeAB" value="AB" :checked="radioVal === 'AB'" @change="event => radioVal = event.target.value"> -->
			<input
				type="radio"
				name="bloodType"
				id="typeAB"
				value="AB"
				v-model="radioVal"
			/>
			Blood type AB
		</label>
		<div>{{ radioVal }}</div>
		<hr />
		<h2>Select Box</h2>
		<!-- <select :value="sltValue" @change="event => sltValue = event.target.value"> -->
		<select v-model="sltValue">
			<option value="apple">Apple</option>
			<option value="banana">Banana</option>
			<option value="carrot">Carrot</option>
		</select>
		<div>{{ sltValue }}</div>
	</div>
</template>

<script>
import { ref } from "vue";

export default {
	setup() {
		const inputVal = ref(null),
			taVal = ref(null),
			chkVal = ref("Yes"),
			chkValues = ref([]),
			radioVal = ref("A"),
			sltValue = ref("apple");

		return {
			inputVal,
			taVal,
			chkVal,
			chkValues,
			radioVal,
			sltValue,
		};
	},
};
</script>
