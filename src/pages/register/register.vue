<template>
  <div id="register">
    <div class="common-width clearfix">
      <!-- <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
		    <el-tab-pane label="登录" name="first">登录</el-tab-pane>
		    <el-tab-pane label="注册" name="second">注册</el-tab-pane>
		  </el-tabs> -->
      <div class="login">
      	<div class="login-title flex bd-gray">
      		<h4>注册</h4>
      		<!-- <p>没有账号？<a href="javascript:;" style="color: #4adc19;">立即注册</a></p> -->
      	</div>
        <el-form :model="ruleForm" :rules="rules" label-position="left" ref="ruleForm" label-width="0" class="login-form">
          <el-form-item label="" prop="username">
            <el-input v-model="ruleForm.username" autocomplete="on" clearable placeholder="请输入手机号"></el-input>
          </el-form-item>
          <el-form-item label="" prop="valcode">
            <el-input class="fl code-input" v-model="ruleForm.valcode" autocomplete="on" clearable placeholder="请输入验证码"></el-input>
            <div class="reg-code fr cursor" v-if="codeStatus"  @click="sendCode">发送验证码</div>
            <div class="reg-code fr" v-else>{{time}}s</div> 
          </el-form-item>
          <el-form-item label="" prop="password">
            <el-input type="password" v-model="ruleForm.password" autocomplete="on" placeholder="请输入登录密码"></el-input>
          </el-form-item>
          <div class="box clearfix">
            <span class="fr" @click="goLogin()" style="cursor: pointer;color: #48cfad ;">直接登录</span>
            <span class="fr">已有账号，</span>
            <!-- <div class="fr">
              <el-checkbox v-model="checked" style="color:#a0a0a0;">一周内自动登录</el-checkbox>
            </div> -->
          </div>
          <el-button type="primary" @click="submitForm('ruleForm')" style="width:100%;margin:30px 0;">立即注册</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {

  name: 'register',

  data() {
    return {
      activeName: 'first',
      codeStatus:true,
      time:60,
      ruleForm: {
        username: '',
        password: '',
        valcode:'',
      },
      rules: {
        username: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          // { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
          { pattern: /^1[34578]\d{9}$/, message: '请输入正确的手机号', trigger: 'blur' }
        ],
        valcode: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { min: 6, max: 6, message: '6位数字验证码', trigger: 'blur' },
          { pattern: /^\d{6}$/, message: '6位数字验证码', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
        ]
      },
      checked: false
    };
  },
  methods: {
    sendCode(){
      this.$refs.ruleForm.validateField('username',(err)=>{
        if(err == ''){
          this.codeStatus = false;
          let timer = setInterval(() => {
            if (this.time > 1) {
              this.time--;
            }else{
              this.codeStatus = true;
              this.time = 60;
              clearInterval(timer);
            }
          }, 1000)
          this.$http({
            method: "get",
            url: "/user/verification_code/send?username="+this.ruleForm.username,
          }).then((res) => {
            this.$message({
              message: res.data.msg,
              showClose: true,
              type: 'success'
            });
            console.log(555,res.data.data);
          }).catch((err) => {
            this.$message({
              message: err,
              showClose: true,
              type: 'warning'
            });
          });
        }else{
          this.$message({
            message: '请先输入正确的手机号',
            showClose: true,
            type: 'warning'
          });
        }
      })       
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    goLogin(){
			this.$router.push({name:"login"});
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const self = this;
          //判断复选框是否被勾选 勾选则调用配置cookie方法
          let params = {};
          params.username = this.ruleForm.username;
          params.verification_code = this.ruleForm.valcode;
          params.password = this.ruleForm.password;
          this.$http({
            method: "post",
            url: "/user/public/register",
            data: this.$qs.stringify(params)
          }).then((res) => {
            if(res.data.code == 200){
              this.$message({
                message: res.data.msg,
                showClose: true,
                type: 'success'
              });
              // let creditDatas = res.data.data;
              this.$router.push({ name: 'login'});
            }
          }).catch((err) => {
            this.$message({
              message: err,
              showClose: true,
              type: 'warning'
            });
          });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    // resetForm(formName) {
    //   this.$refs[formName].resetFields();
    // },
    //设置cookie
    setCookie(c_name, c_pwd, exdays) {
      var exdate = new Date(); //获取时间
      exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
      //字符串拼接cookie
      window.document.cookie = "userName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
      window.document.cookie = "password" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
    },
    //读取cookie
    getCookie: function() {
      if (document.cookie.length > 0) {
        var arr = document.cookie.split('; '); //这里显示的格式需要切割一下自己可输出看下
        for (var i = 0; i < arr.length; i++) {
          var arr2 = arr[i].split('='); //再次切割
          //判断查找相对应的值
          if (arr2[0] == 'userName') {
            //  console.log(arr2[1])
            this.ruleForm.username = arr2[1]; //保存到保存数据的地方
          } else if (arr2[0] == 'password') {
            // console.log(arr2[1])
            this.ruleForm.password = arr2[1];
          }
        }
        this.checked = true;
      }
    },
    //清除cookie
    clearCookie: function() {
      this.setCookie("", "", -1); //修改2值都为空，天数为负1天就好了
    }

  }
};

</script>
<style lang="css" scoped>
#register{
  width: 100%;
  padding-top: 80px;
  background:url('../../assets/imgs/loginbg.jpg') no-repeat center top;
	height: 650px;
}
.code-input{
  width: 250px;
}
.reg-code{
  width:86px;
  height: 40px;
  text-align: center;
  color: #666;
  background: #f8f8f8;
  border:1px solid #e4e4e4;
  border-radius: 4px;
}
.login {
  background: #fff;
	border:1px solid #e4e4e4;
  width: 400px;
  height: 450px;
  margin: 15px auto;
  border-radius: 4px;
}
.login .login-title{
	padding: 0 25px;
	line-height: 56px;
}
.login .login-title h4{
	font-size: 20px;
	font-weight: 400;
}
.login-form{
	padding: 30px 25px;
}
</style>
