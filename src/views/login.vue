<template>
	<div class="mui-content">
		<nav-head>欢迎登录</nav-head>
		<div class="banner">
			<h3 class="my-login-h3">爱运动</h3>
		</div>
		<div class="content">
			<form  method="post" v-on:submit.prevent="onSubmit">
				<div class="box">
					<h4 class="my-login-h4"><img :src="this.$url+'/img/login.png'" /></h4>
					<div class="mui-input-row input-border">
						<label class="my-login-label1"><img :src="this.$url+'/img/shouji.png'" /></label>
						<input class="fl mui-input-clear" type="text" placeholder="输入你的用户名/手机号" v-model="username" />
					</div>
					<div class="mui-input-row input-border">
						<label class="my-login-label2"><img :src="this.$url+'/img/password.png'" /></label>
						<input class='fl mui-input-password' type="password" placeholder="输入你的密码" v-model="password" />
					</div>
					<div class="clear">
						<a class="margin font"></a>
					</div>
				</div>
				<input class="chen" type="submit" value="登录" />
			</form>
			<p  class="center">
				<router-link to="/zhuce">注册</router-link>
			</p>
		</div>
	</div>
</template>

<script>
	import navHead from '../components/head-nav.vue'
	import mui from '../../node_modules/js/mui.min.js'
	export default {
		name:'login',
		data() {
			return {
				username: '',
				password: ''
			}
		},
		components: {
			navHead
		},
		mounted() {
			mui('input').input();
			this.$store.commit('showBottomNav', false);
		},
		methods: {
			onSubmit() {
				var check=true;
				var fun=this;
				mui('input').each(function() {
				//若当前input为空，则alert提醒 
				if(!this.value || this.value.trim() == "") {
					mui.alert("用户名和密码不允许为空");
					check = false;
					return false;
				}
				}); //校验通过，继续执行业务逻辑 
				if(check){
					var wt;
					this.$root.dd.plusReady(function () {
					   wt=plus.nativeUI.showWaiting();
					})
					this.$axios.post(this.$url+'/login', {
							username: this.username,
							password: this.password
						})
						.then(function(response) {
							fun.$root.dd.plusReady(function () {
							    plus.nativeUI.closeWaiting();
							})
							if(response.data.length>=1){
								fun.$store.state.login=true;
								fun.$store.commit('user',response.data[0])
								fun.$router.go(-1);
							}else{
								mui.alert('用户名或密码错误')
							}
						})
						.catch(function(error) {
							mui.alert('出现未知错误')
							fun.$root.dd.plusReady(function () {
							   wt.close();
							})
						});
				}
			}
		},
		beforDestory() {
			this.$store.commit('showBottomNav', true);
		}
	}
</script>

<style scoped="scoped">
	.my-login-si img {
		width: 50%;
		height: 50%;
		display: block;
	}

	.my-login-si {
		height: .96rem;
		width: .96rem;
		text-align: center;
		background: #fff;
		box-shadow: 1px 1px 3px #EEEEEE;
		line-height: .96rem;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		overflow: hidden;
		display: flex;
	}
	.my-login-h4 img{
		width: inherit;
	}
	.my-login-san {
		justify-content: space-between;
		width: 2.6rem;
		display: flex;
		margin: 0 auto;
	}

	.banner {
		width: 100%;
		height: 31vh;
		line-height: 31vh;
		text-align: center;
		background: url(../../public/img/banner.png) no-repeat center center/cover;
	}

	.my-login-h3 {
		color: #fff;
		font-size: 28px;
		letter-spacing: 5px;
		font-weight: 600;
	}

	.content {
		width: 100%;
	}

	form {
		box-shadow: 0px 3px 10px #E0F1F7;
		top: -1rem;
		position: relative;
		border-radius: 10px;
		margin: 0 .4rem;
		background-color: #fff;
	}

	.box {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding: .48rem .28rem .84rem;
	}

	.my-login-h4 {
		height: .4rem;
		margin-left: .32rem;
	}

	.my-login-h4 img {
		height: 100%;
	}

	.input-border {
		display: flex;
	}

	.mui-input-row label {
		height: 41px !important;
		width: 41px !important;
	}

	.mui-input-row label img {
		display: block;
		height: 100%;
	}

	.input-border {
		margin-top: .26rem;
		font-size: 12px;
		border-bottom: 1px solid #DDDDDD;
	}

	.margin {
		margin: .52rem 0 0.4rem;
		display: block;
		float: right;
		font-size: 12px;
	}

	.chen {
		color: #fff;
		bottom: -.28125rem;
		height: .82rem;
		position: absolute;
		width: 70%;
		left: 50%;
		border-radius: 1.28125rem !important;
		background-color: #000 !important;
		border: none !important;
		transform: translateX(-50%)
	}

	p {
		font-size: 14px;
		margin-top: 0;
		margin-bottom: 10px;
		color: #8f8f94;
		text-align: center;
	}

	.ma {
		margin-top: .42rem;
		margin-bottom: .4rem;
	}
</style>
