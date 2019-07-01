<template>
  <div class="mui-content">
    <nav-head>注册</nav-head>
    <div class="banner"></div>
    <form v-on:submit.prevent="onSubmit" method="post" class="mui-input-group">
      <div class="mui-input-row">
        <label>用户名</label>
        <input type="text" class="mui-input-clear" placeholder="请输入用户名" v-model="username" value="">
      </div>
      <div class="mui-input-row">
        <label>密码</label>
        <input type="password" class="mui-input-password" placeholder="请输入密码" v-model="passd" value="">
      </div>
      <div class="mui-input-row">
         <label>确认密码</label>
        <input type="password" class="mui-input-password" placeholder="请输入密码" value="">
      </div>
	  <div class="mui-button-row" style="background: #efeff4;">
	    <button type="submit" id="ee" class="mystyle">注册</button>
	  </div>
    </form>
  </div>
</template>

<script>
import navHead from "../components/head-nav.vue";
import mui from '../../node_modules/js/mui.min.js'
export default{
	name:'zhuce',
	data(){
		return{
			username:'',
			passd:''
		}
	},
	components: {
		navHead
	},
	mounted(){
		mui('.mui-input-row input').input();
	},
	methods:{
		onSubmit(){
			var check=true;
			var fun=this;
			var ee
			mui('.mui-input-row input').each(function(a) {
			//若当前input为空，则alert提醒 
				if(!this.value || this.value.trim() == ""){
					var label = this.previousElementSibling;
					mui.alert(label.innerText + "不允许为空");
					check = false;
					return false;
				}
				if(a==0&&!fun.ischina(this.value)){
					mui.alert("用户名必须是字母或者文字且长度超过2不超过8");
					check=false;
					return false;
				}
				if(a==1){
					ee=this;
				}
				if(a==1&&!fun.password(this.value)){
					mui.alert( "密码必须是字母或者数字且长度超过6小于12");
					check=false;
					return false;
				}
				if(a==2){
					if(!(ee.value==this.value)){
						mui.alert("两次密码不一致");
						check=false;
						return false;
					}
				}
			});
			if(check){
				this.$axios.post('http://192.168.43.60:3000/zhuce', {
						username: this.username,
						password: this.passd
					})
					.then(function(response) {
						fun.$store.state.login=true;
						fun.$store.commit('user',response.data)
						fun.$router.go(-2);
					})
					.catch(function(error) {
						mui.alert('出现未知错误')
					});
			}
		},
		ischina(str) {
			var reg=/^[\u4E00-\u9FA5-A-Za-z]{2,10}$/;   /*定义验证表达式*/
			return reg.test(str);     /*进行验证*/
		},
		password(str){
			var reg=/^[A-Za-z0-9]{6,12}$/;
			return reg.test(str);
		}
	}
}
</script>

<style scoped>
.mui-input-group:after{
	height: 0 !important;
}
.banner{
	height: 3.5rem;
	background: url(../../public/img/jianyue.jpg) no-repeat center center/cover;
}
.mystyle{
	width: 90%;
	height: 1rem;
	border-radius: 0.5rem;
	background: #EFB300;
	margin: 0.4rem auto;
	display: block;
	color: #ffffff;
	font-size: .36rem;
}
</style>
