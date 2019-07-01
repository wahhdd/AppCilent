<template>
	<div>
		<head-nav>帮助</head-nav>
		<ul class="mui-table-view margin">
			<li class="mui-table-view-cell mui-collapse">
				<a class="mui-navigate-right">关于会员</a>
				<ul class="mui-table-view mui-table-view-chevron">
					<li class="mui-table-view-cell">
						<a class="mui-navigate-right" >
							充值成为会员需要20元
						</a>
					</li>
					<li class="mui-table-view-cell">
						<a class="mui-navigate-right">
							或者也可以运用积分来兑换，每次签到有20的积分，当积分达到2000时能够兑换
						</a>
					</li>
				</ul>
			</li>
			<li class="mui-table-view-cell mui-collapse">
				<a class="mui-navigate-right">如何充值</a>
				<ul class="mui-table-view mui-table-view-chevron">
					<li class="mui-table-view-cell">
						<a class="mui-navigate-right" >
							你可以使用银行卡进行充值
						</a>
					</li>
					<li class="mui-table-view-cell">
						<a class="mui-navigate-right">
							你可以使用微信进行充值
						</a>
					</li>
					<li class="mui-table-view-cell">
						<a class="mui-navigate-right">
							你可以使用支付宝进行进行充值
						</a>
					</li>
				</ul>
			</li>
			<li class="mui-table-view-cell mui-collapse">
				<a class="mui-navigate-right">联系客服</a>
				<ul class="mui-table-view mui-table-view-chevron">
					<li class="mui-table-view-cell">
						<a class="mui-navigate-right" >
							联系电话18893910702
						</a>
					</li>
				</ul>
			</li>
			<li class="mui-table-view-cell mui-collapse">
				<a class="mui-navigate-right">充值的汇率是对少</a>
				<ul class="mui-table-view mui-table-view-chevron">
					<li class="mui-table-view-cell">
						<a class="mui-navigate-right" >
							一元钱是100ai币
						</a>
					</li>
				</ul>
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

<style scoped="scoped">
	.margin{
		margin:0.4rem 0 0 0 ;
	}
</style>
