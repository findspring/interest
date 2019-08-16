<template>
	<div>
		<div class="block">
      <el-carousel height="350px">
        <el-carousel-item v-for="(item,index) in indexArr" :key="index">
          <img v-bind:src="item">
          <!-- <h3 class="small">{{ item }}</h3> -->
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="common-width news-list clearfix">
    	<!-- left -->
    	<div class="news-left fl">
    		<h4>大家都在看的优惠</h4>
	    	<ul class="list-info">
	    		<li class="list-item" v-for="(item,index) in articleList" :key="index">
	    			<a href="javascript:;">
	    				<img :src="'http://www.fanrenli.com' + item.thumbnail" alt="">
		    			<p class="p1">{{item.post_title}}</p>
		    			<p class="p2 line-ellipsis02">{{item.post_excerpt}}</p>
	    			</a>						    			
	    		</li>
	    	</ul>
    	</div>
    	<!-- right -->
	    <div class="news-right fr">
	    	<a href="javascript:;"><img :src="newsImg01" alt=""></a>
	    </div>
    </div>
	</div>
</template>

<script>
export default {

  name: 'noCardPay',

  data() {
    return {
			indexArr:[
        require('../../assets/imgs/index1.jpeg'),
        require('../../assets/imgs/index2.jpeg'),
      ],
      articleList:[],
      newsImg01:require('../../assets/imgs/loan01.png'),
    };
  },
  mounted(){
		this.getDiscount();
  },
  methods:{
  	getDiscount(){
  		let params={};
  		// params.id = '5d4d96382e3f40917e927201';
      this.$http({
        method: "post",
        url: "/portal/credit/youhui",
        // data: this.$qs.stringify(params)
      }).then((res) => {
      	this.articleList = res.data.data.youhui_articles
      }).catch((err) => {
      });
    },
  }
};
</script>

<style lang="css" scoped>
	.news-list{
		padding: 20px 0 30px 0;
	}
	.news-left{
		width: 750px;
	}
	.news-left h4{
		font-size: 16px;
		line-height: 48px;
		border-bottom: 1px solid #e4e4e4;
	}
	.news-left ul{
		width: 100%;
	}
	.news-left ul li{
		width: 22%;
		margin-right: 4%;
		margin-top: 10px;
		float: left;
		text-align:justify;
	}
	.news-left ul li:nth-child(4n){
		margin-right: 0
	}
	.news-left ul li p.p1{
		margin: 6px 0 5px;
    line-height: 20px;
	}
	.news-left ul li img{
		width: 100%;
    height: 120px;
	}
	.news-left ul li p.p2{
		height: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
    color:#888;
    font-size: 12px;
	}
	.news-right{
		width: 220px;
		padding-top: 20px;
	}
</style>
