<template>
	<main>
		<div class="container py-4">
			<MyButton class="any-class" @click="sayHello" />
			<LabelInput label="이름" data-id="id입니다" />

			<hr />

			<FancyButton>Click!! <span style="color: red">@@@</span> </FancyButton>
			<FancyButton v-slot="{ fancyMessage }">{{ fancyMessage }}</FancyButton>
			<!-- <FancyButton>
        <template #default="{ fancyMessage }">{{ fancyMessage }}</template>
      </FancyButton> -->

			<hr />

			<AppCard>
				<!-- <template #[slotArgs]>제목입니다</template> -->
				<!-- 내용이에용 <em>안뇽</em> -->
				<!-- <template #footer>푸터입니다</template> -->

				<template #header="{ headerMessage }">{{ headerMessage }}</template>

				<template #default="{ childMessage, helloMessage }">
					{{ childMessage }} <br />
					Default 입니다 {{ message }} <br />
					{{ helloMessage }}
				</template>

				<template #footer="{ footerMessage }">{{ footerMessage }}</template>
			</AppCard>

			<AppCard> 게시글 입니다. </AppCard>
		</div>
	</main>
</template>

<script setup>
import { ref } from "vue";

import MyButton from "./MyButton.vue";
import LabelInput from "./LabelInput.vue";
import FancyButton from "./FancyButton.vue";
import AppCard from "./AppCard.vue";

const sayHello = () => {
	alert("안녕하세요.");
};

const slotArgs = ref("header");
const message = ref("Rule the world");
</script>
