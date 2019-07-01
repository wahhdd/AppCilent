<template>
  <div id="app">
		<footer-nav v-if="$store.state.showBottomNav"></footer-nav>
		<keep-alive exclude="barcode,login,zhuce,zhifu,bilibili,qiandao">
			<router-view></router-view>
		</keep-alive>
			
  </div>
</template>

<script>
import footerNav from './views/footerNav.vue'
export default{
	data(){
		return {
			flag:true
		}
	},
	components:{
		footerNav
	}
}
</script>

<style>
.fl{
	float: left;
}
.fr{
	float: right;
}
.clear:after{
	display: block;
	content: "";
	clear: both;
}
img{
	display: block;
	width: 100%;
}
</style>

