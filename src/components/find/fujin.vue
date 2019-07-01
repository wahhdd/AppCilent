<template>
	<div class="fujin">
		<ul>
			<li v-for="item in fujinInfo">
				<div class="infoLeft">
					<img v-bind:src="item.touxiang"/>
				</div>
				<div class="infoCenter">
					<div class="nicheng">
						{{item.nicheng}}
					</div>
					<div class="xinxi">
						<span class="sex">{{item.sex}}</span>
						<span class="xingzuo">{{item.xingzuo}}</span>
						<span class="dengji">{{item.dengji}}</span>
					</div>
					<div class="jianjie">
						{{item.jianjie}}
					</div>
				</div>
				<div class="infoRight">
					<div class="juli">
						{{item.juli}}
					</div>
					<span :class="{active:item.flag}" @click="item.flag=!item.flag">{{item.guanzhu}}</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default{
	name:"fujin",
	data(){
		return {
			fujinInfo:[
				{
					touxiang:"https://b-ssl.duitang.com/uploads/item/201811/16/20181116211058_iutgf.jpg",
					nicheng:"Cc",
					sex:"♂49",
					xingzuo:"天秤座",
					dengji:"lv0",
					jianjie:"你好，交个朋友嘛",
					juli:"717m",
					flag:false,
					guanzhu:"关注"
				},
				{
					touxiang:"https://b-ssl.duitang.com/uploads/item/201811/04/20181104203324_xfeme.thumb.700_0.jpg",
					nicheng:"点亮人生",
					sex:"♂47",
					xingzuo:"巨蟹座",
					dengji:"lv21",
					jianjie:"最近6天健走5.9万步",
					juli:"77m",
					flag:false,
					guanzhu:"关注"
				},
				{
					touxiang:"https://img4.duitang.com/uploads/item/201408/11/20140811084744_HJAjL.thumb.700_0.jpeg",
					nicheng:"蓝色的梦",
					sex:"♀27",
					xingzuo:"巨蟹座",
					dengji:"lv21",
					jianjie:"最近6天健走5.9万步",
					juli:"77m",
					flag:false,
					guanzhu:"关注"
				},
				{
					touxiang:"https://img4.duitang.com/uploads/item/201404/19/20140419213843_CYkKk.thumb.700_0.jpeg",
					nicheng:"慈禧太后",
					sex:"♀17",
					xingzuo:"狮子座",
					dengji:"lv21",
					jianjie:"最近6天健走4.6万步",
					juli:"77m",
					flag:false,
					guanzhu:"关注"
				},
				{
					touxiang:"https://cdn.duitang.com/uploads/item/201601/15/20160115155749_BQ3Vk.jpeg",
					nicheng:"也许我",
					sex:"♂47",
					xingzuo:"巨蟹座",
					dengji:"lv21",
					flag:false,
					jianjie:"最近6天健走5.9万步",
					juli:"77m",
					guanzhu:"关注"
				}
			]
		}
	}
}
</script>

<style scoped>
	.active{
		background: #00F3FF;
		color: #FFFFFF !important;
	}
	.fujin ul li{
		align-items: center;
		height: 1.8rem;
		border-bottom: 1px solid #ccc;
		padding: 0.2rem 0;
		clear: both;
	}
	.fujin ul li .infoLeft{
		float: left;
		width: 1.25rem;
		height: 1.25rem;
	}
	.fujin ul li .infoLeft img{
		width: 100%;
		border-radius: 50%;
	}
	.fujin ul li .infoCenter{
		float: left;
	}
	.fujin ul li .infoCenter .nicheng{
		/*margin: 0 0 0.125rem 0;*/
		padding: 0.125rem;
		font-size: 0.3rem;
	}
	.fujin ul li .infoCenter .xinxi{
		font-size: 0.25rem;
		color: #fff;
	}
	.fujin ul li .infoCenter .xinxi .sex{
		margin-left: 0.125rem;
		padding: 0.025rem 0.2rem;
		border-radius: 0.187rem;
		background: lightseagreen;
		opacity: 0.8;
	}
	.fujin ul li .infoCenter .xinxi span{
		margin: 0 0.05rem;
	}
	.fujin ul li .infoCenter .xinxi .xingzuo{
		padding: 0.025rem 0.2rem;
		border-radius: 0.187rem;
		background: purple;
		opacity: 0.7;
	}
	.fujin ul li .infoCenter .xinxi .dengji{
		padding: 0.025rem 0.2rem;
		border-radius: 0.187rem;
		background: pink;
		opacity: 0.7;
	}
	.fujin ul li .infoCenter .jianjie{
		margin-left: 0.125rem;
		padding: 0.2rem 0.2rem 0 0;
		font-size: 0.2rem;
		color: #BBBBBB;
	}
	.fujin ul li .infoRight{
		padding-right: 0.187rem;
		width: 2rem;
		height: 100%;
		text-align: right;
		float: right;
	}
	.fujin ul li .infoRight .juli{
		margin-bottom: 0.187rem;
		font-size: 0.3rem;
		color: #A5A5A5;
	}
	.fujin ul li .infoRight span{
		padding: 0.1rem 0.312rem;
		text-align: center;
		line-height: 0.5rem;
		border-radius: 0.05rem;
		border: 1px solid lightseagreen;
		color: lightseagreen;
	}
</style>