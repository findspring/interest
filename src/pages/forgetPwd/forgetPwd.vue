<template>
	<div id="forget">
		<div class="common-width">
			<div class="forget-pwd">
				<div class="login-title bd-gray">
      		<h4>忘记密码</h4>
      	</div>
      	<el-form :model="ruleForm" :rules="rules" label-position="left" ref="ruleForm" label-width="100" class="login-form">
          <el-form-item label="" prop="username">
            <el-input v-model="ruleForm.username" autocomplete="on" clearable placeholder="请输入手机号"></el-input>
          </el-form-item>
          <el-form-item label="" prop="valcode">
            <el-input class="fl code-input" v-model="ruleForm.valcode" autocomplete="on" clearable placeholder="请输入验证码"></el-input>
            <div class="reg-code fr cursor" v-if="codeStatus"  @click="sendCode">发送验证码</div>
            <div class="reg-code fr" v-else>{{time}}s</div> 
          </el-form-item>
          <el-form-item label="" prop="password">
            <el-input type="password" v-model="ruleForm.password" show-password autocomplete="on" placeholder="请输入新密码"></el-input>
          </el-form-item>
          </el-form-item>
          <div class="fr" style="cursor: pointer;color: #48cfad ;" @click="goLogin()">重新登录</div>
          <el-button type="primary" @click="submitForm('ruleForm')" style="width:100%;margin:30px 0;">确认修改</el-button>
        </el-form>
			</div>
		</div>
	</div>
</template>

<script>
export default {

  name: 'forgetPwd',

  data() {
    return {
    	codeStatus:true,
      time:60,
    	ruleForm: {
        username: '',
        password: ''
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
  methods:{
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
  	submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let params = {};
          params.username = this.ruleForm.username;
          params.verification_code = this.ruleForm.valcode;
          params.password = this.ruleForm.password;
          this.$http({
            method: "post",
            url: "/user/public/passwordreset",
            data: this.$qs.stringify(params)
          }).then((res) => {
            if(res.data.code == 200){
               // let creditDatas = res.data.data;
              this.$message({
                message: '密码重置成功,请重新登录',
                showClose: true,
                type: 'success'
              });
              this.$router.push({ name: 'login'});
            }             
          }).catch((err) => {
          });
          // const self = this;
          // //判断复选框是否被勾选 勾选则调用配置cookie方法
          // if (self.checked == true) {
          //   //传入账号名，密码，和保存天数3个参数
          //   self.setCookie(self.ruleForm.username, self.ruleForm.password, 7);
          // } else {
          //   console.log("清空Cookie");
          //   //清空Cookie
          //   self.clearCookie();
          // }
          // alert('登录成功!');          
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
		// changeTab(){			
	 //  	if(this.$route.params && this.$route.params.activeName){
	 //  		this.activeName = this.$route.params.activeName;
	 //  	}
		// },
		goLogin(){
			this.$router.push({name:'login'});
      // this.$http({
      //   method: "post",
      //   url: "/user/profile/center",
      // }).then((res) => {
      // 	let result = res.data.data;
      // 	console.log('test',result);
      // }).catch((err) => {
      // });
		},
		
  }
};
</script>

<style lang="css" scoped>
#forget{
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
.login-title{
	padding: 0 25px;
	line-height: 56px;
}
.forget-pwd{
	background: #fff;
	border:1px solid #e4e4e4;
  width: 400px;
  height: 450px;
  margin: 15px auto;
  border-radius: 4px;
}
.forget-pwd h4{
	font-size: 20px;
	font-weight: 400;
}
.login-form{
	padding: 30px 25px;
}
</style>
