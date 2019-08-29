<template>
	<div>
		<div class="common-width">
			<div class="block">
	      <el-carousel height="350px">
	        <el-carousel-item v-for="(item,index) in indexArr" :key="index">
	          <a href="javascript:;"  @click="goLink(item.url)">
	          	<img :src="'http://www.365qutui.com'+item.img_path">
	          </a>
	        </el-carousel-item>
	      </el-carousel>
	    </div>
	    <!-- loan-main -->
	    <div class="loan-main clearfix">
	    	<div class="loan-left fl">
	    		<div class="loan-hot">
	    			<h4>热门贷款</h4>
	    			<ul>
	    				<li class="flex" v-for="(item,index) in loanList" :key="index">
	    					<img :src="'http://www.365qutui.com' + item.loan_company_logo" alt="">
								<p>{{item.loan_name}}</p>
								<span>{{item.lending_time}}</span>
								<a href="javascript:;" class="loan-btn" @click="goPath('loanInfo',item.id)">查看</a>
	    				</li>
	    			</ul>
	    		</div>
	    		<div class="loan-methods">
	    			<h4>贷款攻略</h4>
	    			<ul class="flex">
	    				<li v-for="(item,index) in articleList" :key="index"> 
	    					<a href="javascript:;" @click="goPath('newsInfo',item.id)"><span>·</span>{{item.post_title}}</a>
	    				</li>
	    			</ul>
	    		</div>
	    	</div>
	    	<div class="loan-right fr">
	    		<a href="javascript:;"><img :src="newsImg01" alt=""></a>
	    		<a href="javascript:;"><img :src="newsImg01" alt=""></a>
	    	</div>
	    </div>
		</div>	    
	</div>
</template>
<script>
export default {

  name: 'loan',

  data() {
    return {
			indexArr:[],
      loanList:[],
      articleList:[],
      newsImg01:require('../../assets/imgs/loan01.png'),
    };
  },
  mounted(){
		this.getLoanData();
  },
  methods:{
  	goLink(url){
			window.open(url);
  	},
  	goPath(pathName,id){
      const {href} = this.$router.resolve({
        path: pathName,
        query: {
          id: id
        }
      })
      window.open(href, '_blank')
      // this.$router.push({path:pathName, query:{ id: id }});
    },
		getLoanData(){
      this.$http({
        method: "post",
        url: "/portal/loan/index",
        // data: this.$qs.stringify(params)
      }).then((res) => {
      	let result = res.data.data;
      	this.indexArr = result.banners;
				this.loanList = result.loanlist;
				this.articleList = result.loan_articles;
      }).catch((err) => {
      });
    },
  },
};
</script>

<style lang="css" scoped>
	.loan-main{
		padding-bottom:30px;
	}
	.loan-left{
		width: 750px;
	}
	.loan-hot{

	}
	.loan-left h4{
		font-size: 18px;
		line-height: 60px;
		border-bottom: 1px solid #e4e4e4;
	}
	.loan-hot ul li{
		align-items: center;
		height: 80px;
	}
	.loan-hot ul li img{
		margin-left: 15px;
	}
	.loan-hot ul li:hover{
		background: #f8f8f8;
	}
	.loan-hot ul li p{
		font-size: 16px;
	}
	.loan-hot ul li a{
		margin-right: 15px;
		width: 100px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    border-radius: 5px;
    background: #fff;
    font-size: 16px;
    color: #4978c4;
    border:1px solid #4978c4;
	}
	.loan-hot ul li a:hover{
		background: #4978c4;
    color: #fff;
	}
	.loan-methods ul{
		padding-top: 10px;
		flex-wrap: wrap;
	}
	.loan-methods ul li{
		line-height: 35px;
		width: 48%
	}
	.loan-methods ul li a span{
		margin-right: 5px;
	}
	.loan-methods ul li:hover{
		color:#4978c4;
	}
	.loan-right{		
		margin-top: 30px;
		width: 220px;
	}
	.loan-right a{
		display: block;
		overflow: hidden;
		margin-bottom: 15px;
	}
</style>
