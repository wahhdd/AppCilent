<template>
	<div>
		<head-nav>签到</head-nav>
		<div class="box">
			<div class="day">
				<span class="box-1">已经坚持</span>
				<div class="show">0</div>
				<div class="show">0</div>
				<div class="show">{{progress}}</div>
				<span class="box-2">天签到</span>
			</div>
			<div class="login-day">登录后将保留签到天数</div>
			<div class="ruder">连续签到七天将有机会抽奖</div>
		</div>
		<div class="about">
			<h1 class="title">已经连续签到{{progress}}天</h1>
			<p class="pp">连续签到七天 将有机会抽取百万大奖</p>
			<div class="press">
				<div id="demo1" class="mui-progressbar">
					<span></span>
				</div>
				<div class="day-box">
					<span>一天</span>
					<span>二天</span>
					<span>三天</span>
					<span>四天</span>
					<span>五天</span>
					<span>六天</span>
					<span>七天</span>
				</div>
			</div>
			<div class='canyu'>
				<span>524839</span>人已经参与
			</div>
		</div>
		<div class='qiandao' @click="ao">马上签到</div>
	</div>
</template>

<script>
import mui from '../../../node_modules/js/mui.min.js'
import headNav from '../head-nav.vue'
export default{
	name:'qiandao',
	components: {
		headNav
	},
	methods:{
		ao(){
			console.log(222)
			var wt;
			var dd=this;
			this.$root.dd.plusReady(function () {
			   wt=plus.nativeUI.showWaiting();
			})
			var id=this.$store.state.user._id;
			var progress=this.$store.state.user.qiandaotianshu;
			var jb=this.$store.state.user.jinbi;
			this.$axios.get(this.$url+"/qiandao",{
			params: {
				_id: id,
				qiandaotianshu:progress,
				jinbi:jb
			// id:1000
			}
  }).then(function(res){
				dd.$root.dd.plusReady(function () {
				    plus.nativeUI.closeWaiting();
				})
				dd.progress++;
				console.log(dd.progress)
				dd.$store.state.user.jinbi=res.data
			}).catch(function(err){
				mui.alert('出现错误，没有签到成功')
				dd.$root.dd.plusReady(function () {
				   wt.close();
				})
			})
		}
	},
	data(){
		return{
			progress:2
		}
	},
	computed:{
		pro(){
			return (this.progress-1)*100/7+100/14;
		}
	},
	mounted() {
		this.$store.commit('showBottomNav', false);
		var dd=this;
		mui("#demo1").progressbar({progress:dd.pro}).show();
	},
	beforeDestroy() {
		this.$store.commit('showBottomNav', true);
	},
	created(){
		if(isNaN(parseInt(this.$store.state.user.qiandaotianshu))){
				var dd=this;
				var btnArray = ['取消', '确认'];
				this.$root.dd.confirm('你还未登录，请确认登陆？', '', btnArray, function(e) {
					if (e.index == 1) {
						dd.$router.push('/login');
					} else {
						dd.$router.go(-1);
					}
				})
		}else{
			this.progress=this.$store.state.user.qiandaotianshu
		}
	},
	watch:{
		progress(val){
			var dd=this;
			if(val==7){
				mui("#demo1").progressbar({progress:100}).show();
				return
			}
			if(val>7){
				this.progress=0
				return
			}
			mui("#demo1").progressbar({progress:dd.pro}).show();
		}
	}
}
</script>

<style scoped="scoped">
	.qiandao{
		width:4rem;
		height:0.9rem;
		background: #FFC000;
		border-radius: 0.45rem;
		line-height: 0.9rem;
		text-align: center;
		margin: 0 auto;
		color: #fff;
		position: relative;
		top: -0.9rem;
	}
	.canyu{
		color:#ccc;
	}
	.canyu span{
		color:#FF9500;
	}
	.press{
		height: 2rem;
		padding: 30px 0;
	}
	.day-box{
		display: flex;
		justify-content: space-between;
		padding-top: 0.25rem;
		font-size: 0.24rem;
		color: #ADADAD;
	}
	.pp{
		padding: 10px 0;
		color: #CCCCCC !important;
	}
	.title{
		font-size: 0.36rem;
		font-weight: 600;
	}
	.about{
		width: 7rem;
		background: #FFF;
		border-radius: 0.4rem;
		margin: 0 auto;
		position: relative;
		top: -1.5rem;
		height: 4.54rem;
		box-sizing: border-box;
		padding: 0.42rem 0.25rem;
		text-align: center;
	}
	.ruder{
		width: 6.1rem;
		margin: 0.8rem auto 0;
		height: 0.8rem;
		background: #FF8900;
		text-align: center;
		border-radius: 0.4rem;
		line-height: 0.8rem;
		color: #FFFFFF;
	}
	.box{
		height: 6.5rem;
		background: #FFAB00;
		overflow: hidden;
		border-radius:0 0 50px 50px ;
	}
	.login-day{
		text-align: center;
		color: #DA7600;
		margin: 0.2rem 0;
	}
	.day{
		display: flex;
		color: #FFFFFF;
		font-size: 0.34rem;
		line-height: 1.22rem;
		margin: 0.7rem auto 0;
		width:6rem;
	}
	.box-1{
		padding-right: 0.15rem;
	}
	.box-2{
		padding-left: 0.15rem;
	}
	.show{
		background: #FFFFFF;
		width: 0.93rem;
		margin: 0 0.05rem;
		height: 1.22rem;
		box-sizing: border-box;
		padding: 0 0.3rem;
		border-radius: 0.1rem;
		text-align: center;
		font-size: 0.64rem;
		box-shadow: 1px 1px 20px 1px #a6a3a3;
		font-family: fantasy;
		color: #FFAB00;
	}
</style>
