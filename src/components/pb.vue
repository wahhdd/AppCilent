<template>
	<div>
		<head-nav>地图</head-nav>
		<div id="map" v-if="flag"></div>
	</div>
</template>

<script>
import headNav from './head-nav.vue'
import loadBMap from '../../public/js/map.js'
export default {
		data() {
			return {
				latitude: this.$store.state.latitude,
				longitude: this.$store.state.longitude,
				flag: true,
				myMap:{}
			}
		},
		components: {
			headNav
		},
		created() {
			this.$store.commit('showBottomNav', false);
		},
		methods: {
			initMap() {
				loadBMap('5wRyLV9h5oB9xGUNAziGtbp8HcFbk85n')
					.then(() => {
						// 百度地图API功
						this.myMap = new BMap.Map('map') // 创建Map实例
						var point=new BMap.Point(this.longitude,this.latitude)
						this.myMap.centerAndZoom(point, 15) // 初始化地图,设置中心点坐标和地图级别
						var marker = new BMap.Marker(point);
						this.myMap.setCurrentCity("兰州");
						this.myMap.addOverlay(marker);
						marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
					})
					.catch(err => {
						console.log(err)
					})
			}
		},
		mounted() {
			this.initMap()
		},
		beforeDestroy() {
			this.$store.commit('showBottomNav', true);
		}
	}
</script>

<style scoped="scoped">
	#map {
		position: fixed !important;
		top: 60px;
		bottom: 0;
		width: 100%;
	}
</style>
