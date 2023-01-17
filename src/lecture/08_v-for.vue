<template>
	<div>
		<ul>
			<template v-for="(item, index) in evenItems" :key="item.id">
				<!-- <li v-if="item.id % 2 === 0">
					ID: {{ item.id }}
					Index: {{ index }} : {{ item.message }}
				</li> -->
				<li>
					ID: {{ item.id }}
					Index: {{ index }} : {{ item.message }}
				</li>
			</template>
		</ul>
		<hr>
		<ul>
			<li v-for="(value, key, index) in myObject" :key="key">
				{{ index }} - {{ key }} - {{ value }}
			</li>
		</ul>
	</div>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
	setup () {
		const items = reactive([
			{id: 1, message: 'apple'},
			{id: 2, message: 'banana'},
			{id: 3, message: 'carrot'},
			{id: 4, message: 'durian'},
		]),
			evenItems = computed(() => items.filter((item) => item.id % 2 === 0)),
			myObject = reactive({
				greeting: 'Hello Stranger',
				userName: 'Brooksy',
				newDate: new Date(),
			});

		return {
			items,
			evenItems,
			myObject
		}
	}
}
</script>