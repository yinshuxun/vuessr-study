<template>
	<div id="app">
		<header>Vue ssr demo</header>
		<router-link to="/live">to live</router-link>
		<router-view class="view"></router-view>
	</div>
</template>
<style lang="stylus">
	body
		font-family -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
		font-size 15px
		background-color lighten(#eceef1, 30%)
		margin 0
		padding-top 55px
		color #34495e
		overflow-y scroll
		text-align center

	header
		font-size 30px
		line-height 1.5

	a
		color #34495e
		text-decoration none
</style>
