<template>
	<div>
		<div>this is template body</div>
	</div>
</template>
<style>
	body {
		background-color: #ff0000;
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
		asyncData() {
			setTimeout(() => {
				this.msg = 'hello vue2'
			}, 1000)
		}
	}
</script>
