<template>
	<div  class="header">
		<wecan :myleft='myleft'></wecan>
		<transition
			mode="out-in"
			@before-enter="beforeEnter"
			@enter="enter"
			:css="false">
			<keep-alive>
				<router-view class='shouye'></router-view>
			</keep-alive>
		</transition>
	</div>
</template>

<script>
import wecan from '../components/findHead.vue'
import {TweenLite} from "gsap";
export default {
	name:'contac',
	data(){
		return {
			animated:'left',
			myleft:0
		}
	},
	components: {
		wecan
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
		var arr=this.$router.options.routes[3].children;
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
	},
	created(){
	   
  }
}
</script>

<style scoped>

.header{
	overflow-x: hidden;
	overflow-y: auto;
}
.shouye{
	position: relative;
	padding:60px 0.2rem;
	width: 100%;
}
</style>
