<template>
	<div class="live-page">
		<div class="nav-bar">
			<ul class="platforms">
				<li :class="{'on':plat === platform }" v-for="plat,index in platforms" :key="plat"
						@click="choose('platform',plat)">{{plat}}
				</li>
			</ul>
			<ul class="categories">
				<li :class="{'on':cate === category }" v-for="cate,index in categories" :key="cate"
						@click="choose('category',cate)">{{cate}}
				</li>
			</ul>
		</div>
		<div class="items">
			<div class="item" v-for="{title,anchor,audienceNumber,snapshot,url,platformIcon},index in tvList" :key="index"
					 @click="go(url)">
				<img :src="snapshot">
				<div>
					<p>{{title}}</p>
					<p>主播：{{anchor}}</p>
					<p>在线：{{audienceNumber}}</p>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="stylus">
	.live-page
		background: #f9f0eb
		min-height: 400px

	.platforms, .categories
		display flex
		flex-direction row
		flex-wrap wrap
		list-style none
		justify-content flex-start
		padding-left 10px
		margin 0
		li
			color #555
			border 1px solid #555
			border-radius 8px
			padding 3px 10px
			margin 5px 10px 10px 0
			cursor pointer
			&:hover
				color: #fff
				background #555

			&.on
				color: #fff
				background #555

	.items
		width 100%
		display flex
		flex-direction row
		flex-wrap wrap
		cursor pointer

	.item
		width (1 / 3 * 100) %
		padding 10px 10px
		img
			width 100%
		p
			font-size 16px
			line-height 1.2

	@media screen and (max-width: 768px)
		.item
			width (1 / 2 * 100) %
			padding 10px 10px

			img
				width 100%
			p
				font-size 12px
				line-height 1.2

	@media (min-width: 1280px)
		.item
			width (1 / 4 * 100) %
</style>
<script>
	import {mapGetters, mapActions} from 'vuex'

	export default {
		data() {
			return {
				msg: 'hello vue',
				category: 'dnf',
				platform: 'douyu'
			}
		},
		computed: {
			...mapGetters(['tvList', 'categories', 'platforms'])
		},
		methods: {
			...mapActions(['getLiveList']),
			choose(type, value) {
				type === 'category' ? this.category = value : this.platform = value
				this.getLiveList(`/liveapi/${this.category}/${this.platform}`)
			},
			go(url) {
				window.open(url)
			}
		},
		components: {},
		asyncData({store, route}) {
			return store.dispatch('getLiveList', '/liveapi/dnf/douyu')
		}
	}
</script>
