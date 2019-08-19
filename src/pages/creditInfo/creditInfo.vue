<template>
	<div>
		<div class="common-width clearfix" style="padding-top:20px;">
			<!-- left -->
			<div class="credit-info fl">
				<!-- top -->
				<div class="credit-info-top flex">
					<img src="" alt="">
					<div class="credit-msg">
						<h4 class="line-ellipsis01">光大淘票票公仔联名卡</h4>
						<p class="line-ellipsis01"><span>小编点评</span>尊享淘票票会员、免费观影权益</p>
						<ul>
							<li><i class="el-icon-caret-right"></i>即时交易，短信提醒</li>
						</ul>
					</div>
					<div class="apply-btn cursor">立即申请</div>
				</div>
				<!-- mini -->
				<div class="credit-info-mini flex">
					<!-- <img src="" alt=""> -->
					<ul class="card-feature">
						<li><span>等级：</span>金卡</li>
						<li><span>币种：</span>人民币	</li>
					</ul>
					<ul class="card-advantage">
						<li class="line-ellipsis01" title=""><span>年费：</span>0元</li>
						<li><span>组织：</span>银联</li>
					</ul>
					<div class="apply-btn cursor apply-mini">立即申请</div>
				</div>
				<!-- main	 -->
				<div class="credit-info-main">
					<el-tabs type="border-card">
					  <el-tab-pane label="基本信息">
					  	<div class="card-info">
					  		<p><span>年费政策：</span><b>终身免年费</b></p>
					  	</div>
					  </el-tab-pane>
					  <el-tab-pane label="专享权限">
					  	<div class="card-power">
					  		<h3>卡片特权</h3>
					  		<div class="power-item">
					  			<h4><img :src="powerImg" alt="">即时交易，短信提醒</h4>
					  			<p>当您使用中国光大银行信用卡交易时，中国光大银行将为您发送短信，提示本次交易信息，使您能够及时了解卡片使用情况。</p>
					  		</div>
					  		<div class="power-item">
					  			<h4><img :src="powerImg" alt="">即时交易，短信提醒2</h4>
					  			<p>当您使用中国光大银行信用卡交易时，中国光大银行将为您发送短信，提示本次交易信息，使您能够及时了解卡片使用情况。</p>
					  		</div>
					  	</div>
					  </el-tab-pane>
					  <el-tab-pane label="相关费用">
					  	<div class="card-fee card-info">
					  		<p><span>取现：</span><b>最高取现比例50%，取现手续费为取现金额的2.5%，最低境内收费10元</b></p>
					  		<p><span>还款：</span><b>最低还款金额为本月账单的10%，日息0.05%</b></p>
					  		<p>
					  			<span class="fl">还款：</span>
					  			<ul>
					  				<li class="fee-title">
					  					<b>3期</b><b>6期</b><b>12期</b><b>18期</b><b style="border-right: none">24期</b>
					  				</li>
                    <li class="fee-number">
                      <b>2.9%</b><b>5%</b><b>9%</b><b>--</b><b style="border-right: none">--</b>
                    </li>
					  			</ul>
					  		</p>

					  	</div>
					  </el-tab-pane>
					</el-tabs>
				</div>
			</div>
			<!-- right -->
			<div class="credit-right fr">

				<div class="credit-logo">
					光大银行
				</div>
				<p>信用卡客服：4001-000-000</p>
				<div class="credit-stars clearfix">
					<span class="fl">批卡率 </span>
					<el-rate
						class="fl"
					  v-model="value"
					  disabled
					  text-color="#ff9900">
					</el-rate>
				</div>
				<div class="credit-stars clearfix">
					<span class="fl">优惠力度 </span>
					<el-rate
						class="fl"
					  v-model="value"
					  disabled
					  text-color="#ff9900">
					</el-rate>
				</div>
				<div class="credit-stars clearfix">
					<span class="fl">发卡速度  </span>
					<el-rate
						class="fl"
					  v-model="value"
					  disabled
					  text-color="#ff9900">
					</el-rate>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {

  name: 'creditInfo',

  data() {
    return {
				powerImg:require('../../assets/imgs/power.png'),
				value:5,
    };
  },
  mounted(){
  	console.log(this.$route.query.id)
		this.getDetailData(this.$route.query.id);
  },
  methods:{
		getDetailData(id){
  		let params={};
  		params.id = id;
      this.$http({
        method: "post",
        url: "/portal/credit/carddetail",
        data: this.$qs.stringify(params)
      }).then((res) => {
        console.log(222,res.data.data);
      }).catch((err) => {
      });
    },
  },
};
</script>

<style lang="css" scoped>
	.credit-info{
		width:750px;
	}
	.credit-info-top{
		width:100%;
		height:182px;
		background: #f8f8f8;
		border-bottom: 1px solid #e4e4e4;
		padding: 20px 15px;
		-ms-align-items: center;
		align-items: center;
	}
	.credit-info-top img{
    width: 230px;
    height: 140px;
	}
	.credit-msg{
	}
	.credit-msg h4{
		line-height: 30px;
		font-size: 18px;
    color: #3e5a99;
    width: 300px;
	}
	.credit-msg p{

	}
	.credit-msg p span{
		display: inline-block;
		width: 59px;
    height: 18px;
    background: url('../../assets/imgs/dp-icon.png') no-repeat;
    text-align: center;
    font-size: 12px;
    color: #fe8007;
    margin-right: 20px;
	}
	.credit-msg ul li{
		
	}
	.credit-msg ul li i{

	}
	.apply-btn{
	  width: 150px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    color: #fff;
    background: #fe8007;
    display: inline-block;
    border-radius: 5px;
    font-size: 16px;
	}
	.apply-mini{
		color: #fe8007;
    background: #fff;
    border:1px solid #fe8007;
	}
	.apply-mini:hover{
		color: #fff;
    background: #fe8007;
	}
	.credit-info-mini{
		width: 100%;
		min-height: 120px;
		-ms-align-items: center;
		align-items: center;
		padding:20px 15px 15px 15px;
		border-bottom: 1px dashed #e4e4e4;
	}
	.credit-info-mini img{
		width: 115px;
    height: 74px;
	}
	.card-feature{
		width: 30%;
	}
	.card-feature li{
		width: 100%;
		float: left;
		text-align: left;
		line-height: 30px;
		margin-left: 30px;
	}
	.card-advantage{
		max-width: 200px;
	}
	.card-advantage li{
		width: 100%;
		text-align: left;
		line-height: 30px;
	}
	.card-advantage li span,.card-feature li span{
		color:#999;
	}
	.credit-info-main{
		padding: 20px 0;
	}
	.card-info{
		padding:15px 0;
	}
	.card-info p{
		
	}
	.card-info p span{
		width: 100px;
    display: inline-block;
    text-align: right;
    color: #666;
    vertical-align: top;
    margin-right: 10px;
	}
	.card-info p b{
		width: 583px;
    display: inline-block;
    font-weight: 400;
	}
	.card-power{
		padding-bottom: 30px;
	}
	.card-power h3{
    font-size: 16px;
    margin-left: 11px;
	}
	.power-item{
		margin-top: 20px;
	}
	.power-item h4{
		font-size: 14px;
    line-height: 14px;
	}
	.power-item h4 img{
		margin-left: 29px;
    margin-right: 9px;
	}
	.power-item p{
		margin-left: 59px;
    width: 592px;
    font-size: 14px;
    line-height: 24px;
    color: #666;
    margin-top: 10px;
	}
	.card-fee ul{
		float: left;
    width: 601px;
    height: 70px;
    margin-top: 10px;
    border: 1px solid #ededed;
    margin-left: 5px;
    display: inline-block;
	}
	.card-fee ul li{
		height: 35px;
		line-height: 35px;
	}
	.card-fee ul li b{
		width: 119px;
    text-align: center;
    display: inline-block;
	}
	.fee-title{
		background: #f8f8f8;
	}
	.fee-title b{
    color: #999;
    border-right: 1px solid #ededed;
	}
	.fee-number b{
    color: #333;
    border-right: 1px solid #ededed;
	}
	.credit-right{
		width: 220px;
		height: 182px;
		border:1px solid #e4e4e4;
	}
	.credit-right p{
		text-align: center;
		line-height: 20px;
		padding-bottom: 10px;
	}
	.credit-logo{
		font-size: 20px;
		line-height: 50px;
		font-weight: 700;
		text-align: center;
		width: 100%;
	}
	.credit-stars{
		padding-left: 20px;
		padding-bottom: 10px;
	}
	.credit-stars span{
		width: 56px;
		margin-right: 10px;
    text-align: right;
    display: inline-block;
    color: #666;
	}
</style>
