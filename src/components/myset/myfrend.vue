<template>
	<div>
		<head-nav>我的好友</head-nav>
		<ul ref="dd">
			<li>
				<dl @click="chenge($event,'haoyou')">
					<dd>好友</dd>
					<dd>20</dd>
				</dl>
			</li>
			<li>
				<dl @click="chenge($event,'fensi')">
					<dd>粉丝</dd>
					<dd>300</dd>
				</dl>
			</li>
			<li>
				<dl @click="chenge($event,'dongtai')">
					<dd>动态</dd>
					<dd>200</dd>
				</dl>
			</li>
			<li>
				<dl @click="chenge($event,'jinbi')">
					<dd>金币</dd>
					<dd>20</dd>
				</dl>
			</li>
			<li class="dd" :style="{left:po+'px'}">金币</li>
		</ul>
		<keep-alive>
			<component :is="flag"></component>
		</keep-alive>
	</div>
</template>

<script>
import headNav from '../head-nav.vue'
import fensi from './frend/fenshi.vue'
import haoyou from './frend/haoyou.vue'
import jinbi from './frend/jinbi.vue'
import dongtai from './frend/dongtai.vue'
export default{
	data(){
		return{
			flag:'haoyou',
			po:0
		}
	},
	components: {
		headNav,
		fensi,
		haoyou,
		jinbi,
		dongtai
	},
	methods:{
		chenge(el,e){
			this.flag=e;
			this.po=el.currentTarget.offsetLeft-10;
		}
	},
	created(){
		this.$nextTick(()=>{
			this.po=22
		})
	},
	mounted() {
		this.$store.commit('showBottomNav', false);
	},
	beforeDestroy() {
		this.$store.commit('showBottomNav', true);
	}
}
</script>

<style scoped="scoped">
	.dd{
		height: 5px;
		position: absolute;
		bottom: 0;
		overflow: hidden;
		color: #12D59D;
		background: #12D59D;
	}
	ul{
		display: flex;
		justify-content: space-around;
		background: #fff;
		margin-top: 2px;
		position: relative;
	}
	ul li{
		padding: 0 .2rem;
	}
	dl dd:first-child{
		padding: .3rem 0 .2rem;
		color: #999999;
	}
	dl dd:nth-child(2){
		color: #333333;
		font-weight: 600;
		padding-bottom: .3rem;
	}
	ul li dl dd{
		text-align: center;
		padding:0.1rem 0; 
	}
</style>
