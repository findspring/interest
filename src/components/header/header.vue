<template>
	<div class="header clearfix">
		<div>
			<!-- logo -->
			<div class="logo fl">
				<img :src="logoUrl" alt="" class="cursor">
			</div>
			<!-- position -->
			<div class="position fl">
				<p>深圳</p>
			</div>
			<!-- right -->
			<div class="right fr">
				<!-- nav-title -->
				<div class="nav-title clearfix">
					<ul>
						<li><span>客服联系方式：10100360</span></li>
						<li class="cursor">登录/注册</li>
					</ul>
				</div>
				<!-- nav -->
				<el-menu :default-active="activeIndex" class="el-menu-demo nav" mode="horizontal" @select="handleSelect">
				  <el-menu-item index="1">处理中心</el-menu-item>
				  <el-submenu index="2">
				    <template slot="title">我的工作台</template>
				    <el-menu-item index="2-1">选项1</el-menu-item>
				    <el-menu-item index="2-2">选项2</el-menu-item>
				    <el-menu-item index="2-3">选项3</el-menu-item>
				  </el-submenu>
				  <el-menu-item index="3">消息中心</el-menu-item>
				  <el-menu-item index="4">订单管理</el-menu-item>
				</el-menu>
			</div>
		</div>
	</div>
</template>
<script>
export default {
  data() {
    return {
			logoUrl:require('../../assets/imgs/logo.png'),
			activeIndex: '1',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="css" scoped>
	.header{
		width: 1000px;
		margin:0 auto;
	}
	.logo img{
		padding: 13px 0;
	}
	.position p{
		line-height:80px;
	}
	.right{
		position:relative;
	}
	.nav-title{
		position: absolute;
		right: 0;
		top: 0;
		z-index: 1;
		line-height: 20px;
	}
	.nav-title ul li{
		margin-left: 20px;
		float: left;
	}
	.nav{
		padding-top: 20px;
	}

</style>
