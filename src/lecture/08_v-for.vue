<template>
	<div>
		<ul>
			<!-- <li v-for="(item, index) in ingredientsData" :key="item.id">{{ item.ingredient }}</li> -->
			<template v-for="(item, index) in evenItems" :key="item.id">
				<!-- <li v-if="item.id % 2 === 0">
					ID: {{ item.id }},
					Index: {{ index }} : {{ item.ingredient }}
				</li> -->
				<li>
					ID: {{ item.id }},
					Index: {{ index }} : {{ item.ingredient }}
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
		const ingredientsData = reactive([
			{id: 1, ingredient: 'apple'},
			{id: 2, ingredient: 'banana'},
			{id: 3, ingredient: 'carrot'},
			{id: 4, ingredient: 'dark chocolate'}
		]);
		const evenItems = computed(() => ingredientsData.filter((item, index) => item.id % 2 === 0));
		const myObject = reactive({
			songName: 'Never Too Late',
			singer: 'Three Days Grace',
			releaseDate: '2006'
		})

		return {
			ingredientsData,
			evenItems,
			myObject
		}
	}
}
</script>