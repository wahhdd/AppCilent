<template>
	<div class="more">
		<span class="mui-navigate-right mystyle-title" @click="seemore">查看更多</span>
	</div>
</template>

<script>
export default{
	props: {
		ddd: {
			type: String,
		},
		eee:{
			type:String
		},
		fff:{
			type:String
		}
	},
	methods: {
		seemore() {
			this.$router.push({ path: '/shiping', query: { userId: this.ddd,userTitle:this.eee,titel:this.fff}})
		}
	},
}
</script>

<style>
.mui-navigate-right:after, .mui-push-right:after{
	right: 0px !important;
}
.more{
	position: relative;
	font-size: 0.24rem;
}
.mystyle-title{
	margin-right:0.3rem;
	color: #8f8f94;
}
</style>
