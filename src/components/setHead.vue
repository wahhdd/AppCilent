<template>
	<div class="sethead">
		<div v-if="!this.$store.state.login" class="setTitle">你还没有登录，请登录</div>
		<div v-else class="setTitle">欢迎你{{this.$store.state.user.username}}</div>
		<div class="setContent">
			<span class="mui-icon mui-icon-camera" @click="goBarcode"></span>
		</div>
	</div>
</template>

<script>
export default{
	data() {
		return {
			
		}
	},
	methods: {
		goBarcode(){
			this.$router.push('/barcode')
		}
	},
}
</script>

<style scoped="scoped">
.sethead{
	background: #fff;
	height: 50px;
	width: 100%;
	display: flex;
	line-height: 50px;
	padding:0 0.2rem;
	justify-content: space-between;
}
.setContent{
	height: 100%;
}
.setTitle{
	font-size: 18px;
}
.setContent span{
	padding: 0.1rem;
}
</style>
