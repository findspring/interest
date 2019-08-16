<template>
	<div>
		<div class="common-width">
			<div class="news-main clearfix">
				<div class="newsinfo-left fl">
					<h4>30天10万落户，深圳楼市“笑了”？</h4>
					<div class="newsinfo-msg"><time>时间：2019-04-10 </time><small>来源：地产深度报道 作者：地产深度报道</small></div>
					<div class="newsinfo-content">
						<p>豪宅秒光、中介月赚20万……已有所回暖的深圳楼市或又将再添波澜。</p>
					</div>
				</div>
				<div class="newsinfo-right fr">
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
    };
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
	.newsinfo-content{
		text-indent: 2em;
		text-align: justify;
	}
	.newsinfo-right{
		width: 220px;
	}
</style>
