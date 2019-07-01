<template>
	<div class="dd">
		<apphead style="z-index: 99;">扫一扫</apphead>
		<div class="flex-box">
			
		</div>
	</div>
</template>

<script>
import apphead from '../head-nav.vue'
import mui from '../../../node_modules/js/mui.min.js'
export default{
	name:'barcode',
	data() {
		return {

		}
	},
	components: {
		apphead
	},
	computed:{
		src(){
			return this.$route
		}
	},
	watch: {},
	created(){
		console.log('创建')
		this.$store.commit('showBottomNav', false);
		mui.plusReady(function(){  
			mui.init()
			var barcode = plus.barcode.create('barcode', [plus.barcode.QR], {
				top:'0px',
				left:'0px',
				width: '100%',
				position: 'static'
			});
			barcode.onmarked = onmarked;
			plus.webview.currentWebview().append(barcode);
			barcode.start();
			function onmarked(type, result) {
				var text = '未知: ';
				switch(type){
					case plus.barcode.QR:
					text = 'QR: ';
					break;
					case plus.barcode.EAN13:
					text = 'EAN13: ';
					break;
					case plus.barcode.EAN8:
					text = 'EAN8: ';
					break;
				}
				// alert( text+result );
				plus.runtime.openURL(result);
			}
		}); 
	},
	beforeDestroy() {
		console.log('开始销毁')
		mui.plusReady(function(){
			var b = plus.barcode.getBarcodeById('barcode');
			b.close();
		})
	}
}
</script>

<style>
</style>
