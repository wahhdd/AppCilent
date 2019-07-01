<template>
  <div>
    <form method="post" v-on:submit.prevent="onSubmit" class="box">
      <div class="mui-input-row mui-search">
        <input type="search" v-model="food" class="mui-input-clear .mui-input-speech" placeholder>
      </div>
      <div class="back" @click="goBack">取消</div>
    </form>
    <div>
      <div v-if="cont==1" class="dd">抱歉，没有相关搜索结果</div>
	  <div v-else-if="cont==2" class="dd"><loading-0></loading-0></div>
      <div class="cc" v-else>
        <div class="goodsList" v-for="item in info" :key="item.id">
          <div class="goodsPicture">
            <img :src="item.picture">
          </div>
          <div class="contentBox">
            <h3 class="goodsName">{{item.name}}</h3>
            <div class="goodsSaled">{{item.month_saled_content}}</div>
            <div class="flexBox">
              <div class="goodsPrice">{{item.min_price}}￥</div>
              <div class="goodsTools"><addReduce :food='item'></addReduce></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<style scoped>
.mui-search{
	width: 87%;
}
.dd{
	position: absolute;
	top: 65px;
	bottom: 0;
	line-height: 8rem;
	text-align: center;
	width: 100%;
	color: #949494;
}
.goodsPrice{
	color: #E86270;
	font-weight: 600;
	font-size: 16px;
}
.flexBox{
	padding-top: .1rem;
	display: flex;
	justify-content: space-between
}
.goodsSaled{
	padding: .2rem 0;
}
.contentBox {
	flex:1;  
	box-sizing: border-box;
	padding: 4%;
}
.goodsName {
  font-size: 18px;
  font-weight: 600;
  /* font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; */
}
.goodsList img {
  width: 100%;
  height: 100%;
}
.goodsList {
  background: #f7f7f7;
  width: 92%;
  margin: 3% 3% 3% 5%;
  display: flex;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 0 20px 0 #dbdcde;
  height: 110px;
}
.goodsPicture {
  width: 110px;
  height: 100%;
  overflow: hidden;
}
.box {
  margin: 0.3rem 0.3rem 0;
  display: flex;
  justify-content: space-between;
}

.back {
  width: 0.6rem;
  font-size: 0.28rem;
  color: #757575;
  line-height: 0.6rem;
}
</style>
<script>
import addReduce from './addReduce'
import mui from "../../node_modules/js/mui.min.js";
export default {
	components:{
		addReduce
	},
  data() {
    return {
      food: "",
      cont: 1,
      nativeWebview: {},
      imm: {},
      InputMethodManager: {},
      info: []
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    initNativeObjects() {
      if (mui.os.android) {
        var main = plus.android.runtimeMainActivity();
        var Context = plus.android.importClass("android.content.Context");
        this.InputMethodManager = plus.android.importClass(
          "android.view.inputmethod.InputMethodManager"
        );
        this.imm = main.getSystemService(Context.INPUT_METHOD_SERVICE);
      } else {
        this.nativeWebview = plus.webview
          .currentWebview()
          .nativeInstanceObject();
      }
    },
    showSoftInput() {
      if (mui.os.android) {
        this.imm.toggleSoftInput(0, this.InputMethodManager.SHOW_FORCED);
      } else {
        this.nativeWebview.plusCallMethod({
          setKeyboardDisplayRequiresUserAction: false
        });
      }
      setTimeout(function() {
        //此处可写具体逻辑设置获取焦点的input
        var inputElem = document.querySelector("input");
        inputElem.focus();
      }, 200);
    },
    onSubmit() {
	this.cont=2;
      this.$axios.post(this.$url + "/goods", this.food).then(data => {
	   this.info=data.data;
	   console.log(this.info)
	   if(this.info.length){
		    this.cont=0;
	   }else{
		   this.cont=1;
	   }
      }).catch(err=>{
		  console.log(err)
		  this.cont=1;
	  });
    }
  },
  mounted() {
    this.$store.commit("showBottomNav", false);
    mui("input").input();
    var dd = this;
    mui.plusReady(function() {
      dd.initNativeObjects();
      dd.showSoftInput();
    });
  },
  beforeDestroy() {
    this.$store.commit("showBottomNav", true);
  }
};
</script>
