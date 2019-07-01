<template>
	<div>
		<head-nav>跑步</head-nav>
		<div class="paobu">
			<div class="cen">
				<canvas id="canvas" width="300" height="300">
					<p>抱歉，您的浏览器不支持canvas</p>
				</canvas>
			</div>
			<div class="ee">
				<span>{{hour}}</span>:<span>{{min}}</span>:<span>{{second}}</span>
			</div>
			<div class="button">
				<div class="box1">
					<div class="dd1" @touchstart="end" @touchend="styleObject.background='#fefefe'" :style="styleObject">
						结束
					</div>
				</div>
				<div class="box2">
					<div class="dd2" @touchstart="start" @touchend="styleObject1.background='#4FE3C1'" :style="styleObject1">
						开始
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	var timer;
	import {
		toCanvas
	} from '../../public/js/tui.js'
	import headNav from './head-nav.vue'
	export default {
		components: {
			headNav
		},
		data() {
			return {
				hour: '00',
				min: '00',
				second: '00',
				flag: true,
				styleObject:{
					background: '#fefefe'
				},
				styleObject1:{
					background: '#4FE3C1'
				}
			}
		},
		computed: {
			num() {
				return parseInt(this.hour)*400+parseInt(this.min)*6.66+parseInt(this.second)*0.111;
			}
		},
		methods: {
			end() {
				this.styleObject.background='#EBEBEB'
				toCanvas('canvas', this.num/400, this.num+'cal')
				clearInterval(timer)
				this.flag = true;
			},
			start() {
				this.styleObject1.background='#46bfa3'
				if (this.flag) {
					var time1 = new Date()
					timer = setInterval(() => {
						var time2 = new Date();
						var dd = time2.getTime() - time1.getTime();
						dd / (1000 * 60 * 60) < 10 ? this.hour = '0' + Math.floor(dd / (1000 * 60 * 60)) : this.hour = Math.floor(dd /
							(1000 * 60 * 60));
						dd % (1000 * 60 * 60) / (1000 * 60) < 10 ? this.min = '0' + Math.floor(dd % (1000 * 60 * 60) / (1000 * 60)) :
							this.min = Math.floor(dd % (1000 * 60 * 60) / (1000 * 60));
						dd % (1000 * 60 * 60) % (1000 * 60) / 1000 < 10 ? this.second = '0' + Math.floor(dd % (1000 * 60 * 60) % (1000 *
							60) / 1000) : this.second = Math.floor(dd % (1000 * 60 * 60) % (1000 * 60) / 1000);
					}, 1000);
					this.flag = false;
				} else {
					return
				}
			}
		},
		mounted() {
			toCanvas('canvas',0, 0+'cal')
		}
	}
</script>

<style scoped="scoped">
	.cen{
		width: 300px;
		height: 300px;
		margin: 0 auto;
	}

	.paobu {
		width: 100%;
		position: absolute;
		bottom: 0;
		top: 1rem;
		background: #282828;
	}

	.button {
		display: flex;
		font-size: .4rem;
		font-weight: 500;
		justify-content: space-around;
	}

	.button div {
		border-radius: 50%;
	}

	.box1 {
		height: 2.4rem;
		width: 2.4rem;
		padding: .2rem;
		background: #4F4F4F;
	}

	.box2 {
		width: 2.4rem;
		height: 2.4rem;
		padding: .2rem;
		background: #304D48;
	}

	.dd1:hover {
		background: #46bfa3;
	}

	.dd2:hover {
		background: #fefefe;
	}

	.dd1 {
		width: 100%;
		height: 100%;
		text-align: center;
		line-height: 2rem;
		color: #656565;
		background: #EBEBEB;
	}

	.dd2 {
		width: 100%;
		height: 100%;
		text-align: center;
		line-height: 2rem;
		color: #fff;
		background: #4FE3C1;
	}

	.ee {
		padding: .2rem 0;
		text-align: center;
		color: #fff;
		font-size: .48rem;
	}

	.ee span {
		padding: 5px;
	}
</style>
