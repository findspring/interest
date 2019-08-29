<template>
	<div>
		<div class="common-width">
			<div class="news-main clearfix">
				<div class="newsinfo-left fl">
					<h4>{{post_title}}</h4>
					<div class="newsinfo-msg"><time>时间：{{create_time}} </time><small>作者：{{authName}}</small></div>
					<div class="newsinfo-content">
						<p v-html="post_content"></p>
					</div>
				</div>
				<div class="newsinfo-right fr">
					<a href="javascript:;"><img :src="newsImg01" alt=""></a>
					<a href="javascript:;"><img :src="newsImg01" alt=""></a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'newsInfo',
  data() {
    return {
			newsImg01:require('../../assets/imgs/loan01.png'),
			create_time:'',
			post_content:'',
			post_title:'',
			authName:'',
    };
  },
  watch: {
    $route: {
      handler(val) {
        if(val.query && val.query.id){
      		this.getDetailData(val.query.id);
      	}
      },
      // deep:true,
      immediate: true
    },
  },
  mounted(){
		this.getDetailData(this.$route.query.id);
  },
  methods:{
		getDetailData(id){
      this.$http({
        method: "post",
        url: "/portal/about/newsdetail?id="+id,
      }).then((res) => {
      	let detail = res.data.data.detail;
				this.create_time = detail.create_time;
				this.post_content = detail.post_content;
				this.post_title = detail.post_title;
				this.authName = detail.user_nickname;
      }).catch((err) => {
      });
    },
  },
};
</script>

<style lang="css" scoped>
	.news-main{
		padding: 20px 0;
	}
	.newsinfo-left{
		min-height: 650px;
		width: 750px;
		padding: 20px;
		box-sizing: border-box;
		border: 1px solid #e4e4e4;
	}
	.newsinfo-left h4{
		font-size: 20px;
		line-height: 40px;
	}
	.newsinfo-msg{
		font-size: 12px;
		color:#888;
		padding-bottom: 20px;
	}
	.newsinfo-msg small{
		margin-left: 10px;
	}
	.newsinfo-content{
		text-indent: 2em;
		text-align: justify;
	}
	.newsinfo-right{
		width: 220px;
	}
	.newsinfo-right a{
		display: block;
		overflow: hidden;
		margin-bottom: 15px;
	}
</style>
