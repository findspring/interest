<template>
  <div>
    <!-- <v-header></v-header> -->
    <div class="block">
      <el-carousel height="350px">
        <el-carousel-item v-for="(item,index) in indexArr" :key="index">
          <a href="javascript:;"  @click="goLink(item.url)">
            <img :src="'http://www.fanrenli.com'+item.img_path">
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="index-main bg-gray">
      <div class="credit common-width">
        <h2>信用卡</h2>
        <div class="credit-main">
          <el-row :gutter="10">
            <el-col :span="6">
              <div class="grid-content bg-white bank-list">
                <div class="title">
                  <span>热门发卡银行</span>
                  <a href="javascript:;"  @click="goPath('creditCard')">•••</a>
                </div>
                <ul>
                  <li v-for="(item,index) in bankList" :key="index">
                    <div class="bank-item cursor clearfix" @click="goPath('creditCard',item.bank_id)">
                      <img :src="'http://www.fanrenli.com'+item.bank_logo_small" alt="" class="fl">
                      <p class="fl">{{item.bank_name}}</p>
                      <b class="fr">{{item.creditcard_nums}}
                      <span>款信用卡</span></b>
                    </div>
                  </li>
                </ul>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-white">
                <div class="title">
                  <span>热门信用卡</span>
                </div>
                <div class="credit-info">
                  <el-row :gutter="20">
                    <el-col :span="8" v-for="(val,index) in creditList" :key="index" style="margin-bottom:15px;">
                      <div class="cursor hot-card-item" @click="goPath('creditInfo',val.id)">
                        <img :src="'http://www.fanrenli.com'+val.card_img" alt="">
                        <p class="line-ellipsis01">{{val.card_name}}</p>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-white">
                <div class="title">
                  <span>热点</span>
                </div>
                <div class="hots">
                  <ul>
                    <li v-for="(val,index) in articleList" :key="index" class="line-ellipsis01">
                      <a href="javascript:;" @click="goPath('newsInfo',val.id)">• {{val.post_title}}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="loan common-width">
        <h2>贷款</h2>
        <div class="loan-main">
          <el-row :gutter="10">
            <el-col :span="6">
              <div class="grid-content bg-white cursor">
              	<img :src="loanImg01" alt="" width="100%">
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-white bd-none cursor">
              	<img :src="loanImg02" alt="" width="100%">
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-white">
                <div class="title">
                  <span>贷款攻略</span>
                </div>
                <div class="hots">
                  <ul>
                    <li v-for="(val,index) in loanList" :key="index" class="line-ellipsis01">
                      <a href="javascript:;"  @click="goPath('newsInfo',val.id)">• {{val.post_title}}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <!-- 合作机构 -->
    <div class="cooperate">
      <div class="common-width">
        <h2>合作机构</h2>
        <div class="cooperate-main">
          <div class="cooperate-item cursor cooperate-item01"></div>
          <div class="cooperate-item cursor cooperate-item02"></div>
          <div class="cooperate-item cursor cooperate-item03"></div>
          <div class="cooperate-item cursor cooperate-item04"></div>
          <div class="cooperate-item cursor cooperate-item05"></div>
          <div class="cooperate-item cursor cooperate-item06"></div>
          <div class="cooperate-item cursor cooperate-item07"></div>
          <div class="cooperate-item cursor cooperate-item08"></div>
          <div class="cooperate-item cursor cooperate-item09"></div>
          <div class="cooperate-item cursor cooperate-item10"></div>
          <div class="cooperate-item cursor cooperate-item11"></div>
          <div class="cooperate-item cursor cooperate-item12"></div>
          <div class="cooperate-item cursor cooperate-item13"></div>
          <div class="cooperate-item cursor cooperate-item14"></div>
          <div class="cooperate-item cursor cooperate-item15"></div>
          <div class="cooperate-item cursor cooperate-item16"></div>
          <div class="cooperate-item cursor cooperate-item17"></div>
          <div class="cooperate-item cursor cooperate-item18"></div>
          <div class="cooperate-item cursor cooperate-item19"></div>
          <div class="cooperate-item cursor cooperate-item20"></div>
          <div class="cooperate-item cursor cooperate-item21"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'index',
  data() {
    return {
      indexArr:[],
    	loanImg01:require('../../assets/imgs/loan01.png'),
    	loanImg02:require('../../assets/imgs/loan02.jpg'),
      bankList:[],
      creditList:[],
      articleList:[],
      loanList:[],
    };
  },
  mounted(){
    this.getIndexData();
  },
  methods:{
    goLink(url){
      window.open(url);
    },
    goPath(pathName,id){
      let paramId = {id: id};
      if(pathName == 'creditCard'){
        paramId = {bankId:id};
      }
      const {href} = this.$router.resolve({
        path: pathName,
        query: paramId
      })
      window.open(href, '_blank')
      // this.$router.push({path:pathName, query:{ id: id }});
    },
    getIndexData(){
      this.$http({
        method: "post",
        url: "/portal/index/index",
        data: this.$qs.stringify({
        })
      }).then((res) => {
        let creditDatas = res.data.data;
        this.indexArr = creditDatas.banners;
        this.bankList = creditDatas.bank_list;
        this.creditList = creditDatas.credit_list;
        this.articleList = creditDatas.credit_articles;
        this.loanList = creditDatas.loan_articles;
      }).catch((err) => {
      });
    },
  },
};

</script>
<style lang="css" scoped>
.index-main {
  padding-bottom: 20px;
}
.hot-card-item:hover img{
  transform: scale(1.05);
}
.hot-card-item:hover{
  color:#4978c4;
}
.index-main h2,
.cooperate h2 {
  font-size: 24px;
  font-weight: 400;
  padding: 18px 0 10px 0;
  line-height: 1;
}

.index-main .title {
	display: flex;
	justify-content: space-between;
  height: 44px;
  line-height: 44px;
  padding: 0 15px 0 15px;
  font-size: 18px;
  border-bottom: 1px #f0f0f0 solid;
}

.bank-list ul{
  padding: 0 15px;
}

.bank-list ul li{
  line-height: 36px;
  font-size: 14px;
}
.bank-list ul li img{
  margin: 9px 8px 0 0;
}

.bank-list ul li p{
  width: 85px;
}
.bank-list ul li b{
  margin:0 5px 0 10px;
}
.bank-list ul li span{
  font-weight: 400;
  color: #999;
}

.credit-info{
  padding: 15px;
  line-height: 30px;
  font-size: 14px;
  text-align: center;
}
.credit-info img{
  width: 140px;
  height: 80px;
}
.hots{
  padding: 8px 15px;
  line-height: 30px;
}
.hots ul li{
  width: 200px;
}
/*.el-row {
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}*/

.grid-content {
  border-top: 3px #48cfad solid;
  min-height: 327px;
}

.loan .grid-content {
  border-color: #5d9cec;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.bank-item img{
  width: 18px;
  height: 18px;
}
.cooperate-main {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  padding-bottom: 15px;
}

.cooperate-item {
  border: 1px solid #eee;
  margin: 5px 0 15px 0;
  width: 128px;
  height: 48px;
  background: url('../../assets/imgs/banks.png') no-repeat;
}
.cooperate-item:hover{
  -webkit-transform: scale(1.1);
     -moz-transform: scale(1.1);
      -ms-transform: scale(1.1);
       -o-transform: scale(1.1);
          transform: scale(1.1);
}

.cooperate-item01 {
  background-position: -9px -2px;
}

.cooperate-item02 {
  background-position: -162px -2px;
}

.cooperate-item03 {
  background-position: -318px -2px;
}

.cooperate-item04 {
  background-position: -473px -2px;
}

.cooperate-item05 {
  background-position: -625px -2px;
}

.cooperate-item06 {
  background-position: -780px -2px;
}

.cooperate-item07 {
  background-position: -935px -2px;
}

.cooperate-item08 {
  background-position: -9px -70px;
}

.cooperate-item09 {
  background-position: -162px -70px;
}

.cooperate-item10 {
  background-position: -318px -70px;
}

.cooperate-item11 {
  background-position: -473px -70px;
}

.cooperate-item12 {
  background-position: -625px -70px;
}

.cooperate-item13 {
  background-position: -780px -70px;
}

.cooperate-item14 {
  background-position: -935px -70px;
}

.cooperate-item15 {
  background-position: -9px -142px;
}

.cooperate-item16 {
  background-position: -162px -142px;
}

.cooperate-item17 {
  background-position: -318px -142px;
}

.cooperate-item18 {
  background-position: -473px -142px;
}

.cooperate-item19 {
  background-position: -625px -142px;
}

.cooperate-item20 {
  background-position: -780px -142px;
}

.cooperate-item21 {
  background-position: -935px -142px;
}

</style>
