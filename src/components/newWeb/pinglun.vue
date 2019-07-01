<template>
	<div class="xbcontent">
		<ul class="">
			<li class="onfocus clear">
				<div class="h fl">
					<img :src="obj.fabuzhe.userpic" alt="">
				</div>
				<div class="t fl">
					<div class="n">鲲鹏万里-漫威部落</div>
					<p>1.3万粉丝</p>
				</div>
				<span class="focusBtn fr">关注</span>
			</li>
			<li class="dddd clear">
				<div class="hotW fl">热门</div>
				<div class="bigTitle">{{obj.yes.length>11?obj.yes.substring(0,11)+"...":obj.yes}}</div>
			</li>
			<!--<li class="detailes"></li>-->
			<li class="all">
				<p class='mui-ellipsis'><span class="videoNum">54.6万</span><span class="watchNum">1000</span><span class="timeLong">19小时前</span></p>
			</li>
			<li class="relate">
				<span class="icon1">{{obj.shoucangshu}}</span>
				<span class="icon2">不喜欢</span>
				<span class="icon3">3122</span>
				<span class="icon4">9670</span>
				<span class="icon5">1.1万</span>
			</li>
			<li class="sort">
				<span>健康生活<div class="con"></div></span>
				<span>{{obj.title}}</span>
				<span>{{obj.mokuai}}</span>
				<span>视频</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		props:{
			obj:{
				type:Object
			}
		}
	}
</script>

<style scoped>
#ee{
	width: 6rem;
	overflow: hidden;
}
@font-face {
	font-family: "iconfont";
	src: url("../../../public/fontss/iconfont.svg"), url("../../../public/fontss/iconfont.ttf"), url("../../../public/fontss/iconfont.eot"), url("../../../public/fontss/iconfont.woff");
}
.xbcontent{
	padding-bottom: 60px;
}
ul {
	list-style: none;
}

ul li {
	padding: 10px 10px 0px;
}

.onfocus .h {
	width: 25px;
	height: 25px;
	margin-top: 10px;
	overflow: hidden;
	border-radius: 100px;
	background: red;
}
.onfocus img{
	width: 100%;
}
.onfocus .t {
	padding-left: 13px;
}

.onfocus .t p {
	font-size: 14px;
	color: #999;
}

.onfocus .focusBtn {
	display: block;
	width: 60px;
	height: 30px;
	line-height: 30px;
	background: #05C963;
	color: #fff;
	cursor: pointer;
	text-align: center;
	font-family: "iconfont";
}

.onfocus .focusBtn:before {
	content: "\e61c";
}

.dddd .hotW {
	color: #05C963;
	font-size: 12px;
	padding-right:5px; 
	font-family: "iconfont";
}

.dddd .hotW:before {
	content: "\e8f4";
}

.dddd .bigTitle {
	font-size: 18px;
	font-family: "iconfont";
}

.dddd .bigTitle:after {
	padding-left: 72px;
	color: #999;
	content: "\e62c";
}

.all{
	padding-top: 0px;
}
.all .videoNum {
	width: 100px;
	font-family: "iconfont";
	font-size: 12px;
	color: #999;
	margin-right: 15px;
}

.all .videoNum:before {
	content: "\e656";
	margin-right: 6px;
}

.all .watchNum,
.timeLong {
	font-family: "iconfont";
	width: 100px;
	color: #999;
	margin-right: 15px;
	font-size: 12px;
}

.watchNum:before {
	content: "\e618";
}

.relate {
	color: #999;
	padding: 28px 28px 10px;
}

.relate .icon1,
.icon2,
.icon3,
.icon4,
.icon5 {
	font-size: 12px;
	position: relative;
	margin-right: 36px;
	font-family: "iconfont";
	cursor: pointer;
}

.relate .icon5{
	margin-right: 0px;
}

.relate .icon1:before {
	position: absolute;
	top: -24px;
	left: 8px;
	font-size: 20px;
	content: "\e60c";
}

.relate .icon2:before {
	position: absolute;
	top: -24px;
	left: 8px;
	font-size: 20px;
	content: "\e61d";
}

.relate .icon3:before {
	position: absolute;
	top: -24px;
	left: 8px;
	font-size: 20px;
	content: "\e672";
}

.relate .icon4:before {
	position: absolute;
	font-size: 20px;
	top: -24px;
	left: 8px;
	content: "\e630";
}

.relate .icon5:before {
	position: absolute;
	top: -24px;
	left: 8px;
	font-size: 20px;
	content: "\e627";
}
.sort span{
	position: relative;
	margin-right: 7px;
	display: inline-block;
	width: 78px;
	height: 30px;
	line-height: 30px;
	text-align: center;
	font-size: 14px;
	border-radius: 100px;
	background: #c0fadc;
}

.sort span:last-child{
	margin-right: 0px;
}

.games{
	position: relative;
	padding-top: 20px;
}
.games a{
	color:#000;
}
.games a img{
	width: 45px;
	height: 45px;
}

.games .xbcon{
	padding-left: 56px;
}
.videoNum{
	width: 100px;
	font-family: "iconfont";
	color: orange;
	font-size: 14px;
}
.games .btn{
	position: absolute;
	top: 19px;
	right: 14px;
	border: 2px solid hotpink;
	border-radius: 3px;
}
.games .btn button{
	color: hotpink;
	border: none;
	height: 25px;
	line-height: 17px;
}
p{
	margin-top: 8px;
	/* margin-top: 0; */
    margin-bottom: 10px;
}
</style>
