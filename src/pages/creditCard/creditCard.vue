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
		    				<div class="filter-list clearfix" :class="{'filter-list-more':bankStatus}" v-if="val.name == '银行'">
			    				<p class="title">{{val.name}}</p>
			    				<a href="javascript:;" class="all" :class="{'choosed':val.item_active}" @click="filterItemAll(val.item_id,index)">不限</a>
			    				<ul>
			    					<li v-for="(item,m) in val.items" :key="m">
			    						<a href="javascript:;" :class="{'choosed':item.active}" @click="filterCard(val.item_id,index,m)">
			    							<i :class="'bank-logo'+item.bank_id"></i>
			    							<span>{{item[val.item_name]}}</span>
			    						</a>
			    					</li>
			    				</ul>	
			    				<div class="showBtn cursor" @click="showTog()">{{showStatus}}</div>  				
			    			</div>
			    			<div class="filter-list clearfix" v-else>
			    				<p class="title">{{val.name}}</p>
			    				<a href="javascript:;" class="all" :class="{'choosed':val.item_active}" @click="filterItemAll(val.item_id,index)">不限</a>
			    				<ul>
			    					<li v-for="(item,n) in val.items" :key="n">
			    						<a href="javascript:;" :class="{'choosed':item.active}" @click="filterCard(val.item_id,index,n)">
			    							<span>{{item[val.item_name]}}</span>
			    						</a>
			    					</li>
			    				</ul>
			    			</div>
		    			</div>		    			
		    		</div>
		    		<!-- result -->
		    		<div class="card-result">
		    			<div class="card-total" v-if="totalNum>0"><p>共找到<b>{{totalNum}}</b>款信用卡</p></div>
		    			<div v-else class="no-card">温馨提示:在现在的筛选条件下，没有找到符合您要求的信用卡</div>
		    			<div class="result-item clearfix" v-for="(item,index) in resultArr" :key="index">
		    				<img :src="'http://www.365qutui.cn' + item.card_img" alt="">
		    				<div class="card-msg">
		    					<p>{{item.card_name}}</p>
		    					<p class="color-yellow">{{item.recommed_mark}}</p>
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
		    						<p><span>年费政策：</span><div class="line-ellipsis01 card-dscription">{{item.card_annualfee_mark}}</div></p>
		    					</li>
		    				</ul>
		    				<div class="result-btn">
		    					<a href="javascript:;" @click="goCreditInfo(item.id)">查看</a>
		    					<p><b class="color-yellow">{{item.applied_nums}}人</b>申请</p>
		    				</div>
		    			</div>
		    			<div class="change-page" v-if="totalNum > 0">
		    				<el-pagination
		    					class="fr"
		    					background
						      @current-change="handleCurrentChange"
						      :current-page.sync="currentPage"
						      :page-size="5"
						      layout="prev, pager, next, jumper"
						      :total="totalNum">
						    </el-pagination>
		    			</div>
		    		</div>
		    	</div>
		    </el-tab-pane>
		    <el-tab-pane label="信用卡优惠" name="second">
		    	<div class="card-discount">
		    		<!-- banner -->
		    		<div class="block">
				      <el-carousel height="350px">
				        <el-carousel-item v-for="(item,index) in indexArr" :key="index">
				        	<a href="javascript:;"  @click="goLink(item.url)">
				          	<img :src="'http://www.365qutui.cn'+item.img_path">
				          </a>
				        </el-carousel-item>
				      </el-carousel>
				    </div>
				    <!-- newsList -->
				    <div class="news-list clearfix">
				    	<!-- left -->
				    	<div class="news-left fl">
				    		<h4>大家都在看的优惠</h4>
					    	<ul class="list-info">
					    		<li class="list-item" v-for="(item,index) in articleList" :key="index" @click="goPath('newsInfo',item.id)">
					    			<a href="javascript:;">
					    				<img :src="'http://www.365qutui.cn' + item.thumbnail" alt="">
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
			condition:{},
			count:0,
			totalNum:0,
			resultArr:[],
			currentPage:1,
			locked:false,
			indexArr:[],
      articleList:[],
      newsImg01:require('../../assets/imgs/loan01.png'),
    };
  },
  watch: {
    $route: {
      handler(val) {
      	if(val.query && val.query.bankId){
      		setTimeout(() => {
      		  this.category[0].item_active = false;
      		  this.category[0].items.forEach((item,index) => {
      		    if(item.bank_id == val.query.bankId){
      		    	item.active = true;
      		    }else{
      		    	item.active = false;
      		    }
      		  })
      		  this.$set(this.condition,'bank_id',+val.query.bankId);
      		  this.getResultData(2,this.condition);
      		  // this.category[0].items[val.query.id].active = true;
      		  // this.$set(this.category[0],item_active,false);
      		}, 300)      		
      		// this.getDetailData(val.query.id);
      	}        
      },
      immediate: true
    },
  },
  mounted(){
		this.getFilterData();
		this.getResultData(4)
		this.getDiscount();
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
  	goCreditInfo(id){
			this.$router.push({path:'creditInfo', query:{ id: id }});
  	},
  	onSubmit(){
  		if(this.searchInfo == ''){
  			this.$message({
          message: '请先输入要搜索信用卡的名称',
          showClose: true,
          type: 'warning'
        });
        return false;
  		}
  		if(this.locked == true){
  			return false
  		}
  		this.getFilterData();
  		this.condition = {};
  		this.locked = true;
			this.activeName = 'first';
			this.getResultData(1,this.searchInfo)
  	},
  	handleCurrentChange(val){
  		console.log('test',val);
			let getParams = JSON.parse(sessionStorage.getItem('params'));
			let pageParams = Object.assign(getParams,{page:val})
			console.log(111,pageParams);
			this.getResultData(3,pageParams);
  	},
  	filterCard(itemName,index,key){
  		this.searchInfo = '';
  		if(this.locked == true){
  			return false
  		}
  		this.locked = true;
			var item=this.category[index].items;
			this.category[index].item_active = false;
			item.filter((v,i)=>{
				if(i==key){
					v.active=true;					
					this.$set(this.condition,itemName,v[this.category[index].item_id]);
					console.log('test',this.condition);
				}else{
					v.active=false;
				}
			});
			this.getResultData(2,this.condition);
  	},
  	filterItemAll(itemName,index){
  		this.searchInfo = '';
  		if(this.locked == true){
  			return false
  		}
  		this.locked = true;
			var item=this.category[index].items;
			this.category[index].item_active = true;
			item.filter((v,key)=>{
				v.active=false;					
				this.$set(this.condition,itemName,0);
			});		
			console.log('222',this.condition);
			this.getResultData(2,this.condition);
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
      	this.category = result.category;
				this.bankList = result.bank_list;
				this.useList = result.use;
				this.annualfeeList = result.annualfee;
				this.currencyList = result.currency;
				this.levelList = result.level;
				this.orgList = result.org;
      }).catch((err) => {
      });
    },
    //信用卡优惠
    getDiscount(){
      this.$http({
        method: "post",
        url: "/portal/credit/youhui",
        // data: this.$qs.stringify(params)
      }).then((res) => {
      	this.indexArr = res.data.data.banners
      	this.articleList = res.data.data.articles;
      }).catch((err) => {
      });
    },
    getResultData(type,nowParam){
  		let params={};
  		if(type == 1){
  			this.currentPage = 1;
				params.card_name = nowParam;
				params.page = 1;
  		}else if(type == 2){ 
  			this.currentPage = 1;
  			Object.keys(nowParam).forEach((item) => {
  			  params[item] = nowParam[item];
  			})
  			params.page = 1;
  		}else if(type == 3){ 
  			params = nowParam;
  		}else{
  			this.currentPage = 1;
  			params = {};
  		}
  		sessionStorage.setItem('params',JSON.stringify(params));
  		// params.id = '5d4d96382e3f40917e927201';
      this.$http({
        method: "post",
        url: "/portal/credit/findcard",
        data: this.$qs.stringify(params)
      }).then((res) => {
      	let result = res.data.data;
      	this.resultArr = result.data;
      	this.totalNum = result.total;
      	this.locked = false;
      }).catch((err) => {
      	this.locked = false;
      });
    },
		handleClick(tab, event) {
      console.log(tab, event);
    }
  },
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
	.no-card{
		width: 100%;
		height: 60px;
		line-height: 60px;
		font-size: 16px;
		padding-left: 20px;
		background: #f8f8f8;
		color:#ff6000;
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
	.news-left ul li a:hover p.p2{
		color:#4978c4;
	}
	.news-left ul li a:hover img{
		transform: scale(1.05);
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
	.change-page{
		padding: 20px;
	}
	.card-result{
		min-height: 350px;
		padding-bottom: 40px;
	}
	.color-yellow{
		color:#ff6000;
	}
	.credit_wrapper{
		position: relative;
	}
	.search{
		position:absolute;
		right: 0;
		top: 4px;
		width:260px;
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
    min-height: 150px;
	}
	.result-item img{
		width: 170px;
    height: 106px;
		float:left;
		margin-right: 10px;
	}
	.card-dscription{
		float: left;
		display: inline-block;
		width: 280px;
	}
	.result-item ul{
		width: 365px;
		float:left;
	}
	.result-item ul li{
		line-height: 28px;
	}
	.result-item ul li span{
		float: left;
		color:#999;
	}
	.card-msg{
		line-height: 30px;
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
    margin-top: 30px;
    margin-bottom: 10px;
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
