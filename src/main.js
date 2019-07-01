import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../public/css/mui.min.css'
import '../public/css/reset.css'
import '../public/js/flexible.min.js'
import fastclick from 'fastclick'
import axios from 'axios'
import './plugins/axios'
import mui from '../node_modules/js/mui.min.js'
import loading from './zhujian.js'

fastclick.attach(document.body)
Vue.config.productionTip = false
Vue.use(loading)
Vue.prototype.$ajax = axios
Vue.prototype.$url='http://192.168.43.60:3000'


new Vue({
	data(){
		return{
			dd:mui
		}
	},
	router,
	store,
	mounted() {
		mui({
			statusBarBackground: '#fff'
		});
		var dd=this;
		mui.plusReady(function() {
			plus.storage.setItem("test","test with hbuilder!");
			plus.navigator.setStatusBarBackground('#FFFFFF');
			plus.geolocation.getCurrentPosition(function(p) {
				dd.$store.commit('address',{district:p.address.district,street:p.address.street,latitude:p.coords.latitude,longitude:p.coords.longitude})
			}, function(e) {
				alert('Geolocation error: ' + e.message);
			});
			plus.accelerometer.watchAcceleration( function ( a ) {
				var cont=Math.sqrt(Math.pow(a.xAxis,2)+Math.pow(a.yAxis,2)+Math.pow(a.zAxis,2))-9.8
				if(cont>2){
					dd.$store.commit('nowdayBushu')
				}
			}, function ( e ) {
				alert( "Acceleration error: " + e.message ); 
			}, {frequency:1000} ); 
		})
	},
	created(){
		var dd=this;
		mui.plusReady(function(){
			if(plus.storage.getItem('num')){
				dd.$store.commit('nowday',plus.storage.getItem('num'))
			}else{
				plus.storage.setItem('num',0);
			}
		})
	},
	watch:{
		$route(to,from){
			var arr=['/login','/zhuce','/barcode','/ditu','/search','/bofang','/shiping','/myshouchang','/paobude','/find','/zhifu','/qiandao']
			var dd=arr.some(element => {
				return element==to.path;
			});
			if(dd){
				this.$store.state.showBottomNav=false;
			}else{
				this.$store.state.showBottomNav=true;
			}
		}
	},
	render: h => h(App)
}).$mount('#app')
