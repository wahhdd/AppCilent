<template>
	<div class="guanzhu">
		<ul>
			<li v-for="item in guanzhuInfo">
				<div class="xinxi">
					<div class="touxiang">
						<img v-bind:src="item.touxiang"/>
					</div>
					<div class="person">
						<span class="nicheng">{{item.nicheng}}</span>
						<span class="time">{{item.time}}</span>
					</div>
					<div class="guanzhu">
						{{item.guanzhu}}
					</div>
				</div>
				<div class="content">
					<p>{{item.content}}</p>
					<video width="350" height="200" v-bind:src="item.audioCon" controls></video>
				</div>
				<div class="redu">
					<div class="items">
						<i>&#xe656;</i><span>{{item.pinglun}}</span>
						&nbsp;&nbsp;
						<i>&#xe870;</i><span>{{item.dianzan}}</span>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default{
	name:"guanzhu",
	data(){
		return {
			guanzhuInfo:[
				{
					touxiang:"https://cdn.duitang.com/uploads/item/201601/15/20160115155749_BQ3Vk.jpeg",
					nicheng:"健身楷模",
					time:"5小时前",
					guanzhu:"关注",
					content:"咔咔咔，手臂训练",
					audioCon:"http://hd.yinyuetai.com/uploads/videos/common/0D7601345B999963CD41FB5D5CF356C0.flv",
					pinglun:"43",
					dianzan:"512"
				},
				{
					touxiang:"https://cdn.duitang.com/uploads/item/201601/15/20160115155749_BQ3Vk.jpeg",
					nicheng:"健身楷模",
					time:"5小时前",
					guanzhu:"关注",
					content:"咔咔咔，手臂训练",
					audioCon:"http://hd.yinyuetai.com/uploads/videos/common/0D7601345B999963CD41FB5D5CF356C0.flv",
					pinglun:"43",
					dianzan:"512"
				}
			]
		}
	}
}
</script>

<style scoped>
	@font-face{
		font-family: "iconfont";
		src: url(../../../public/font/iconfont.svg),url(../../../public/font/iconfont.eot),url(../../../public/font/iconfont.ttf),url(../../../public/font/iconfont.woff),url(../../../public/font/iconfont.woff2);
	}
	i{
		font-family: "iconfont";
	}
	.guanzhu ul li{
		padding: 0.187rem 0 0.625rem;
		border-bottom: 1px solid #ccc;
	}
	.guanzhu ul li .xinxi{
		display: flex;
	}
	.guanzhu ul li .xinxi .touxiang{
		width: 0.937rem;
		height: 0.937rem;
	}
	.guanzhu ul li .xinxi .touxiang img{
		width: 100%;
		border-radius: 50%;
	}
	.guanzhu ul li .xinxi .person{
		flex: 1;
	}
	.guanzhu ul li .xinxi .person span{
		display: block;
		padding: 0.1rem;
		font-size: 0.25rem;
		color: #A5A5A5;
	}
	.guanzhu ul li .xinxi .guanzhu{
		width: 1.25rem;
		line-height: 1.25rem;
		/*padding: 0.07rem 0.1rem;*/
		border-radius: 50%;
		color: lightseagreen;
		font-size: 0.25rem;
	}
	.guanzhu ul li .content{
		margin: 0 0 0.3rem 0;
	}
	.guanzhu ul li .content p{
		color: #333;
		padding-bottom: 0.2rem;
	}
	.content video{
		width: 7rem;
		display: block;
		margin: 0 auto;
	}
	.guanzhu ul li .redu{
		position: relative;
	}
	.guanzhu ul li .redu .items{
		position: absolute;
		right: 0.625rem;
	}
</style>
