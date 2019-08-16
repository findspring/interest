<template>
	<div>
		<div class="common-width">
			<div class="loan-main clearfix">
        <div class="loan-left fl">
          <div class="loan-info">
            <h3>宜信  -  保单贷</h3>
            <div class="loan-msg clearfix">
              <ul>
                <li>
                  <img src="" alt="">
                  <span>无需抵押</span>
                </li>
                <li>
                  <img src="" alt="">
                  <span>上班族 可申请</span>
                </li>
                <li>
                  <img src="" alt="">
                  <span>1天放款</span>
                </li>
              </ul>
              <div class="loan-btn">
                <a href="javascript:;">我想申请</a>
                <p>少于<b>100人</b>申请</p>
              </div>
            </div>            
            <div class="loan-lilv clearfix">
              <p>利率说明：月管理费2.39%+一次性收费3% </p>
            </div>
          </div>
          <div class="loan-knowledge">
            <h4>贷款须知</h4>
            <div class="loan-condition">
              <h5>申请条件</h5>
              <div class="loan-item">
                <p>年龄要求：25-60周岁；</p>
              </div>
              <h5>所需材料</h5>
              <div class="loan-item">
                <p>1.二代身份证</p>
              </div>
            </div>
          </div>
        </div>
        <div class="loan-right fr">
          <a href="javascript:;"><img :src="newsImg01" alt=""></a>
        </div>
      </div>
		</div>
	</div>
</template>

<script>
export default {

  name: 'loanInfo',

  data() {
    return {
      newsImg01:require('../../assets/imgs/loan01.png'),
    };
  },
  mounted(){
		
  },
  methods:{

  }
};
</script>

<style lang="css" scoped>
	.loan-main{
    width: 100%;
    padding: 20px 0;
    min-height: 650px;
  }
  .loan-left{
    width: 750px;
    padding:15px;
    border:1px solid #e4e4e4;
  }
  .loan-info{
  }
  .loan-info h3{
    font-size: 20px;
    line-height: 60px;
    border-bottom: 2px solid #4072d7;
  }
  .loan-msg{}
  .loan-msg ul {
    margin-top: 20px;
    width: 50%;
    float: left;
  }
  .loan-msg ul li{
    width: 33.3%;
    float:left;
  }
  .loan-lilv{
    width:100%;
    border-bottom:1px solid #e4e4e4;
    line-height: 30px;
  }
  .loan-btn{
    float: right;
    width:30%;
    text-align: center;
  }
  .loan-btn a{
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
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .loan-knowledge h4{
    font-size: 16px;
    line-height: 40px;
  }
  .loan-condition{
    padding-left: 20px;
  }
  .loan-condition h5{
    font-size: 14px;
    line-height: 30px;
  }
  .loan-item p{
    line-height: 28px;
    text-indent: 2em;
  }
  .loan-right{
    width: 220px;
  }
</style>
