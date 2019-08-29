<template>
	<div>
		<div class="block">
      <el-carousel height="350px">
        <el-carousel-item v-for="(item,index) in indexArr" :key="index">
          <a href="javascript:;"  @click="goLink(item.url)">
          	<img :src="'http://www.365qutui.com'+item.img_path">
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="common-width news-list clearfix">
    	<!-- left -->
    	<div class="news-left fl">
    		<h4>大家都在看的优惠</h4>
	    	<ul class="list-info">
	    		<li class="list-item" v-for="(item,index) in articleList" :key="index" @click="goPath('newsInfo',item.id)">
	    			<a href="javascript:;">
	    				<img :src="'http://www.365qutui.com' + item.thumbnail" alt="">
		    			<p class="p1">{{item.post_title}}</p>
		    			<p class="p2 line-ellipsis02">{{item.post_excerpt}}</p>
	    			</a>						    			
	    		</li>
	    	</ul>
    	</div>
    	<!-- right -->
	    <div class="news-right fr">
	    	<a href="javascript:;"><img :src="newsImg01" alt=""></a>
	    	<a href="javascript:;"><img :src="newsImg01" alt=""></a>
	    </div>
    </div>
	</div>
</template>

<script>
export default {

  name: 'pos',

  data() {
    return {
			indexArr:[],
      articleList:[],
      newsImg01:require('../../assets/imgs/loan01.png'),
    };
  },
  mounted(){
		this.getPosData();
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
  	getPosData(){
  		let params={};
  		// params.id = '5d4d96382e3f40917e927201';
      this.$http({
        method: "post",
        url: "/portal/pos/index",
        // data: this.$qs.stringify(params)
      }).then((res) => {
      	let result = res.data.data;
      	this.indexArr = result.banners;
      	this.articleList = result.articles
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
	.news-left ul li a:hover p.p2{
		color:#4978c4;
	}
	.news-left ul li a:hover img{
		transform: scale(1.05);
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
	.news-right a{
		display: block;
		overflow: hidden;
		margin-bottom: 15px;
	}
</style>
