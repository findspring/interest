<template>
  <div>
    <!-- <v-header></v-header> -->
    <div class="block">
      <el-carousel height="350px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="index-main bg-gray">
      <div class="credit common-width">
        <h2>信用卡</h2>
        <div class="credit-main">
          <el-row :gutter="10">
            <el-col :span="6">
              <div class="grid-content bg-white">
                <div class="title">
                  <span>热门发卡银行</span>
                  <a href="javascript:;">•••</a>
                </div>
                <ul>
                  <li>
                    <div class="bank-item">
                      <img src="" alt="">
                      <p>中信银行</p>
                      <b>335</b>
                      <span>款信用卡</span>
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
                    <el-col :span="8">
                      <div class="">
                        <img src="" alt="">
                        <p></p>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="">222</div>
                    </el-col>
                    <el-col :span="8">
                      <div class="">333</div>
                    </el-col>
                  </el-row>
                </div>
                <div class="credit-news">
                  <ul>
                    <li>
                      <a href="javascript:;">• 【包商】包商银行 精英计划</a>
                    </li>
                  </ul>
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
                    <li>
                      <a href="javascript:;">• 申请信用卡总被拒怎么办？银</a>
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
              <div class="grid-content bg-white">
              	<img :src="loanImg01" alt="" width="100%">
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-white bd-none">
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
                    <li>
                      <a href="javascript:;">• 网贷50万，逾期8个月也不</a>
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
// import vHeader from "components/header/header";
export default {
  name: 'index',
  data() {
    return {
    	loanImg01:require('../../assets/imgs/loan01.jpg'),
    	loanImg02:require('../../assets/imgs/loan02.jpg'),
    };
  },
  components: {
    // vHeader
  }
};

</script>
<style lang="css" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 1;
  line-height: 350px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.index-main {
  padding-bottom: 20px;
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

/*.el-row {
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}*/

.grid-content {
  border-top: 3px #48cfad solid;
  min-height: 236px;
}

.loan .grid-content {
  border-color: #5d9cec;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.bank-item {
  display: flex;
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
