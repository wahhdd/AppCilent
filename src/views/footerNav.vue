<template>
	<div class="about">
		<div class="foot-nav">
			<div>
				<router-link to='/shouye'>
					<div class="nav-box">
						<div class="mui-icon mui-icon-home iconpad"></div>
						<div>首页</div>
					</div>
				</router-link>
			</div>
			<div>
				<router-link to='/find'>
					<div class="nav-box">
						<div class=" iconpad iconfont">&#xe601;</div>
						<div>商店</div>
					</div>
				</router-link>
			</div>
			<div>
				<router-link to='/contac'>
					<div class="nav-box">
						<div class=" iconpad mui-icon mui-icon-navigate"></div>
						<div>发现</div>
					</div>
				</router-link>
			</div>
			<div>
				<router-link to='/myset'>
					<div class="nav-box">
						<div class=" iconpad iconfont">&#xeb9e;</div>
						<div>我的</div>
					</div>
				</router-link>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data(){
		return {}
	}
}
</script>

<style scoped>
a {
	color: #AEAFAF;
}
.iconpad {
	padding-top: 5px;
	padding-bottom: 5px;
	font-size: 24px;
}
.router-link-active {
	color: #00b3b3 !important;
}
.foot-nav {
	display: flex;
	position: fixed;
	z-index: 99;
	bottom: 0;
	height: 59px;
	width: 100%;
	background: #FFFFFF;
	border-top: 1px solid #AAAAAA;
	justify-content: space-around;
}
.foot-nav div {
	text-align: center;
}
</style>