<template>
	<div class="shouyeNav clear">
		<ul>
			<li>
				<router-link to='/contac/'>热门</router-link>
			</li>
			<li>
				<router-link to='/contac/guanzu'>关注</router-link>
			</li>
			<li>
				<router-link to='/contac/paobu'>附近</router-link>
			</li>
		</ul>
		<!-- <div class="my mui-icon mui-icon-search" @click="goToSearch"></div> -->
		 <transition>
			<div class="cur" :style="{left:newleft+'rem'}"></div>
		</transition>
	</div>
</template>

<script>
import {TweenLite} from "gsap";
export default {
	props: {
		myleft: {
			type: Number,
		},
	},
	data(){
		return {
			justleft:0
		}
	},
	computed: {
		newleft() {
			return this.justleft*1.46 + 0.4; 
		}
	},
	methods: {
		// goToSearch(){
		// 	this.$router.push('/search')
		// }
	},
	watch: {
		myleft(newValue, oldValue) {
			TweenLite.to(this.$data,0.1, { justleft: newValue });
		}
	},
}
</script>

<style scoped="scoped">
	ul{
		float:left;
	}
	.my{
		float:right;
		line-height:60px;
		padding-right:0.4rem;
	}
	ul li{
		float: left;
		height: 59px;
		line-height: 57px;
		padding:0 0.4rem;
		font-size: 18px;
	}
	.shouye{
		position: relative;
	}
	ul li a{
		display: block;
		width: 100%;
		height: 59px;
		border-bottom: 2px solid transparent;
		color: #A5A5A5;
	}
	.router-link-exact-active{
		color: #21CD9D;
	}
	.shouyeNav{
		width: 100%;
		background: #FFFFFF;
		position: fixed;
		top: 0;
		z-index: 99;
		border-bottom: 1px solid #BCCACD;
	}
	.cur{
		height: 2px;
		width: 0.72rem;
		background: #21CD9D;
		position: absolute;
		bottom: 0;
	}
</style>
