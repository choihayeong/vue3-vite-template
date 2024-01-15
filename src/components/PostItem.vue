<template>
	<div class="card">
		<!-- <img src="..." class="card-img-top" alt="..."> -->
		<div class="card-body">
			<!-- {{ $props }} -->
			<!-- type : news, notice -->
			<!-- <span class="badge bg-secondary">{{ type === 'news' ? 'News' : 'Notice' }}</span> -->
			<span class="badge bg-secondary">{{ typeName }}</span>
			<h5 class="card-title danger mt-2">{{ title }}</h5>
			<p class="card-text">
				{{ contents }}
			</p>
			<a href="#" class="btn" :class="isLikeClass" @click="toggleLike"
				>Like ❤️</a
			>
			<br />
			{{ obj }}
		</div>
	</div>
</template>

<script>
import { computed } from "vue";

export default {
	// props: ['title', 'contents'],
	props: {
		type: {
			type: String,
			default: "news",
			validator: value => {
				return ["news", "notice"].includes(value);
			},
		},
		title: {
			type: String,
			required: true,
		},
		contents: {
			type: String,
			// required: true
		},
		isLike: {
			type: Boolean,
			deafult: false,
		},
		obj: {
			type: Object,
			// deafult: () => {
			// 	{
			// 	}
			// },
		},
	},
	emits: ["toggleLike", "changeName"],
	setup(props, context) {
		// console.log(props.title);
		const isLikeClass = computed(() =>
			props.isLike ? "btn-danger" : "btn-outline-danger",
		);
		const typeName = computed(() =>
			props.type === "news" ? "뉴스" : "공지사항",
		);
		const toggleLike = () => {
			// props.isLike = !props.isLike;
			// props.obj.name = 'Emily';
			context.emit("changeName");
			context.emit("toggleLike");
		};

		return {
			isLikeClass,
			typeName,
			toggleLike,
		};
	},
};
</script>

<style scoped lang="scss"></style>
