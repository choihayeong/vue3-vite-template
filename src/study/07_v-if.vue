<template>
	<div>
		<h1 v-if="isVisible">Hello Stranger!</h1>
		<h1 v-else>It's over! :P</h1>
		<button type="button" @click="isVisible = !isVisible">Toggle</button>
		<hr />
		<button type="button" @click="type = 'A'">A</button>
		<button type="button" @click="type = 'B'">B</button>
		<button type="button" @click="type = 'C'">C</button>
		<button type="button" @click="type = 'D'">D</button>

		<h2 v-if="type === 'A'">Apple</h2>
		<h2 v-else-if="type === 'B'">Banana</h2>
		<h2 v-else-if="type === 'C'">Carrot</h2>
		<h2 v-else>All about fruits</h2>
		<hr />
		<template v-if="isVisible">
			<div>
				<h1>Logo</h1>
				<h2>Title</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
					exercitationem quas accusamus atque error magni est vitae possimus,
					esse laboriosam id animi. Voluptate vero, harum laboriosam corporis
					nesciunt saepe tempora.
				</p>
			</div>
		</template>
		<hr />
		<h2 v-show="isShow">One Smile</h2>
		<button type="button" @click="isShow = !isShow">Show Toggle</button>
	</div>
</template>

<script>
import { ref } from "vue";

export default {
	setup() {
		const isVisible = ref(true),
			type = ref("A"),
			isShow = ref(true);

		return {
			isVisible,
			type,
			isShow,
		};
	},
};
</script>
