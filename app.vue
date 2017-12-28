<template>
    <div>
        <vTitle title='Vue组件化'></vTitle>
        <vButton @click='parentHandleClick'>点击按钮</vButton>
    </div>
</template>
<script>
	//导入组件
    import vTitle from './views/title.vue';
    import vButton from './views/button.vue';
    export default {
    	//局部注册组件
        components: {
            vTitle,
            vButton
        },
        methods: {
            parentHandleClick(e) {
                alert('触发父组件事件')
            }
        }
    }
</script>