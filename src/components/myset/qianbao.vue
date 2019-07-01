<template>
	<div>
		<head-nav>钱包</head-nav>
		<div class="box">
			<ul>
				<li class="cc">
					<img src=" http://192.168.43.60:3000/img/hongbao.png" />
				</li>
				<li>
					0.00
				</li>
				<li class="dd">
					<span>红包(元)</span>
				</li>
			</ul>
			<ul>
				<li class="cc">
					<img src=" http://192.168.43.60:3000/img/bi.png" />
				</li>
				<li>0</li>
				<li class="dd">
					<span>k币(个)</span>
				</li>
			</ul>
		</div>
		<ul class="mui-table-view">
			<li class="mui-table-view-cell">
				 <a class="mui-navigate-right">优惠券</a>
			</li>
		</ul>
	</div>
</template>

<script>
import headNav from '../head-nav.vue'
export default{
	components: {
		headNav
	},
	mounted() {
		this.$store.commit('showBottomNav', false);
	},
	beforeDestroy() {
		this.$store.commit('showBottomNav', true);
	}
}
</script>

<style scoped>
	.cc{
		padding: 0.2rem 0;
	}
	.box{
		display: flex;
		margin: .2rem 0;
		background: #ffffff;
	}
	.box ul{
		width: 50%;
		padding: 0 12.5%;
	}
	.box ul li{
		text-align: center
	}
	.box ul li span{
		color: #999;
	}
	.dd{
		padding: 10px 0
	}
</style>
