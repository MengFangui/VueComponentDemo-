<template>
	<button @click="childHandleClick" :style="styles">
		<!--显示父元素内容-->
		<slot></slot>
	</button>
</template>

<script>
	export default{
		props:{
			color:{
				type:String,
				default:'#00cc66'
			}
		},
		computed:{
			styles(){
				return {
					background:this.color
				}
			}
		},
		methods:{
			childHandleClick(e){
				//触发父组件的click事件
				this.$emit('click',e)
			}
		}
	}
</script>

<style scoped="scoped">
	button{
		border: 0;
		outline: none;
		color: #fff;
		padding: 4px 8px;
	}
	button:active{
		position: relative;
		top: 1px;
		left: 1px;
	}
</style>