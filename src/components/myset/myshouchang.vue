<template>
	<div>
		<head-nav>收藏</head-nav>
		<div v-if="flag"></div>
		<div v-else="flag" class="no">
			<div class="dd">亲，你还没有收藏哦~</div>
		</div>
	</div>
</template>

<script>
	import headNav from '../head-nav.vue'
	import mui from '../../../node_modules/js/mui.min.js'
	export default {
		data() {
			return {
				flag:false
			}
		},
		components: {
			headNav
		},
		created() {
				
		},
		methods: {},
		mounted() {},
		beforeDestroy() {
			this.$store.commit('showBottomNav', true);
		}
	}
</script>

<style scoped="scoped">
	.dd{
		position: absolute;
		top: 150px;
		left: 50%;
		color: #888;
		transform: translateX(-50%);
	}
	.no{
		position: fixed;
		width: 100%;
		background: url(../../../public/img/no.png) no-repeat center center #fff;
		top: 52px;
		bottom: 0;
	}
</style>
