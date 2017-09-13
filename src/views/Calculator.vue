<template>
	<div class="cal-wraper">
		<div class="ab" @click="increment(-1)">-</div>
		<input v-model="count" placeholder="请输入数字"/>
		<div class="ab" @click="increment(1)">+</div>
		<p>Message is: {{ count }}</p>
	</div>
</template>
<script>
	import {mapGetters, mapActions} from 'vuex'

	export default {
		name: 'Calculator',
		data() {
			return {}
		},
		methods: {
			...mapActions(["increment"]),
		},
		asyncData({store}) {
			return store.dispatch('increment', 10)
		},
		computed: {
			...mapGetters(['count'])
		}
	}
</script>
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

