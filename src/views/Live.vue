<template>
	<div class="live-page">
		<div>this is template body</div>
	</div>
</template>
<style>
	.live-page{
		background: #f9f0eb;
		min-height: 400px;
	}
</style>
<script>
	export default {
		data() {
			return {
				msg: 'hello vue'
			}
		},
		components: {},
		asyncData({store, route: {params: {num}}}) {
			return store.dispatch('increment', {num})
		}
	}
</script>
