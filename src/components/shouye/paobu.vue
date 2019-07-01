<template>
	<div>
		<div class="paobuIcon">
			<icon :config="config" url='/paobude'>
				<p>今日跑步消耗</p>
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
					pic:'http://dpic.tiankong.com/t1/9i/QJ7101305303.jpg',
					yes:'红枣阿胶不补血，食疗还得吃这些'
				},{
					pic:'http://dpic.tiankong.com/dg/c6/QJ7101063142.jpg',
					yes:'红枣阿胶不补血，食疗还得吃这些'
				},{
					pic:'http://dpic.tiankong.com/e1/li/QJ9105131994.jpg',
					yes:'红枣阿胶不补血，食疗还得吃这些'
				},{
					pic:'http://dpic.tiankong.com/l9/hi/QJ9105122962.jpg',
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
	.paobuIcon{
		width: 100%;
		height: 5.4rem;
	}
</style>
