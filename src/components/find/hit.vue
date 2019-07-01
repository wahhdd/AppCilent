<template>
	<div class="hot">
		<vue-waterfall-easy ref="waterfall" :imgsArr="imgsArr" @click="togo(props)" @scrollReachBottom="getData" @imgError="imgErrorFn" mobileGap=8 :imgWidth=50 :maxCols=20 height="100vh" srcKey="pic" :isRouterLink=true hrefKey="aderess">
			<div class="title" slot-scope="props">
				<div class="sss">
					<h3>
						{{props.value.yes.lenght>9?props.value.yes:props.value.yes.substring(0,8)+'...'}}
					</h3>
				</div>
				<div class="bottom" >
					<div class="contanst">
						<div class="use-pic">
							<img :src="props.value.userpic"/>
						</div>
						<span class="use-id">{{props.value.username}}</span>
					</div>
					<div class="collect">
						<span class="iconfont" @click="flag=!flag" :class="{active:flag}">&#xe67c;</span>
						<span>{{props.value.shoucangshu}}</span>
					</div>
				</div>
			</div>
		</vue-waterfall-easy>
	</div>
</template>

<script>
import vueWaterfallEasy from 'vue-waterfall-easy'
export default{
	name:"hot",
	data(){
		return {
			"imgsArr":[],
			"group":0,
			"pullDownDistance":0,
			"jiudianInfo":[],
			"details":[],
			"hotelName":"",
			flag:false
		}
	},
	components:{
		vueWaterfallEasy
	},
	methods:{
		togo(e){
			console.log(e)
		},
		getData(){
			this.$axios.post(this.$url+"/moreshipin?group="+this.group).then(res=>{
				this.group++;
				if(this.group===10){
					this.$refs.waterfall.waterfallOver();
					return
				}
				// console.log(res.data.aderess)
				res.data.forEach(element => {
					// console.log("/bofang?src="+element.aderess)
					element.aderess="/bofang?src="+element._id;
					// return "/bofang?src="+element.aderess
				});
				console.log(res.data)
				this.imgsArr=this.imgsArr.concat(res.data)
			})
		},
		clickFn(event,{index,value}){
			if(event.target.tagName.toLowerCase()=='img'){
				console.log('img clicked',index,value)
			}
		},
		imgErrorFn(imgItem){
			console.log('图片加载错误',imgItem);
		},
		changeImgArr(){
			this.$axios.post(this.$url+"/moreshipin").then(res=>{
				this.imgsArr=res.data;
			})
		},
		pullDownMove(pullDownDistance) {
		// console.log('pullDownDistance', pullDownDistance)
		this.pullDownDistance = pullDownDistance
		},
		pullDownEnd(pullDownDistance) {
		console.log('pullDownEnd')
		if(this.pullDownDistance>50){
			alert('下拉刷新')
		}
		this.pullDownDistance = 0
		}
	},
	created(){
		this.getData();
	}
}
</script>

<style scoped>
img{
	padding: 10px;
}
.active{
	color: palevioletred;
}
.collect{
	line-height: 20px;
	color: #333333;
	font-size: 14px;
}
.img-inner-box{
	overflow: hidden !important;
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
	width: 90%;
	box-sizing: border-box;
	padding: 0 .1rem;
	color: #ffffff;
	justify-content: space-between;
}
.time{
	background: rgba(0, 0, 0, 0.5)
}
.show{
	display: flex;
	flex-wrap: wrap;
}
.loading{
	position: fixed;
	top: 60px;
	width: 100%;
	bottom: 60px;
}
.hot{
	display: flex;
	padding: 1.4rem 0.1rem  !important;
	flex-wrap: wrap;
}
</style>
