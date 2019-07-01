<template>
	<div class="shouyeNav">
		<ul class="clear">
			<li>
				<router-link to='/shouye/'>行走</router-link>
			</li>
			<li>
				<router-link to='/shouye/paobu'>跑步</router-link>
			</li>
			<li>
				<router-link to='/shouye/qixing'>骑行</router-link>
			</li>
		</ul>
		<transition  v-on:enter="enter">
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
	created(){
		this.justleft=this.$store.state.shouyeNav;
	},
	mounted(){
		
	},
	computed: {
		newleft() {
			return this.justleft*1.6+ 0.4; 
		}
	},
	methods: {
		enter() {
			console.log(1)
		}
	},
	watch: {
		myleft(newValue) {
			TweenLite.to(this.$data,0.1, { justleft: newValue });
		}
	},
	beforeDestroy(){
		this.$store.commit('shouyeNav', this.justleft);
	}
}
</script>

<style scoped="scoped">
ul li{
	float: left;
	height: 59px;
	width: 1.6rem;
	line-height: 57px;
	padding:0 0.4rem;
	font-size: 18px;
	box-sizing: border-box;
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
