<template>
	<div class="cal-wraper">
		<div class="ab" @click="this.clickEv(-1)">-</div>
		<input v-model="inputValue" placeholder="请输入数字"/>
		<div class="ab">+</div>
		<p>Message is: {{ inputValue }}</p>
		<input v-model="message" placeholder="edit me">
		<p>Message is: {{ message }}</p>
	</div>
</template>
<style lang="stylus">
	.cal-wraper
		margin 0 auto
		text-align center
	.ab
		display inline-block
		width 50px
		line-height 1.5
		font-size 18px
		background #008be3
		color: #fff;
		letter-spacing: -.02em;
		border-radius: 28px;
		margin 20px 40px
		text-align center
		cursor pointer
</style>
<script>
	export default {
		data() {
			return {
				inputValue: 0
			}
		},
		methods: {
			clickEv(val) {
				this.inputValue = this.inputValue + val
				console.log(this.inputValue)
			}
		}
	}
</script>
