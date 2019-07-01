<template>
	<div class="box">
		<router-link :to="'/bofang?src='+shipin._id">
			<div class="pic">
				<img :src="shipin.pic" />
				<div class="zz">
					<span class="mui-icon mui-icon-videocam"></span>
					<span class="time">3:00</span>
				</div>
			</div>
		</router-link>
		<div class="title">
			<div class="sss">
				<h3>
					{{shipin.yes.lenght>9?shipin.yes:shipin.yes.substring(0,8)+'...'}}
				</h3>
			</div>
			
			<div class="bottom" >
				<div class="contanst">
					<div class="use-pic">
						<img :src="shipin.userpic"/>
					</div>
					<span class="use-id">{{shipin.username}}</span>
				</div>
				<div class="collect">
					<span class="iconfont" @click="flag=!flag" :class="{active:flag}">&#xe67c;</span>
					<span>{{shipin.shoucangshu}}</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props:{
		shipin: {
      type: Object
    },
	},
    data(){
		return {
			flag:false
		}
	}
}
</script>

<style  scoped>
.active{
	color: palevioletred;
}
.collect{
	line-height: 20px;
	color: #333333;
	font-size: 14px;
}
.contanst{
	display: flex;
	vertical-align: middle;
}
.use-id{
	line-height: 20px;
	color: #333333;
}
.use-pic{
	width: 20px;
	height: 20px;
	border-radius: 50%;
	overflow: hidden;
}
.bottom{
	display: flex;
	justify-content: space-between;
	font-size: 12px;
}
.use-pic img{
	width: 100%;
}
.sss{
	height: .9rem;
	overflow: hidden;
	padding-bottom: .2rem;
}
.title h3{
	font-weight: 600;
	font-size: .32rem;
	line-height: .9rem;
	box-sizing: border-box;
	color: #333333;
}
.title{
	padding: .2rem;
}
.box{
	width: 3.44rem;
	box-sizing: border-box;
	border-radius: 4px;
	overflow: hidden;
	margin: 0 .1rem .2rem;
	background: #ffffff;
}
.pic{
	position: relative;
	width: 100%;
}
.pic img{
	display: block;
	width: 100%;
}
.zz span{
	display: block;
}
.zz{
	position: absolute;
	bottom: 5px;
	display: flex;
	width: 100%;
	box-sizing: border-box;
	padding: 0 .1rem;
	color: #ffffff;
	justify-content: space-between;
}
.time{
	background: rgba(0, 0, 0, 0.5)
}
</style>

