<template>
	<div>
		<div class="common-width credit_wrapper">			
			<div class="search flex">
				<el-input v-model="searchInfo" clearable size="small" placeholder="请输入信用卡名称"></el-input>
				<el-button style="margin-left:10px;" type="primary" size="small" @click="onSubmit">查询</el-button>
			</div>
			<el-tabs v-model="activeName" @tab-click="handleClick">
		    <el-tab-pane label="选卡中心" name="first">
		    	<div class="card-center">
		    		<!-- filter -->
		    		<div class="card-filter">
		    			<div  v-for='(val,index) in category' :key="index">
		    				<div class="filter-list clearfix" :class="{'filter-list-more':bankStatus}" v-if="items.name == '银行'">
			    				<p class="title">{{val.name}}</p>
			    				<a href="javascript:;" class="all choosed" @click="filterItemAll(index)">不限</a>
			    				<ul>
			    					<li v-for="(item,m) in bankList" :key="m">
			    						<a href="javascript:;" :class="{'choosed':item.active}" @click="filterCard(index,m)">
			    							<i :class="'bank-logo'+item.bank_id"></i>
			    							<span>{{item.bank_name}}</span>
			    						</a>
			    					</li>
			    				</ul>	
			    				<div class="showBtn cursor" @click="showTog()">{{showStatus}}</div>  				
			    			</div>
			    			<div class="filter-list clearfix" v-else>
			    				<p class="title">{{val.name}}</p>
			    				<a href="javascript:;" class="all choosed" @click="filterItemAll(index)">不限</a>
			    				<ul>
			    					<li v-for="(item,n) in useList" :key="n">
			    						<a href="javascript:;" :class="{'choosed':item.active}" @click="filterCard(index,n)">
			    							<span>{{item.use_name}}</span>
			    						</a>
			    					</li>
			    				</ul>
			    			</div>
		    			</div>
		    			<div class="filter-list clearfix" :class="{'filter-list-more':bankStatus}" ref="bank">
		    				<p class="title">银行</p>
		    				<a href="javascript:;" class="all choosed" @click="filterCard()">不限</a>
		    				<ul>
		    					<li v-for="(item,index) in bankList" :key="index">
		    						<a href="javascript:;" class="" @click="filterCard()">
		    							<i :class="'bank-logo'+item.bank_id"></i>
		    							<span>{{item.bank_name}}</span>
		    						</a>
		    					</li>
		    				</ul>	
		    				<div class="showBtn cursor" @click="showTog()">{{showStatus}}</div>   				
		    			</div>
		    			<div class="filter-list clearfix">
		    				<p class="title">用途</p>
		    				<a href="javascript:;" class="all choosed">不限</a>
		    				<ul>
		    					<li v-for="(item,index) in useList" :key="index">
		    						<a href="javascript:;" class="">
		    							<span>{{item.use_name}}</span>
		    						</a>
		    					</li>
		    				</ul>
		    			</div>
		    			<div class="filter-list clearfix">
		    				<p class="title">等级</p>
		    				<a href="javascript:;" class="all choosed">不限</a>
		    				<ul>
		    					<li v-for="(item,index) in levelList" :key="index">
		    						<a href="javascript:;" class="">
		    							<span>{{item.level_name}}</span>
		    						</a>
		    					</li>
		    				</ul>
		    			</div>
		    			<div class="filter-list clearfix">
		    				<p class="title">年费</p>
		    				<a href="javascript:;" class="all choosed">不限</a>
		    				<ul>
		    					<li v-for="(item,index) in annualfeeList" :key="index">
		    						<a href="javascript:;" class="">
		    							<span>{{item.annualfee_name}}</span>
		    						</a>
		    					</li>
		    				</ul>
		    			</div>
		    			<div class="filter-list clearfix">
		    				<p class="title">币种</p>
		    				<a href="javascript:;" class="all choosed">不限</a>
		    				<ul>
		    					<li v-for="(item,index) in currencyList" :key="index">
		    						<a href="javascript:;" class="">
		    							<span>{{item.currency_name}}</span>
		    						</a>
		    					</li>
		    				</ul>
		    			</div>
		    			<div class="filter-list clearfix">
		    				<p class="title">组织</p>
		    				<a href="javascript:;" class="all choosed">不限</a>
		    				<ul>
		    					<li v-for="(item,index) in orgList" :key="index">
		    						<a href="javascript:;" class="">
		    							<span>{{item.org_name}}</span>
		    						</a>
		    					</li>
		    				</ul>
		    			</div>
		    		</div>
		    		<!-- result -->
		    		<div class="card-result">
		    			<div class="card-total"><p>共找到<b>333</b>款信用卡</p></div>
		    			<div class="result-item">
		    				<img src="" alt="">
		    				<div class="card-msg">
		    					<p></p>
		    					<p></p>
		    				</div>
		    				<ul>
		    					<li>
		    						<p><span>系列等级：</span>金卡</p>
		    					</li>
		    					<li>
		    						<p><span>系列币种：</span>人民币</p>
		    					</li>
		    					<li>
		    						<p><span>取现费用：</span>10元</p>
		    					</li>
		    					<li>
		    						<p><span>年费政策：</span>终身免年费</p>
		    					</li>
		    				</ul>
		    				<div class="result-btn">
		    					<a href="javascript:;">查看</a>
		    					<p><b>人</b>申请</p>
		    				</div>
		    			</div>
		    		</div>
		    	</div>
		    </el-tab-pane>
		    <el-tab-pane label="信用卡优惠" name="second">
		    	<div class="card-discount">
		    		
		    	</div>
		    </el-tab-pane>
		  </el-tabs>
		</div>
	</div>
</template>

<script>
export default {

  name: 'creditCard',

  data() {
    return {
			activeName:'first',
			bankList:[],
			useList:[],
			annualfeeList:[],
			currencyList:[],
			levelList:[],
			orgList:[],
			showStatus:'更多',
			bankStatus:true,
			searchInfo:'',
			category:[],
			condition:[],
			count:0,
    };
  },
  mounted(){
		this.getFilterData();
		this.getResultData();
  },
  methods:{
  	onSubmit(){

  	},
  	filterCard(index,key){
			var item=this.category[index].items;
			item.filter((v,i)=>{
				if(i==key){
					v.active=true;			
					this.condition.filter((v2,i)=>{
						if(v.name==v2.name){
							this.condition.splice(i,1);
							count--;
						}
					});					
					this.$set(this.condition,count++,v);
				}
			});
  	},
  	filterItemAll(index){
			var item=this.category[index].items;
			item.filter((v,key)=>{
				v.active=true;
				this.condition.filter((v2,i)=>{
					if(v.name==v2.name){
						this.condition.splice(i,1);
						count--;
					}
				});					
				this.$set(this.condition,count++,v);
			});		
  	},
  	showTog(){
  		if(this.showStatus == '更多'){
				this.showStatus = '收起';
				this.bankStatus = false;
  		}else{
				this.showStatus = '更多';
				this.bankStatus = true;
  		}
  	},
  	getFilterData(){
  		let params={};
  		params.card_use = 6;
  		params.card_org = 1;
      this.$http({
        method: "post",
        url: "/portal/credit/cardcate",
        data: params
      }).then((res) => {
      	let result = res.data.data;
				this.bankList = result.bank_list;
				this.useList = result.use;
				this.annualfeeList = result.annualfee;
				this.currencyList = result.currency;
				this.levelList = result.level;
				this.orgList = result.org;
        console.log(res.data.data);
      }).catch((err) => {
      });
    },
    getResultData(){
  		let params={};
  		params.id = '5d4d96382e3f40917e927201';
      this.$http({
        method: "post",
        url: "/portal/credit/carddetail",
        data: this.$qs.stringify(params)
      }).then((res) => {
        console.log(222,res.data.data);
      }).catch((err) => {
      });
    },
		handleClick(tab, event) {
      console.log(tab, event);
    }
  },
};
</script>

<style lang="css" scoped>
	.credit_wrapper{
		position: relative;
	}
	.search{
		position:absolute;
		right: 0;
		top: 4px;
		width:200px;
		z-index: 100;
	}
	.search input{
		margin-right: 10px;
	}
	.filter-list{
		padding-top: 10px;
		border-bottom: 1px solid #e4e4e4;
	}
	.filter-list p.title{
		float: left;
		margin-right: 20px;
		color: #999;
	}
	.filter-list a.choosed{
		background: #3a6dbf;
    color: #fff;
    padding: 0 3px 0 3px;
	}
	.filter-list a.all{
		float: left;
		margin-right: 20px;
	}
	.filter-list ul{
		width:895px;
		float: left;
	}
	.filter-list ul li{
		padding: 0 0 10px 0;
		float: left;
		margin-right: 30px;
	}
	.filter-list ul li a{
		
	}
	.showBtn{
		color:#0099ff;
		position: absolute;
		right: 5px;
		top:8px;
		font-size: 16px;
	}
	.filter-list-more{
		height: 42px;
		overflow: hidden;
	}
	.card-total{
		width:100%;
		background: #f6f6f6;
		height: 48px;
		line-height: 48px;
		padding-left: 30px;
	}
	.card-total b{
		color: #ff6000;
		margin:0 3px;
	}
	.result-item{
		padding: 20px 0;
    height: 106px;
    overflow: hidden;
    position: relative;
    border-bottom: solid 1px #eeeeee;
	}
	.result-item img{
		width: 170px;
    height: 106px;
		float:left;
	}
	.result-item ul{
		width: 365px;
		float:left;
	}
	.card-msg{
		width: 303px;
		float:left;
	}
	.result-btn{
		width: 150px;
		float:left;
		text-align: center;
	}
	.result-btn a{
		margin:0 auto;
		display: block;
		width: 100px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    border-radius: 5px;
    background: #fe8007;
    font-size: 16px;
    color: #ffffff;
    margin-top: 20px;
	}
	/*banklist all*/
	.bank-logo1 {
    background-position: -24px -366px!important;
	}
	.choosed .bank-logo1{background-position: -24px -395px!important;}
	.bank-logo2 {
    background-position: -257px -211px!important;
	}
	.choosed .bank-logo2{background-position: -257px -245px!important;}
	.bank-logo3 {
    background-position: -136px -65px!important;
	}
	.choosed .bank-logo3{background-position: -136px -100px!important;}
	.bank-logo4 {
    background-position: -373px -66px!important;
	}
	.choosed .bank-logo4{background-position: -373px -100px!important;}
	.bank-logo5 {
    background-position: -315px -211px!important;
	}
	.choosed .bank-logo5{background-position: -315px -245px!important;}
	.bank-logo6 {
    background-position: -140px -211px!important;
	}
	.choosed .bank-logo6{background-position: -140px -245px!important;}
	.bank-logo7 {
    background-position: -199px -211px!important;
	}
	.choosed .bank-logo7{background-position: -199px -245px!important;}
	.bank-logo8 {
    background-position: -24px -211px!important;
	}
	.choosed .bank-logo8{background-position: -23px -245px!important;}
	.bank-logo9 {
    background-position: -254px -65px!important;
	}
	.choosed .bank-logo9{background-position: -254px -100px!important;}
	.bank-logo10 {
    background-position: -315px -366px!important;
	}
	.choosed .bank-logo10{background-position: -315px -396px!important;}
	.bank-logo11 {
    background-position: -315px -66px!important;
	}
	.choosed .bank-logo11{background-position: -314px -100px!important;}
	.bank-logo12 {
    background-position: -257px -366px!important;
	}
	.choosed .bank-logo12{background-position: -257px -397px!important;}
	.bank-logo13 {
    background-position: -83px -211px!important;
	}
	.choosed .bank-logo13{background-position: -83px -245px!important;}
	.bank-logo14 {
    background-position: -83px -366px!important;
	}
	.choosed .bank-logo14{background-position: -83px -396px!important;}
	.bank-logo15 {
    background-position: -373px -366px!important;
	}
	.choosed .bank-logo15{background-position: -373px -396px!important;}
	.bank-logo16 {
    background-position: -23px -65px!important;
	}
	.choosed .bank-logo16{background-position: -23px -100px!important;}
	.bank-logo17 {
    background-position: -83px -66px!important;
	}
	.choosed .bank-logo17{background-position: -83px -100px!important;}
	.bank-logo18 {
    background-position: -199px -366px!important;
	}
	.choosed .bank-logo18{background-position: -199px -396px!important;}
	.bank-logo19 {
    background-position: -141px -366px!important;
	}
	.choosed .bank-logo19{background-position: -141px -396px!important;}
	.bank-logo20 {
    background-position: -83px -700px!important;
	}
	.choosed .bank-logo20{background-position: -83px -734px!important;}
	.bank-logo21 {
    background-position: -24px -871px!important;
	}
	.choosed .bank-logo21{background-position: -24px -904px!important;}
	.bank-logo22 {
    background-position: -83px -871px!important;
	}
	.choosed .bank-logo22{background-position: -83px -904px!important;}
	.bank-logo23 {
    background-position: -196px -66px!important;
	}
	.choosed .bank-logo23{background-position: -196px -100px!important;}
	.bank-logo24 {
    background-position: -373px -211px!important;
	}
	.choosed .bank-logo24{background-position: -374px -245px!important;}
	
	.filter-list ul li a i{
		display: inline-block;
		width: 16px;
		height: 16px;
		margin:1px 3px 0 0;
		vertical-align: text-top;
		background: url('../../assets/imgs/banklist.png') no-repeat;
	}
	.filter-list ul li a span{

	}
</style>
