<template>
	<div class="address">
		<head-nav>支付</head-nav>
		<ul adress class="box">
			<div class="titleHeader">
				<div class="name">收货人：{{adress.name}}</div>
				<div class="tel">{{adress.tel}}</div>
			</div>
			<div class="titleMian">
				<div class="asHeader">收货地址：</div>
				<div class="as">{{adress.as}}</div>
			</div>
			<div class="tools">
				<div @touchstart='edit' class="edit" @touchend='editend' ref="bianji">
					<i class="mui-icon mui-icon-compose"></i>编辑
				</div>
			</div>
		</ul>
		<ul class="mui-table-view mui-table-view-chevron"  ref="bian" :style="{display:'none'}">
			<li>
				<p>收货人</p>
				<div><input type="text" placeholder="流沙河" v-model.lazy="adress.name"></div>
			</li>
			<li>
				<p>手机号码</p>
				<div><input type="text" v-model.lazy="adress.tel"></div>
			</li>
			<li>
				<p>省/市/区</p>
				<div class="three">
					<div>
						<input type="text" v-model.lazy="adress.arry[0]">
					</div>
					<div>
						<input type="text"  v-model.lazy="adress.arry[1]">
					</div>
					<div>
						<input type="text"  v-model.lazy="adress.arry[2]">
					</div>
				</div>

			</li>
			<li>
				<p>详细地址</p>
				<div><input type="text" v-model.lazy="adress.arry[3]"></div>
			</li>
			<li>
				<div class="submit"><button @click="sure">确认</button></div>
			</li>
		</ul>
		<div class="ali" @click="pay('alipay')">支付宝支付</div>
		<div class="wx" @click="pay('wxpay')">微信支付</div>
	</div>
</template>

<style scoped="scoped">
.tools::after{
	content: '';
	display: block;
	clear: both;
}
.edit{
	float: right;
	color: #9B9B9B;
}
.as{
	flex: 1;
}
.asHeader{
	width: 1.6rem;
}
.titleMian{
	color: #BCBCBC;
	padding: .3rem 0;
	display: flex;
	line-height: 1.4;
}
.titleHeader{
	display: flex;
	justify-content: space-between;
	font-size: .36rem;
	font-weight: 500;
}

.box{
	background: #FFFFFF;
	margin: .2rem 0;
	border-bottom: solid 1px #D7D7D7;
}
	ul {
		list-style: none;
		padding: 0.4rem;
	}
	.address ul li p {
		font-size: .15rem;
		line-height: 0.7rem;
	}

	.address ul li div {
		border: 1px solid #333;
		height: 0.8rem;
	}

	.address ul li .three {
		display: flex;
		border: none;
		justify-content: space-between;
	}

	.address ul li .three div {
		width: 30%;
	}

	.address ul li div input,
	.address ul li div button {
		width: 100%;
		height: 0.7rem;
		line-height: 0.7rem;
		border: none;
		background: none;
		font-size: .25rem;
	}

	.address ul li div input {
		text-indent: 0.4em;
	}

	.address ul li div.submit {
		background: #ffe828;
		border: none;
		margin-top: 0.4rem;
	}
	.ali{
		width: 60%;
		height: 1rem;
		border-radius: 0.5rem;
		background: #019FE8;
		margin: 0.3rem auto;
		line-height: 1rem;
		color: #FFFFFF;
		text-align: center;
	}
	.wx{
		width: 60%;
		height: 1rem;
		border-radius: 0.5rem;
		background: #05C963;
		margin: 0.3rem auto;
		line-height: 1rem;
		color: #FFFFFF;
		text-align: center;
	}
	.ali:hover{
		background:#0b7fb4;
	}
	.wx:hover{
		background:#26a663;
	}
</style>

<script>
	import headNav from '../components/head-nav.vue'
	export default {
		name:'zhifu',
		data() {
			return {
				pays: {},
				w:null,
				PAYSERVER:'http://demo.dcloud.net.cn/payment/?payid=',
				adress:
					{
						id:'1',
						name:'陈贤柏',
						as:'甘肃省 兰州市 安宁区 兰州交通大学 快捷支付服务',
						tel:'18893910702',
						arry:['甘肃省','兰州市','安宁区','兰州交通大学']
					}
				
			}
		},
		mounted() {
			var ff=this;
			this.$root.dd.plusReady(function () {
			    plus.payment.getChannels(function(channels){
			    	for(var i in channels){
			    		var channel=channels[i];
			    		if(channel.id=='qhpay'||channel.id=='qihoo'||channel.id=='appleiap'){
			    			continue;
			    		}
			    		ff.pays[channel.id]=channel;
			    		ff.checkServices(channel);
			    	}
			    },function(e){
			    	plus.nativeUI.alert('获取支付通道失败：'+e.message);
			    });
			})
			this.$store.commit('showBottomNav', false);
		},
		methods: {
			sure(){
				this.$refs.bian.style.display='none';
				this.adress.as=this.adress.arry.toString().replace(/[,]/g,' ')
			},
			edit(){
				this.$refs.bianji.style.color='#5c5959'
			},
			editend(){
				this.$refs.bianji.style.color='#9B9B9B'
				this.$refs.bian.style.display='block'
			},
			checkServices(pc){
				if(!pc.serviceReady){
					var txt=null;
					switch(pc.id){
						case 'alipay':
						txt='检测到系统未安装“支付宝快捷支付服务”，无法完成支付操作，是否立即安装？';
						break;
						default:
						txt='系统未安装“'+pc.description+'”服务，无法完成支付，是否立即安装？';
						break;
					}
					plus.nativeUI.confirm(txt, function(e){
						if(e.index==0){
							pc.installService();
						}
					}, pc.description);
				}
			},
			pay(id){
				if(this.w){return;}//检查是否请求订单中
				var url=this.PAYSERVER;
				if(id=='alipay'||id=='wxpay'){
					url+=id;
				}else{
					plus.nativeUI.alert('当前环境不支持此支付通道！', null, '捐赠');
					return;
				}
				var appid=plus.runtime.appid;
				if(navigator.userAgent.indexOf('StreamApp')>=0){
					appid='Stream';
				}
				url+='&appid='+appid+'&total=';
				
				this.w=plus.nativeUI.showWaiting();
				// 请求支付订单
				var amount = this.$store.state.total;
				var xhr=new XMLHttpRequest();
				var ff=this;
				xhr.onreadystatechange=function(){
					switch(xhr.readyState){
						case 4:
						ff.w.close();ff.w=null;
						if(xhr.status==200){
							var order=xhr.responseText;
							plus.payment.request(ff.pays[id],order,function(result){
								plus.nativeUI.alert('支付成功：感谢你的支持，我们会继续努力完善产品。',function(){
									back();
								},'捐赠');
							},function(e){
								plus.nativeUI.alert('很遗憾', null, '支付失败：'+e.code);
							});
						}else{
							plus.nativeUI.alert('获取订单信息失败！', null, '捐赠');
						}
						break;
						default:
						break;
					}
				}
				xhr.open('GET',url+amount);
				xhr.send();
			}
		},
		beforeDestroy() {
			this.$store.commit('showBottomNav', true);
		},
		components: {
			headNav
		},
	}
</script>


