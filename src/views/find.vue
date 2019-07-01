<template>
<div class="content">
	<headNav :search='true'>商城</headNav>
	<div v-if="jjjjj==0">
		<loading-0></loading-0>
	</div>
	<div class="diancai" v-else>
		<div class="left-list" ref="menuWrapper">
			<ul>
				<li v-for="(item,index) in leftList" :class="{cur:cont==index}" @click="selectMenu(index,$event)">
					<img v-if="item.icon" :src="item.icon"/>
					{{item.name}}
				</li>
			</ul>
		</div>
		<div class="right-list" ref="foodWrapper">
			<div>
				<ul v-for="item in leftList" ref="foodList">
					<li class="food-header">
						<img v-if="item.icon" :src="item.icon"/>
						{{item.name}}
					</li>
					<li v-for="food in item.spus">
						<div class="pic">
							<img :src="food.picture" />
						</div>
						<div class="about">
							<h3>{{food.name}}</h3>
							<p class="discp"><span class="ee">{{food.month_saled_content}}</span><span class="rr">{{food.praise_content}}</span></p>
							<div class='price'>
								<div>{{food.min_price}}</div>
								<addReduce :food='food'></addReduce>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="bottom" @click="taggle">
			<div class="bottom-icon">
				<img v-if="this.$store.state.user.userpic" :src="this.$store.state.user.userpic" />
				<img @click="go" else :src="this.$url+'/img/moren.jpg'" />
			</div>
			<div class="money">
				￥{{total}}
			</div>
			<div class="go-total" v-if="!total">
				去结算
			</div>
			<div class="go-total ddd" v-else="!total" @click="zhifu">
				去结算
			</div>
		</div>
		<div class="food-list" v-show="flag&&config">
			<ul>
				<li v-if="item.cont" v-for="item in selectFood">
					<div class="my-item">
						{{item.name}}
					</div>
					<div class="my-center">
						<addReduce :food='item'></addReduce>
					</div>
				</li>
			</ul>
		</div>
	</div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
import addReduce from '../components/addReduce'
import headNav from '../components/head-nav'
export default {
	name:'find',
	data(){
		return {
		jjjjj:0,
			leftList:[],
			listHeight:[],
			scrollY:0,
			flag:false
		}
	},
	components:{
		addReduce,
		headNav
	},
	computed:{
		cont(){
			for( let i = 0;i<this.listHeight.length;i++ ){
	          let height1 = this.listHeight[i];
	          let height2 = this.listHeight[i+1];
	          if( !height2 || (this.scrollY >= height1 && this.scrollY<height2)){
	            return i;
	          }
	      }
	      return 0;
		},
		total(){
			return this.$store.state.total
		},
		selectFood(){
			if(!this.leftList[0]){
				return []
			}
			return  this.leftList.reduce((value,next)=>{
				return value.concat(next.spus)
			},[]);
		},
		config(){
			var i=0;
			this.selectFood.forEach(function(value){
				if(value.cont){
					i++
				}
			})
			return i;
		}
	},
	 methods:{
			zhifu(){
				this.$router.push('/zhifu')
			},
			go(){
				if(this.$store.state.login){
					return
				}
				var dd=this;
				var btnArray = ['取消', '确认'];
				this.$root.dd.confirm('你还未登录，请确认登陆？', '', btnArray, function(e) {
					if (e.index == 1) {
						dd.$router.push('/login');
					} else {
						return
					}
				})
			},
		   taggle(){
			   this.flag=!this.flag;
			   if(!this.config){
				   this.flag=false;
			   }
		   },
	      _initScroll(){
	        this.menuScroll = new BScroll(this.$refs.menuWrapper,{
				  click:true
	        });
	        this.foodScroll = new BScroll(this.$refs.foodWrapper,{
				  click:true,
				  probeType:3
	        });
			  this.foodScroll.on('scroll',(pos) => {
	          if( pos.y <= 0 ){
	            this.scrollY = Math.abs( Math.round(pos.y));
	          }
	        });
	      },
			selectMenu(index,event){
	        if( !event._constructed ){
	          return;
	        }
	        let foodList = this.$refs.foodList; //获取到右边li对象
	        let el = foodList[index];//根据index，获取到右边具体滚动到的li
	        this.foodScroll.scrollToElement(el,300);//要滑动到右边的对象，300完成动作的时间
	      },
			 _calculateHeight(){
	        let foodList = this.$refs.foodList; //获取到所有的ref='foodList'的DOM元素
	        let height = 0;
	        this.listHeight.push(height); //第一个元素的高度是0
	        for( let i =0;i<foodList.length;i++ ){
	          let item = foodList[i];
	          height += item.clientHeight;//通过原生DOM中的js获取到li的高度，并且累加
	          this.listHeight.push(height);
	        }
	      }
	  },
	created(){
		this.$axios.get(this.$url+"/goods").then((data)=>{
			this.leftList=data.data.data.food_spu_tags;
			this.jjjjj=1;
			this.$nextTick(() => {  
				this._initScroll();
				this._calculateHeight();
			})
		})
	},
}
</script>

<style scoped>
.ee{
	padding-right: 0.2rem;
}
.ddd{
	background: #FFCA4A !important;
}
.discp{
	padding: 0.2rem 0;
}
.my-item{
	padding-left: 20px;
}
.food-list ul{
line-height: 50px;
max-height: 150px;
margin-bottom: 60px;
}
.my-center{
	padding: 15px 0;
}
.food-list ul li{
display: flex;
justify-content: space-between;
}
.food-list{
	background: #FFFFFF;
	width: 100%;
	position: fixed;
	z-index: 50;
	bottom: 0;
}
.food-list ul li{
	height: 48px;
	background: #F5F5F5;
	border-bottom: 1px solid #AEAFAF;
	border-top: 1px solid #AEAFAF;
}
.bottom-icon{
	background: #FFFFFF;
	border-radius: 50%;
	height: 100%;
	width: 50px;
	overflow: hidden;
	margin-left: 30px;
}
.money{
	flex: 4;
	font-size: 24px;
	color: #f40;
	margin: 0 20px;
}
.go-total{
	flex: 2;
	height: 50px;
}
.bottom{
	position: fixed;
	overflow: hidden;
	bottom: 10px;
	width: 90%;
	height: 50px;
	z-index: 99;
	background: rgba(51,51,51,0.9);
	line-height: 50px;
	display: flex;
	justify-content: space-around;
	left:50%;
	border-radius: 25px;
	transform: translateX(-50%);
}
.price{
	display:flex;
	justify-content:space-between;
}
.food-header img{
	width:20px;
	height:20px;
}
.food-header{
	height:20px !important;
	margin-bottom:5px !important;
	background:#ddd;
}
.diancai{
	width: 100%;
	padding: 10px 0;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
}
.cur{
	background: #D8D8D8;
	
}
.left-list{
	width: 22%;
	background: #f4f2f2;
	overflow-y: auto;
	position: absolute;
	top: 50px;
	bottom: 0;
    z-index: 1;
}
.left-list ul{
	width: 100%;
}
.left-list img{
	width: 10px;
	vertical-align: middle;
}
.left-list li{
	padding: 17px 0;
	font-size: 13px;
	width:100%;
	box-sizing:border-box;
	text-align: center;
}
.right-list{
	width: 76%;
	position: absolute;
	overflow-y: auto;
	background: #FFFFFF;
	right: 0;
	padding-left: 3%;
	padding-right: 5%;
	top: 50px;
	bottom: 0;
}
.right-list li{
	height: 95px;
	display: flex;
	margin-bottom: 40px;
}
.pic{
	width: 37%;
	max-height: 1.92rem;
	overflow: hidden;
}
.pic img{
	display: block;
	width: 100%;
}
.about{
	width: 60%;
	box-sizing: border-box;
	padding: 5px 10px;
}
.about-eat{
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
</style>
