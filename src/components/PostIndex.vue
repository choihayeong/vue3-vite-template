<template>
	<main>
		<div class="container py-4">
			<PostCreate @create-post="createPost" />

			<hr class="my-4" />

			<div class="row g-3">
				<div v-for="item in postData" :key="item.id" class="col col-4">
					<PostItem
						:title="item.title"
						:contents="item.contents"
						:is-like="item.isLike"
						:type="item.type"
						@toggle-like="item.isLike = !item.isLike"
						:obj="obj"
						@change-name="obj.name = 'Emily'"
					/>
					<button @click="item.isLike = !item.isLike">Toggle</button>
				</div>
			</div>

			<hr class="my-4" />

			<!-- 
				modelValue
				update:modelValue
			-->

			<!-- <LabelInput :model-value="userName" @update:model-value="value => (userName = value)" /> -->
			<LabelInput
				v-model="userName"
				label="Name"
				class="parent-class"
				id="parent-id"
				style="color: red"
			/>
		</div>
	</main>
</template>

<script>
import { ref, reactive } from "vue";
import PostItem from "@/components/PostItem.vue";
import PostCreate from "@/components/PostCreate.vue";
import LabelInput from "@/components/LabelInput.vue";

export default {
	components: {
		PostItem,
		PostCreate,
		LabelInput,
	},
	setup() {
		const obj = reactive({
			name: "Brooksy",
			hobby: "Running",
		});
		const postData = reactive([
			{
				id: 1,
				title: "제목2",
				contents: "내용112",
				isLike: true,
				type: "news",
			},
			{
				id: 2,
				title: "제목23",
				contents: "내용22",
				isLike: true,
				type: "news",
			},
			{
				id: 4,
				title: "제목21",
				contents: "내용12",
				isLike: true,
				type: "news",
			},
			{
				id: 5,
				title: "제목24",
				contents: "내용25",
				isLike: false,
				type: "notice",
			},
			{
				id: 6,
				title: "제목22",
				contents: "내용32",
				isLike: false,
				type: "notice",
			},
		]);
		const createPost = newPost => {
			console.log("createPost");
			console.log("newTitle: ", newPost);
			postData.push(newPost);
		};
		const userName = ref(""),
			firstName = ref(""),
			lastName = ref("");

		return {
			postData,
			obj,
			createPost,
			userName,
			firstName,
			lastName,
		};
	},
};
</script>

<style lang="scss" scoped></style>
