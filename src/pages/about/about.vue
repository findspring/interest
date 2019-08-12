<template>
	<div class="about-us">
		<div class="common-width bg-white about-main">
			<el-tabs  v-model="activeName" tab-position="left" style="height: 650px;">
		    <el-tab-pane label="公司简介" name="intro">
		    	<div class="company-intro about-item">
		    		<h3>公司简介</h3>
		    		<div class="intro-main">
		    			<p></p>
		    			<p></p>
		    		</div>
		    	</div>
		    </el-tab-pane>
		    <el-tab-pane label="联系我们" name="contact">
					<div class="contact-us about-item">
						<h3>联系我们</h3>
		    		<div class="intro-main">
		    			<p></p>
		    			<p></p>
		    		</div>
					</div>
		    </el-tab-pane>
		    <el-tab-pane label="公司动态" name="trends">
		    	<div class="company-trends about-item">
		    		<h3>公司动态</h3>
		    		<div class="intro-main">
		    			<p></p>
		    			<p></p>
		    		</div>
		    	</div>
		    </el-tab-pane>
		  </el-tabs>
		</div>
			
	</div>
</template>

<script>
export default {

  name: 'about',

  data() {
    return {
			activeName: 'intro',
    };
  },
  watch: {
    $route: {
      handler(val) {
        this.changeTab();
      },
      // deep:true,
      immediate: true
    },
  },
  mounted(){
  	this.changeTab();
  },
  methods:{
		changeTab(){			
	  	if(this.$route.params && this.$route.params.activeName){
	  		this.activeName = this.$route.params.activeName;
	  	}
		}
  }
};
</script>

<style lang="css" scoped>
	.about-us{
		background:#f3f3f3;
		padding: 20px 0;
	}
	.about-main{		
		border:1px solid #e4e4e4;
	}
	.about-item{
		padding: 0px 20px;
	}
	.about-item h3{
		font-size: 18px;
		line-height: 48px;
		border-bottom: 2px solid #48cfad ;
	}
	.about-item p{

	}
</style>
