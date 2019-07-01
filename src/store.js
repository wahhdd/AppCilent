import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
			shouyeNav:0,
			login:false,
			total:0,
			showBottomNav:true,
			nowdayBushu:4000,
			oldBushu:0,
			oldpaobu:0,
			nowdaypaobu:4000,
			oldqixing:0,
			nowdayqixing:3000,
			oldjianshen:'0',
			nowdayjianshen:'154',
			district:'朝阳区',
			street:'不知道街道',
			latitude:116.347496,
			longitude:39.970191,
			user:{
				
			}
	},
	mutations: {
		increment (state, data) {
			state.total += data;
		},
		nowdayBushu(state){
			state.nowdayBushu+=1;
		},
		nowday(state,data){
			state.nowdayBushu=data;
		},
		showBottomNav (state, data) {
			state.showBottomNav = data;
		},
		firstShow (state, data){
			state.oldBushu = data;
		},
		shouyeNav(state,data){
			state.shouyeNav=data
		},
		address(state,data){
			state.district=data.district;
			state.street=data.street,
			state.latitude=data.latitude,
			state.longitude=data.longitude
		},
		secondShow(state,data){
			if(data.index==4){
				state.oldqixing=data.bushu
			}
		},
		user(state,data){
			console.log(data)
			state.user=data;
		}
	},
	actions: {

	}
})
