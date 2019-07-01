<template>
	<div class="num">
		<span class="add" @click="addShop">+</span>
		<i class="number" v-show="shu">{{ shu }}</i>
		<span class="sub" @click="reduceShop" v-show="shu">-</span>
	</div>
</template>

<script>
import mui from '../../node_modules/js/mui.min.js'
import Vue from 'vue'
export default{
	name:'addReduce',
	props:{
		food:{
			type:Object
		}
	},
	data(){
		return{
			eee:0
		}
	},
	methods:{
		reduceShop(){
			this.eee--;
			Vue.set(this.food,'cont',this.eee);
			var price=parseFloat(this.food.min_price);
			this.$store.commit('increment',-price);
		},
		addShop(){
			if(!this.$store.state.login){
				var dd=this;
				var btnArray = ['取消', '确认'];
				mui.confirm('你还未登录，请确认登陆？', '', btnArray, function(e) {
					if (e.index == 1) {
						dd.$router.push('/login');
					} else {
						return
					}
				})
			}else{
				if(!this.eee){
					this.eee=0
				}
				this.eee++;
				Vue.set(this.food,'cont',this.eee);
				var price=parseFloat(this.food.min_price);
				this.$store.commit('increment',price);
			}
		}
	},
	computed: {
		shu() {
			this.eee=this.food.cont;
			return this.eee;
		}
	},
	mounted(){
		mui.plusReady(function(){  
			mui.init({  
				swipeBack:true,//启用右滑关闭功能  
			});
		});  
	}
}
</script>

<style scoped>
.num{
	height: 20px;
}
.num span,i{
	float: right;
	line-height: 20px;
}
.num span{
	color: #333;
	font-weight: bold;
	font-size: 20px;
	text-align: center;
	display: inline-block;
	width: 20px;
	height: 20px;
	margin: 0 5px;
	line-height: 18px;
	border-radius: 50%;
}
.num .add{
	background-color: yellow;
}
.num .sub{
	background-color: #DDDDDD;
}
</style>
