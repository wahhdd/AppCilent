<template>
	<div class="dd">
		<apphead>{{title}}</apphead>
		<div class="flex-box">
			<component v-bind:is="showcon" :shipin="item" v-for="item in shipin" :key="item._id"></component>
		</div>
	</div>
</template>

<script>
import apphead from '../head-nav.vue'
import box from '../shipin.vue'
import zhuanji from '../zhuanji.vue'
export default{
	data(){
		return{
			showcon:'zhuanji',
			title:'',
			shipin:[]
		}
	},
	components: {
		apphead,
		box,
		zhuanji
	},
	computed:{
		src(){
			this.showcon=this.$route.query.userId;
			this.$axios.post(this.$url+"/moreshipin").then((data)=>{
				this.shipin=data.data;
			})
			this.title=this.$route.query.userTitle;
			return this.$route.query.titel
		}
	},
	watch:{
		src(){
			this.showcon=this.$route.query.userId;
			this.$axios.post(this.$url+"/moreshipin").then((data)=>{
				this.shipin=data.data;
			})
			this.title=this.$route.query.userTitle;
		}
	}
}
</script>

<style scoped="scoped">
.dd{
	position: absolute;
	width: 100%;
	top: 0;
	bottom: 0;
}
.flex-box{
	display: flex;
	flex-wrap: wrap;
	box-sizing: border-box;
	padding: .1rem .1rem 0;
	/* padding-bottom:1.2rem;  */
}
</style>
