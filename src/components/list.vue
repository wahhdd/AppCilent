<template>
	<div class="box">
		<div class='title'>
			<div class="title-head">{{content.title}}</div>
			<div class="more">
				<see-more :ddd="content.com" :eee="content.find" :fff="content.title"></see-more>
			</div>
		</div>
		<ul class="list">
			<li v-for="(item, index) in content.introduction" :key="index">
				<router-link :to="'/bofang?src='+item._id">
				<div class="list-pic">
					<img :src="item.pic" />
				</div>
				<div class="list-cc">
					{{ret[index]}}
				</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
import seeMore from './seeMore.vue'
export default {
	props: {
		content: {
			type: Object
		},
	},
	data(){
		return {
			// ret:[]
		}
	},
	components: {
		seeMore
	},
	methods:{
		gotobofang(){
			this.$router.push('/bofang/2')
		}
	},
	computed:{
		ret(){
			var arr=[];
			for(var i=0;i<this.content.introduction.length;i++){
				if(this.content.introduction[i].yes.length>=15){
					arr.push(this.content.introduction[i].yes.substring(0, 14)+'...')
				}else{
					arr.push(this.content.introduction[i].yes)
				}
			}
			return arr;
		}
	}
}
</script>

<style scoped="scoped">
.list a{
	color: #333;
}
.list-cc{
	width: 100%;
	height: 0.8rem;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;
}
.list{
	display: flex;
	height: 2.56rem;
	overflow-x: scroll;
}
.list li{
	width: 2.5rem;
	flex-shrink: 0;
	margin-right: 0.2rem;
}
.list li .list-pic{
	width: 100%;
	height: 1.66rem;
	margin-top: 0.1rem;
	overflow: hidden;
}
.list li:last-child{
	margin-right:0;
}
.list li .list-pic img{
	border-radius: 5px;
	display: block;
	width: 100%;
	height: 100%;
}
.mystyle-title{
	margin-right: 0.6rem;
	color: #8f8f94;
}
.list-cc{
	line-height: 1.2;
	font-size: 0.28rem;
}
.more{
	position: relative;
}
.box{
	background: #FFFFFF;
	margin: 0.2rem;
	padding: 0.2rem;
}
.title{
	padding-top: 0.4rem;
	display: flex;
	justify-content: space-between;
}
</style>
