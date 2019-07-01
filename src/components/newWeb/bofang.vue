<template>
	<div class="box">
		<nav-head>更多视频</nav-head>
		<video v-if="flag" :src="obj.aderess"  width="100%" height="200" controls="controls">
			 Your browser does not support the video tag.
		</video>
		<div id="video" v-else>
			
		</div>
		<div class="nav">
			<ul class="mui-table-view">
				<li class='mui-table-view-cell' :class="{active:con=='pinglun'}" @click="con='pinglun'">简介</li>
				<li class='mui-table-view-cell' @click="con='jianjie'" :class="{active:con=='jianjie'}">评论<span class="mui-badge mui-badge-danger">{{obj.guankanshu}}</span></li>
			</ul>
		</div>
		<component :is='con' :obj='obj' v-if="ff"></component>
		<div v-else class="loading">
			<loading-0></loading-0>
		</div>
	</div>
</template>

<script>
	import pinglun from './pinglun.vue'
	import jianjie from './jianjie.vue'
	import navHead from  '../head-nav.vue'
	var video=null
	export default{
		name:"bilibili",
		data(){
			return{
				flag:false,
				ff:true,
				con:'pinglun',
				num:5,
				obj:{}
			}
		},
		components:{
			navHead,
			pinglun,
			jianjie
		},
		created(){
			this.ff=false;
			this.$axios.get(this.$url+"/shiping",{
				 params: {
					_id: this.$route.query.src
				}
			}).then((data)=>{
				this.obj=data.data
				this.ff=true;
				var test=this;
				test.flag=false;
				this.$nextTick(() => {  
					console.log(document.getElementById('video'))
					this.$root.dd.plusReady(function(){
						video = new plus.video.VideoPlayer('video',{
							src:test.obj.aderess
						});
					})
				})
			}).catch((err)=>{
				console.log(err)
			})
		},
		beforeDestroy(){
			this.$root.dd.plusReady(function(){
				video.close()
			})
		}
	}
</script>

<style scoped>
.loading{
	position: absolute;
	width: 100%;
	top:80px;
	bottom: 0;
}
.mui-badge{
	top: 10px !important;
	z-index: 99;
	right: 0px !important;
}
.nav ul{
	display: flex;
	height: 0.8rem;
	margin-top: 0.15rem;
	justify-content: space-around;
}
.nav ul li{
	border-bottom: 2px solid transparent;
}
.active{
	color: #05C963;
	border-bottom: 2px solid #05C963 !important;
}
.box video{
	margin-top: 0.2rem;
}
#video{
	width: 100%;
	height: 4rem;
}
</style>