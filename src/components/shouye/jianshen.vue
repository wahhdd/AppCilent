<template>
	<div>
		<div class="jianshenIcon">
			<icon :config="config">
				<p>今日健身消耗</p>
			</icon>
		</div>
		<list :content='content[0]'></list>
	</div>
</template>

<script>
import list from '../list.vue';
import icon from '../icon.vue';
export default {
	data(){
		return {
			config:{
				oldbushu:0,
				nowdayBushu:4000,
				yuan:5000,
				index:4
			},
			content:[{
				title:'健康知识',
				introduction:[{
					pic:'http://p0.meituan.net/xianfu/38bbfa3f955cbce3330f1cb6818d0ce6216794.png',
					yes:'红枣阿胶不补血，食疗还得吃这些'
				},{
					pic:'http://p0.meituan.net/xianfu/38bbfa3f955cbce3330f1cb6818d0ce6216794.png',
					yes:'红枣阿胶不补血，食疗还得吃这些'
				},{
					pic:'http://p0.meituan.net/xianfu/38bbfa3f955cbce3330f1cb6818d0ce6216794.png',
					yes:'红枣阿胶不补血，食疗还得吃这些'
				},{
					pic:'http://p0.meituan.net/xianfu/38bbfa3f955cbce3330f1cb6818d0ce6216794.png',
					yes:'红枣阿胶不补血，食疗还得吃这些'
				}]
			},
			{
				title:'健康知识',
				introduction:[{
					pic:'http://p0.meituan.net/xianfu/38bbfa3f955cbce3330f1cb6818d0ce6216794.png',
					yes:'红枣阿胶不补血，食疗还得吃这些'
				},{
					pic:'http://p0.meituan.net/xianfu/38bbfa3f955cbce3330f1cb6818d0ce6216794.png',
					yes:'红枣阿胶不补血，食疗还得吃这些'
				},{
					pic:'http://p0.meituan.net/xianfu/38bbfa3f955cbce3330f1cb6818d0ce6216794.png',
					yes:'红枣阿胶不补血，食疗还得吃这些'
				},{
					pic:'http://p0.meituan.net/xianfu/38bbfa3f955cbce3330f1cb6818d0ce6216794.png',
					yes:'红枣阿胶不补血，食疗还得吃这些'
				}]
			},
			{
				title:'健康知识',
				introduction:[{
					pic:'http://p0.meituan.net/xianfu/38bbfa3f955cbce3330f1cb6818d0ce6216794.png',
					yes:'红枣阿胶不补血，食疗还得吃这些'
				},{
					pic:'http://p0.meituan.net/xianfu/38bbfa3f955cbce3330f1cb6818d0ce6216794.png',
					yes:'红枣阿胶不补血，食疗还得吃这些'
				},{
					pic:'http://p0.meituan.net/xianfu/38bbfa3f955cbce3330f1cb6818d0ce6216794.png',
					yes:'红枣阿胶不补血，食疗还得吃这些'
				},{
					pic:'http://p0.meituan.net/xianfu/38bbfa3f955cbce3330f1cb6818d0ce6216794.png',
					yes:'红枣阿胶不补血，食疗还得吃这些'
				}]
			}]
		}
	},
	components: {
		list,
		icon
	}
}
</script>

<style scoped="scoped">
.jianshenIcon{
	width: 100%;
	height: 5.4rem;
}
</style>
