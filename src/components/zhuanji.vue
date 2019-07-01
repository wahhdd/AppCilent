<template>
    <div class="mui-table-view-cell mui-media mystyle">
        <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" src="http://p0.meituan.net/xianfu/38bbfa3f955cbce3330f1cb6818d0ce6216794.png">
            <div class="mui-media-body xbcon">
                <div class="xbtitle">腰椎间盘突出不用慌，这样做就能摆脱疼痛困绕</div>
                <p class='mui-ellipsis xbwatch'><span class="mui-icon mui-icon-videocam"></span><span class="videoNum">5</span><span class="watchNum">1000</span></p>
            </div>
        </a>
    </div>
</template>
<script>
export default {
    props:{
        shipin:{
            type:Object
        }
    }
}
</script>
<style scoped>
.mystyle{
    width: 100%;
    background: #ffffff;
    border: 1px solid #ffffff;
}
.mui-media a img{
	width: 1.32rem;
    height: 100%;
    border-radius: 4px;
}
.xbcon p{
    padding-left: 5px;
    
}
.xbtitle{
    white-space:normal;
    font-size: 14px;
    font-family: "iconfont";
}
.xbtitle:before{
    margin-right: 3px;
    content: "\e50c";
    font-size: 20px;
    color: aquamarine;
}
.videoNum{
    width: 100px;
    font-family: "iconfont";
    font-size: 16px;
    margin-right: 5px;
}

.watchNum{
    font-family: "iconfont";
    width: 100px;
    font-size: 16px;
}
.watchNum:before{
    content: "\e50c";
    font-size: 20px;
	vertical-align: middle;
}
</style>


