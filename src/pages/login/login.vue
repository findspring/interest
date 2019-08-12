<template>
  <div id="login">
    <div class="common-width clearfix">
      <div class="login">
      	<div class="login-title flex bd-gray">
      		<h4>登录</h4>
      		<p>没有账号？<a href="javascript:;" style="color: #4adc19;" @click="goRegister()">立即注册</a></p>
      	</div>
        <el-form :model="ruleForm" :rules="rules" label-position="left" ref="ruleForm" label-width="0" class="login-form">
          <el-form-item label="" prop="username">
            <el-input v-model="ruleForm.username" autocomplete="on" clearable placeholder="请输入手机号"></el-input>
          </el-form-item>
          <el-form-item label="" prop="password">
            <el-input type="password" v-model="ruleForm.password" show-password autocomplete="on" placeholder="请输入登录密码"></el-input>
          </el-form-item>
          <div class="box clearfix">
            <span class="fr" @click="clearCookie" style="cursor: pointer;color: #48cfad ;">忘记密码？</span>
            <!-- <div class="fr">
              <el-checkbox v-model="checked" style="color:#a0a0a0;">一周内自动登录</el-checkbox>
            </div> -->
          </div>
          <el-button type="primary" @click="submitForm('ruleForm')" style="width:100%;margin:30px 0;">登录</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {

  name: 'login',

  data() {
    return {
      activeName: 'first',
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
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
    handleClick(tab, event) {
      console.log(tab, event);
    },
    goRegister(){
			this.$router.push({name:"register"});
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const self = this;
          //判断复选框是否被勾选 勾选则调用配置cookie方法
          if (self.checked == true) {
            //传入账号名，密码，和保存天数3个参数
            self.setCookie(self.ruleForm.username, self.ruleForm.password, 7);
          } else {
            console.log("清空Cookie");
            //清空Cookie
            self.clearCookie();
          }
          alert('登录成功!');
          this.$router.push({ name: 'index', params: { user: self.ruleForm.username, pwd: self.ruleForm.password } });
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
#login{
  width: 100%;
  padding-top: 80px;
  background:url('../../assets/imgs/loginbg.jpg') no-repeat center top;
	height: 650px;
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
