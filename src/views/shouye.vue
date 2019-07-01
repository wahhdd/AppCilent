<template>
  <div class="header">
	<div class="bac">
		<div class="zz"></div>
	</div>
	<shouye-header :myleft='myleft'></shouye-header>
	<transition  
	v-on:before-enter="beforeEnter"
	v-on:enter="enter"
	v-bind:css="false"
	>
		<keep-alive>
			<router-view  class='shouye'></router-view>
		</keep-alive>
	</transition>
  </div>
</template>
<script>
import shouyeHeader from '../components/shouyeHeader.vue'
import {TweenLite} from "gsap";
export default {
	name:'shouye',
	data(){
		return {
			animated:'left',
			myleft:0
		}
	},
	components:{
		shouyeHeader
	},
	methods:{
		beforeEnter: function (el) {
			if(this.animated=='left'){
				el.style.left=-100+'%';
				el.style.top=0+'px'
			}else{
				el.style.right=-100+'%';
				el.style.top=0+'px'
			}
		},
		enter: function (el, done) {
			if(this.animated=='left'){
				TweenLite.to(el, 0.1, {left: 0});
			}else{
				TweenLite.to(el, 0.1, {right: 0});
			}
			done()
		}
	},
	beforeRouteUpdate (to, from, next) {
		let toDepth = 0,fromDepth=0;
		var arr=this.$router.options.routes[0].children;
		for (var i=0;i<arr.length;i++) {
			if(to.path==arr[i].path){
				toDepth=i;
				this.myleft=i;
			}else if(from.path==arr[i].path){
				fromDepth=i;
			}
		}
		this.animated = toDepth < fromDepth ? 'right' : 'left'
		next()
	}
}
</script>
<style scoped="scoped">
.zz{
	height: 100%;
	width: 100%;
	background: rgba(240, 240, 240, 0.52);
}
.bac{
	background: url(../../public/img/backgrund.jpg) center center/cover;
	position: fixed;
	width: 100%;
	top: 60px;
	bottom: 60px;
}
.header{
	overflow-x: hidden;
	overflow-y: auto;
}
.shouye{
	position: relative;
	padding:60px 0;
	width: 100%;
}
</style>
