<template>
  <div class="clearfix page-component__scroll">
    <el-backtop target=".test"></el-backtop>
    <el-container class="test">
      <el-header class="header-wraper">
        <div id="header" class="clearfix">
          <!-- logo -->
          <div class="logo fl">
            <img :src="logoUrl" alt="" class="cursor">
          </div>
          <!-- position -->
          <div class="position fl">
            <p>{{LocationCity}}</p>
          </div>
          <!-- right -->
          <div class="right fr">
            <!-- nav-title -->
            <div class="nav-title clearfix">
              <ul>
                <li><span>客服联系方式：10100360</span></li>
                <li class="cursor" @click="goPath('login')">登录/注册</li>
              </ul>
            </div>
            <!-- nav -->
            <el-menu :default-active="activeIndex" class="el-menu-demo nav" mode="horizontal" @select="handleSelect">
              <el-menu-item index="index" @click="goPath('index','index')">首页</el-menu-item>
              <el-menu-item index="creditCard" @click="goPath('creditCard','creditCard')">信用卡</el-menu-item>
              <el-menu-item index="loan" @click="goPath('loan','loan')">贷款</el-menu-item>
              <el-menu-item index="pos" @click="goPath('pos','pos')">POS机推广</el-menu-item>
              <el-menu-item index="noCardPay" @click="goPath('noCardPay','noCardPay')">无卡支付APP推广</el-menu-item>
              <!-- <el-menu-item index="6">订单管理</el-menu-item> -->
            </el-menu>
          </div>
        </div>
      </el-header>
      <el-main>
        <div id="main">
          <keep-alive>
            <router-view ></router-view>
          </keep-alive>
        </div>
      </el-main>
      <el-footer class="bg-gray" height="230px">
      	<div class="footer common-width">
      		<div class="footer-links clearfix">
      			<ul>
      				<li>
      					<a href="javascript:;" @click="goPath('about','','intro')">公司简介</a>
      				</li>
      				<li>
      					<a href="javascript:;" @click="goPath('about','','contact')">联系我们</a>
      				</li>
      				<li>
      					<a href="javascript:;" @click="goPath('about','','trends')">公司动态</a>
      				</li>
              <li>
                <a href="javascript:;">联系我们</a>
              </li>
              <li>
                <a href="javascript:;">公司动态</a>
              </li>
      			</ul>
      		</div>
      		<div class="footer-msg">
      			<p>融360贷款 - 深圳小额贷款平台 版权所有 | 营业执照</p>
	      		<p>违法和不良信息举报邮箱：tousu@rong360.com      京公网安备 11010802020662号</p>
	      		<p></p>
      		</div>
          <div class="footer-imgs flex">
            <div v-for="(item,index) in footerImgs" :key="index">
              <a href="javascript:;"><img :src="item" alt=""></a>
            </div>            
          </div>	      		
      	</div>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import BMap from 'BMap'
export default {
  data() {
    return {
      footerImgs:[
        require('../../assets/imgs/ba.png'),
        require('../../assets/imgs/cx.png'),
        require('../../assets/imgs/kx.png'),
        require('../../assets/imgs/vs.png'),
        require('../../assets/imgs/xy.png'),
      ],
      logoUrl: require('../../assets/imgs/logo.png'),
      activeIndex: 'index',
      LocationCity: '定位中',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    },
    getLocation() {
      var geolocation = new BMap.Geolocation()
      geolocation.getCurrentPosition((r) => {
        //console.log(r.address.city)
        this.LocationCity = r.address.city;

      }, { enableHighAccuracy: true })
      // const geolocation = new BMap.Geolocation();
      // var _this = this;
      // _this.LocationCity = '正在定位';
      // geolocation.getCurrentPosition(function getinfo(position) {
      //   let city = position.address.city; //获取城市信息
      //   let province = position.address.province; //获取省份信息
      //   _this.LocationCity = city;
      //   _this.success = true;
      // }, function(e) {
      //   _this.LocationCity = '定位失败, 请点击重试';
      //   this.success = false;
      // }, { provider: 'baidu' });
    },
    goPath(pathName,indexNum,aboutName){
      this.activeIndex = indexNum;
    	if(pathName == 'about'){
        this.$router.push({name:'about',params:{activeName:aboutName}})
      }else{
        this.$router.push({name:pathName})
      }
			
    },
  },
  mounted() {
  	//获取地址栏中的路由，设置elementui中的导航栏选中状态
    this.activeIndex = window.location.pathname.substr(1);
  	console.log(window.location.pathname)
    this.getLocation();
  }
};

</script>
<style lang="css" scoped>
.header-wraper{
	border-bottom: 1px solid #e4e4e4;
	height: 80px!important;
}
.header-wraper .el-menu.el-menu--horizontal{
	border:none!important;
}
#header {
  width: 1000px;
  margin: 0 auto;
}

.logo img {
  padding: 10px 0 16px 0;
}

.position p {
  line-height: 80px;
  font-size: 16px;
  margin-left: 10px;
  color: #555;
}

.right {
  position: relative;
}

.nav-title {
  font-size: 12px;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
  line-height: 20px;
}

.nav-title ul li {
  margin-left: 20px;
  float: left;
}

.nav {
  padding-top: 19px;
}

#main {
  width: 100%;
}
.footer{
  font-size: 14px;
  padding: 20px 0 0 0;
}
.footer-links{
  width: 70%;
  margin:15px 15%;
}
.footer-links ul li{
  height: 20px;
  width: 20%;
  float: left;
  text-align: center;
  border-right:1px solid #e4e4e4;
}
.footer-links ul li:last-child{
  border:none;
}
.footer-links ul li a{
  font-size: 16px;
  line-height: 20px;
}
.footer-msg{
  color: #999;
  text-align: center;
  line-height: 30px;
}
.footer-imgs{
  width: 100%;
  padding-top: 20px;
}
</style>
