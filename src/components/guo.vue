<template>
	<div>
		<div class="header-box">
			<div class="nav-box">
				<div class="user-pic">
					<img v-if="this.$store.state.user.userpic" :src="this.$store.state.user.userpic" />
					<img @click="go" else :src="this.$url+'/img/moren.jpg'" />
				</div>
				<div class="list-box" @click="gotofrend">
					<div class="list">
						<a>
							<p>好友</p>
							<p class="number">{{myset.friend}}</p>
						</a>
					</div>
					<div class="list">
						<a>
							<p>粉丝</p>
							<p class="number">{{myset.fensi}}</p>
						</a>
					</div>
					<div class="list">
						<a>
							<p>动态</p>
							<p class="number">{{myset.dongtai}}</p>
						</a>
					</div>
					<div class="list">
						<a>
							<p>金币</p>
							<p class="number">{{myset.jinbi}}</p>
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="pic-box mui-slider" id="slider">
			<div class='mui-slider-group mui-slider-loop ddd'>
				<div class="mui-slider-item mui-slider-item-duplicate">
					<img :src="src[2]">
				</div>
				<div class="mui-slider-item">
					<img :src="src[0]">
				</div>
				<div class="mui-slider-item">
					<img :src="src[1]">
				</div>
				<div class="mui-slider-item">
					<img :src="src[2]">
				</div>
				<div class="mui-slider-item mui-slider-item-duplicate">
					<img :src="src[0]">
				</div>
			</div>
		</div>
		<div class="mui-card" style="margin-top: 0.2rem; margin-bottom: 1.2rem;">
			<ul class="mui-table-view">
				<li class="mui-table-view-cell">
					<router-link class="mui-navigate-right" to="/myshouchang">
						<span class="iconfont iconpad" style="color: rgb(244, 236, 5);">&#xe503;</span>我的收藏
					</router-link>
				</li>
				<li class="mui-table-view-cell">
					<router-link  class="mui-navigate-right" to="/qiandao">
						<span class="iconfont iconpad" style="color: rgb(12, 189, 229)">&#xe624;</span>签到
					</router-link>
				</li>
				<li class="mui-table-view-cell">
					<router-link  class="mui-navigate-right" to="/qianbao">
						<span class="iconfont iconpad" style="color: #0062CC;">&#xe66f;</span>我的钱包
					</router-link>
				</li>
				<li class="mui-table-view-cell">
					<router-link class="mui-navigate-right" to="/help">
						<span class="iconfont iconpad">&#xe609;</span>帮助与反馈
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import mui from '../../node_modules/js/mui.min.js'
	export default {
		name: "myset",
		data() {
			return {
				myset:{},
				src:['http://192.168.43.60:3000/img/guangao.jpg','http://192.168.43.60:3000/img/guangao1.jpg','http://192.168.43.60:3000/img/guangao2.jpg']
			}
		},
		components: {
			
		},
		methods: {
			upload(){
				
			},
			go(){
				var dd=this;
				var btnArray = ['确认', '取消'];
				if(this.$store.state.login){
					this.$root.dd.confirm('你还没设置头像，点击确认设置？', '', btnArray, function(e) {
						if (e.index == 0) {
							dd.$root.dd.plusReady(function () {
							    plus.gallery.pick(function(p){
									dd.$root.dd.confirm('确认上传？', '', btnArray, function(el) {
										if (el.index == 0) {
											var wt=plus.nativeUI.showWaiting();
											var task=plus.uploader.createUpload('http://192.168.43.60:3000/api/Upload',
												{method:'POST'},
												function(t,status){ //上传完成
													plus.nativeUI.closeWaiting();
													if(status==200){
														dd.$store.state.user.userpic=t.responseText;
														plus.nativeUI.alert('上传成功')
													}else{
														plus.nativeUI.alert('上传失败')
														wt.close();
													}
												}
											);
											task.addData('username', dd.$store.state.user);
											task.addFile(p, {key:'imgUploader'});
											task.start();
										}else{
											return
										}
									})
							       p;
							    });
							})
						} else {
							return
						}
					})
				}else{
					this.$root.dd.confirm('你还未登录，请确认登陆？', '', btnArray, function(e) {
						if (e.index == 0) {
							dd.$router.push('/login');
						} else {
							return
						}
					})
				}
			},
			gotofrend(){
				this.$router.push('/myfrend')
			}
		},
		created() {
			this.myset=this.$store.state.user;
			console.log(this.myset)
		},
		mounted() {
			mui("#slider").slider({
				interval: 5000
			}) //启用右滑关闭功能
		}
	};
</script>

<style scoped>
.ddd{
	height: 100% !important;
}
.iconpad{
	padding-right: 0.2rem;
}
.pic-box{
	margin-top: 1.3rem;
	width: 100%;
	height: 2rem;
}
.pic-box img{
	display: block;
	width: 90% !important;
	height: 100%;
	border-radius: 0.8rem;
	margin: 0 auto;
}
.number{
	padding-top: 0.2rem;
	text-align: center;
}
.list-box{
	display: flex;
	justify-content: space-around;
	width: 100%;
	padding: 1rem 0 0.4rem;
}
.nav-box{
	display: flex;
	width: 90%;
	margin: 0 auto;
	background: #fff;
	position: relative;
	bottom: -1.74rem;
	box-shadow:  1px 1px 9px 0 #00f3ff;
	border-radius: 0.2rem;
}
.header-box{
	height: 3rem;
	width: 100%;
	background: #20B2AA;
}
.user-pic{
	width: 1.4rem;
	height: 1.4rem;
	border-radius: 50%;
	overflow: hidden;
	position: absolute;
	top: -0.7rem;
	left: 50%;
	transform: translateX(-50%);
}
.user-pic img{
	display: block;
	width: 100%;
}
</style>
