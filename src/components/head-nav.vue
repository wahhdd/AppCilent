<template>
    <div class="head-nav">
        <div class="back" @click="back"><div class="mui-icon mui-icon-arrowleft"></div></div>
        <div class="headCenter">
			<h3>
				<slot></slot>
			</h3>
		</div>
        <div class="headright">
			<div class=" mui-icon mui-icon-search" v-if="search"  @click="goToSearch"></div>
		</div>
    </div>
</template>
<script>
export default {
	props: {
		search: {
			type: Boolean,
			default:false
		},
	},
    data(){
        return {}
    },
    methods:{
        back(){
			this.$router.go(-1);
        },
		goToSearch(){
			this.$router.push('/search')
		}
    }
}
</script>
<style scoped>
.head-nav{
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
	background: #FFFFFF;
	padding: 0 0.2rem;
    height: 50px;
	line-height: 50px;
}
.headCenter h3{
	font-size: 20px;
}
.back{
	width: 1rem;
}
.headright{
	width: 1rem;
}
</style>



