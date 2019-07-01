<template>
	<div>
		<div class="qixingIcon">
			<icon :config="config" url="/ditu">
				<p>今日骑行消耗</p>
			</icon>
		</div>
		<list :content='content[0]'></list>
		<list :content='content[1]'></list>
	</div>
</template>

<script>
import icon from '../icon.vue';
import list from '../list.vue';
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
					pic:'http://dpic.tiankong.com/7c/jt/QJ6901462252.jpg',
					yes:'红枣阿胶不补血，食疗还得吃这些'
				},{
					pic:'http://dpic.tiankong.com/5d/th/QJ9108249816.jpg',
					yes:'红枣阿胶不补血，食疗还得吃这些'
				},{
					pic:'http://dpic.tiankong.com/ru/ue/QJ6120346805.jpg',
					yes:'红枣阿胶不补血，食疗还得吃这些'
				},{
					pic:'http://dpic.tiankong.com/5d/93/QJ8164495576.jpg',
					yes:'红枣阿胶不补血，食疗还得吃这些'
				}]
			},
			{
				title:'健康知识',
				introduction:[{
					pic:'http://dpic.tiankong.com/hb/0x/QJ6872318665.jpg',
					yes:'红枣阿胶不补血，食疗还得吃这些',
					aderess:'http://localhost:3000/video/alice.mp3'
				},{
					pic:'http://dpic.tiankong.com/tz/li/QJ9105131959.jpg',
					yes:'红枣阿胶不补血，食疗还得吃这些'
				},{
					pic:'http://dpic.tiankong.com/7c/jt/QJ6901462252.jpg',
					yes:'红枣阿胶不补血，食疗还得吃这些'
				},{
					pic:'http://dpic.tiankong.com/ak/df/QJ6778133026.jpg',
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
	.qixingIcon{
		width: 100%;
		height: 5.4rem;
	}
</style>
