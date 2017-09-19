<template>
	<div id="app">
		<header class="adv-header">
			<router-link to="/live" class="fr">live</router-link>
			<router-link to="/" class="fl"> home</router-link>
		</header>
		<div class="global-nav">
			Vue ssr demo
		</div>
		<router-view class="view spec"></router-view>
	</div>
</template>
<style lang="stylus">
	body
		font-family -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
		font-size 15px
		background-color lighten(#eceef1, 30%)
		margin 0
		overflow-y scroll
		text-align center

	*
		box-sizing border-box

	.fl
		float left

	.fr
		float right

	a
		text-decoration none

	header, .global-nav, .spec
		padding 0 30px

	header
		color #fff
		height 40px
		font-size 20px
		background #444
		line-height 40px
		text-align right
		a
			margin 0 20px
			font-size 12px
			color: #a8a8aa

	.global-nav
		color #fff
		height 40px
		font-size 20px
		background #333
		line-height 1.5
		text-align center
</style>
