<template>
	<div class="row g-3">
		<div class="col col-2">
			<select
				v-model="type"
				class="form-select"
				aria-label="Default select example"
			>
				<option value="news">News</option>
				<option value="notice">Notice</option>
			</select>
		</div>
		<div class="col col-8">
			<input type="text" class="form-control" v-model="title" />
		</div>
		<div class="col col-2">
			<!-- @click="$emit('createPost', 1, 2, 3, 'Brooksy')" -->
			<button class="btn btn-primary d-grid" @click="createPost">추가</button>
		</div>
	</div>
</template>

<script>
import { ref } from "vue";

export default {
	// emits: ['createPost'],
	emits: {
		/* 유효성 체크 */
		createPost: newPost => {
			console.log("validator: ", newPost);
			if (!newPost.type) {
				return false;
			} else if (!newPost.title) {
				return false;
			}
			return true;
		},
		/* 유효성 체크가 필요 없을 경우 */
		// createPost: null,
	},
	setup(props, { emit }) {
		const type = ref("news");
		const createPost = () => {
			const newPost = {
				type: type.value,
				title: title.value,
			};
			emit("createPost", newPost);
			type.value = "news";
			title.value = "";
		};
		const title = ref("");

		return {
			createPost,
			title,
			type,
		};
	},
};
</script>

<style lang="scss" scoped></style>
