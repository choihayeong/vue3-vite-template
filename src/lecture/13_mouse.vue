<template>
	<div>
		<div id="modifier">
			<div @click="clickDiv">
				DIV 영역
				<p @click.self="clickP">
					P 영역
					<!-- <span @click.stop="clickSpan">SPAN 영역</span> -->
					<span @click="clickSpan">SPAN 영역</span>
					<a href="https://naver.com" @click.prevent.stop="clickAnchor">anchor 영역</a>
				</p>
			</div>
		</div>
		<!-- <a href="https://naver.com" @click.prevent="clickAnchor">anchor 영역</a> -->
		<button @click.once="clickDiv">once Button</button>
	</div>
</template>

<script>
export default {
	setup () {
		const clickDiv = () => {
			console.log('ClickDiv');
			// location.href='https://naver.com';
		}
		const clickP = () => {
			console.log('ClickP');
		}
		const clickSpan = event => {
			console.log('ClickSpan');
			// event.stopPropagation();
			// alert('Likes!❤️');
		}
		const clickAnchor = event => {
			// event.preventDefault();
			alert('Click Anchor~');
		}

		return {
			clickDiv,
			clickP,
			clickSpan,
			clickAnchor
		}
	}
}
</script>

<style lang="scss" scoped>
#modifier {
	div, p, span {
		padding: 40px;
	}
	div {
		background-color: #ccc;
	}
	p {
		background-color: #aaa;
	}
	span {
		display:block;
		background-color: #666;
	}
}
</style>