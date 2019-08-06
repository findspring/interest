<template>
  <div class="header clearfix">
    <el-container>
      <el-header>
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
      </el-header>
      <el-main>
        <div id="main">
          <router-view />
        </div>
      </el-main>
      <el-footer class="bg-gray">
      	<div class="footer common-width">
      		<p>融360贷款 - 深圳小额贷款平台 版权所有 | 营业执照</p>
      		<p>违法和不良信息举报邮箱：tousu@rong360.com    举报电话：13521618857Copyright © 2019 Rong360.com Inc. All Rights Reserved. 网络经营许可证 京ICP备12000680号-1  京公网安备 11010802020662号</p>
      		<p></p>
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
      logoUrl: require('../../assets/imgs/logo.png'),
      activeIndex: '1',
      LocationCity: '定位中',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
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
    }
  },
  mounted() {
    this.getLocation();
  }
};

</script>
<style lang="css" scoped>
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
  padding-top: 20px;
}

#main {
  width: 100%;
}

</style>
