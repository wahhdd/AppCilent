<template>
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
			<slot></slot>
			<h3 class="bushu">{{animatedNumber}}</h3>
			<button class="bb" @click="gotoditu">开始健身</button>
		</div>
	</div>
</template>

<script>
import {TweenLite} from "gsap";
export default {
	props: {
		config: {
			type: Object,
		},
		url:{
			type:String
		}
	},
	data(){
		return {
			oldbushu:this.config.oldbushu,
			nowdayBushu:this.config.nowdayBushu,
			tweenedNumber:this.config.oldbushu,
			yuan:this.config.yuan,
			index:this.config.index
		}
	},
	created(){
		this.$nextTick(() => {
			if(this.oldbushu!=this.nowdayBushu){
				this.oldbushu=this.nowdayBushu;
				this.$store.commit('secondShow',{bushu:this.bushu,index:this.index})
			}
		})
	},
	computed:{
		animatedNumber: function() {
			return this.tweenedNumber.toFixed(0);
		},
		rightDeg(){
			var cout = this.tweenedNumber/(this.yuan*0.5);
			if(cout>1){
				cout=1;
			}
			var deg=cout*180+45;
			return deg;
		},
		leftDeg(){
			if(this.tweenedNumber<this.yuan*0.5){
				return 45
			}
			var bushu=this.tweenedNumber-this.yuan*0.5;
			var cout = bushu/(this.yuan*0.5);
			if(cout>1){
				cout=1;
			}
			var deg=cout*180+45;
			return deg;
		}
	},
	methods: {
		gotoditu() {
			this.$router.push(this.url)
		}
	},
	watch: {
		oldbushu: function(newValue) {
			TweenLite.to(this.$data, 2, { tweenedNumber: newValue });
		}
	}
}
</script>

<style scoped="scoped">
.bb{
	margin-top: 0.2rem;
	background: #12D59D;
	color: #FFFFFF;
	border-radius: 0.32rem;
}
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
	border:8px solid #12D59D;
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
