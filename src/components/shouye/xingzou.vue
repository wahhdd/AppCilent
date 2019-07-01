<template>
	<div>
		<div class="circleProgress_wrapper">
			<transition>
				<div class="wrapper right">
					<div class="circleProgress rightcircle"  :style="{ transform: 'rotate('+rightDeg+'deg)' }"></div>
				</div>
			</transition>
			<transition>
				<div class="wrapper left">
					<div class="circleProgress leftcircle" :style="{ transform: 'rotate('+leftDeg+'deg)' }"></div>
				</div>
			</transition>
			<div class="content">
				<p>今日步数</p>
				<h3 class="bushu">{{animatedNumber}}</h3>
			</div>
		</div>
		<list :content='jiankang'></list>
		<list :content='jianzou'></list>
		<list :content='remen'></list>
	</div>
</template>

<script>
import list from '../list.vue';
import {TweenLite} from "gsap";
export default {
	data(){
		return {
			jiankang:{
				title:'健康知识',
				com:'box',
				find:'更多视频',
				introduction:[]
			},
			jianzou:{
				title:'健走知识',
				com:'box',
				find:'更多视频',
				introduction:[]
			},
			remen:{
				title:'热门播单',
				com:'zhuanji',
				find:'更多视频',
				introduction:[]
			},
			bushu:this.$store.state.oldBushu,
			tweenedNumber:this.$store.state.oldBushu
		}
	},
	components: {
		list
	},
	computed:{
		animatedNumber: function() {
			return this.tweenedNumber.toFixed(0);
		},
		nowdayBushu(){
			return this.$store.state.nowdayBushu;
		},
		rightDeg(){
			var cout = this.tweenedNumber/2500;
			if(cout>1){
				cout=1;
			}
			var deg=cout*180+45;
			return deg;
		},
		leftDeg(){
			if(this.tweenedNumber<2500){
				return 45
			}
			var bushu=this.tweenedNumber-2500;
			var cout = bushu/2500;
			if(cout>1){
				cout=1;
			}
			var deg=cout*180+45;
			return deg;
		}
	},
	created(){
		this.$axios.get(this.$url+'/shipin',{params: {mokuai: '行走',title:'健康知识'}}).then((data)=>{
			this.jiankang.introduction=data.data
		});
		this.$axios.get(this.$url+'/shipin',{params: {mokuai: '行走',title:'健走知识'}}).then((data)=>{
			this.jianzou.introduction=data.data
		});
		this.$axios.get(this.$url+'/shipin',{params: {mokuai: '行走',title:'热门播单'}}).then((data)=>{
			this.remen.introduction=data.data
		});
		this.$nextTick(() => {
			if(this.$store.state.oldBushu!=this.$store.state.nowdayBushu){
				this.bushu=this.$store.state.nowdayBushu;
				this.$store.commit('firstShow',this.bushu)
			}
		})
	},
	watch: {
		bushu: function(newValue) {
			TweenLite.to(this.$data, 2, { tweenedNumber: newValue });
		},
		nowdayBushu:function(newValue){
			TweenLite.to(this.$data, 0.5, { tweenedNumber: newValue });
		}
  }
}
</script>

<style scoped="scoped">
.bushu{
	padding-top: 0.3rem;
	font-size: 30px;
	font-weight: 600;
}
.content{
	position: absolute;
	width: 4rem;
	height: 4rem;
	top: 0;
	left: 0;
	text-align: center;
	box-sizing: border-box;
	padding: 1rem;
}
.circleProgress_wrapper{
	width: 4rem;
	height: 4rem;
	margin: 50px auto;
	position: relative;
}
.wrapper{
	width: 2rem;
	height: 4rem;
	position: absolute;
	top:0;
	overflow: hidden;
}
.right{
	right:0;
}
.left{
	left:0;
}
.circleProgress{
	width: 4rem;
	height: 4rem;
	border:8px solid #00f8bb;
	border-radius: 50%;
	position: absolute;
	top:0;
	transform: rotate(45deg);
}
.rightcircle{
	border-top:8px solid #DDDDDD;
	border-right:8px solid #DDDDDD;
	right:0;
}
.leftcircle{
	border-bottom:8px solid #DDDDDD;
	border-left:8px solid #DDDDDD;
	left:0;
}
</style>
