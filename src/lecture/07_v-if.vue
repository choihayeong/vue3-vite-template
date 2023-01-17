<template>
	<div>
		<h2 v-if="visible">Hello Stranger!</h2>
		<h2 v-else>Booooooom! :P</h2>
		<button @click="visible = !visible">toggle</button>
		<hr>
		<button @click="type = 'A'">A</button>
		<button @click="type = 'B'">B</button>
		<button @click="type = 'C'">C</button>
		<button @click="type = 'D'">D</button>

		<h2 v-if="type === 'A'">Apple</h2>
		<h2 v-else-if="type === 'B'">Banana</h2>
		<h2 v-else-if="type === 'C'">Carrot</h2>
		<h2 v-else>All about fruits</h2>
		<hr>
		<template v-if="visible">
			<h1>Logo</h1>
			<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque enim vel quia autem quaerat. Facere fugit veritatis, vitae at, voluptatum iste temporibus maiores cumque dolorum tempore id velit ex eaque?</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, optio repellat odio deserunt, dicta eaque ratione atque saepe eligendi hic cupiditate eveniet. Et consequatur amet totam voluptate illum minima soluta.</p>
		</template>
		<hr>
		<h1 v-show="isShow">Title</h1>
		<button @click="isShow = !isShow">show toggle</button>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup () {
		const visible = ref(true),
			type = ref('A'),
			isShow = ref(true);

		return {
			visible,
			type,
			isShow
		}
	}
}
</script>