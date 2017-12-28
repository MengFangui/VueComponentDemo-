<template>
	<h1>
		<a :href="'#'+title">{{title}}</a>
	</h1>
</template>

<script>
	export default {
		props:{
			title:{
				type:String
			}
		}
	}
</script>

<style scoped="scoped">
	h1 a{
		color: red;
		font-size: 24px;
	}
</style>