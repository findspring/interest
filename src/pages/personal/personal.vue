<template>
	<div class="about-us">
		<div class="common-width bg-white about-main">
			<el-tabs  v-model="activeName" tab-position="left" style="height: 650px;">
		    <el-tab-pane label="资料信息" name="intro">
		    	<div class="personal-data about-item">
		    		<h3>资料信息</h3>
		    		<div class="intro-main">
		    			<p><span>手机号：</span>已认证</p>
		    		</div>
		    	</div>
		    </el-tab-pane>
		    <el-tab-pane label="修改密码" name="contact">
					<div class="contact-us about-item">
						<h3>修改密码</h3>
		    		<div class="intro-main">
							<el-form :model="ruleForm" :rules="rules" label-position="left" ref="ruleForm" label-width="100" class="login-form">
			          <el-form-item label="原密码" prop="username">
			            <el-input v-model="ruleForm.username" autocomplete="on" clearable placeholder="请输入原密码"></el-input>
			          </el-form-item>
			          <el-form-item label="新密码" prop="password">
			            <el-input type="password" v-model="ruleForm.password" show-password autocomplete="on" placeholder="请输入新密码"></el-input>
			          </el-form-item>
			          <el-form-item label="重复密码" prop="checkPass">
			            <el-input type="password" v-model="ruleForm.checkPass" show-password autocomplete="on" placeholder="请再次输入新密码"></el-input>
			          </el-form-item>
			          <el-button type="primary" @click="submitForm('ruleForm')" style="width:100%;margin:30px 0;">确认修改</el-button>
			        </el-form>
		    		</div>
					</div>
		    </el-tab-pane>
		  </el-tabs>
		</div>
			
	</div>
</template>

<script>
export default {

  name: 'personal',

  data() {
  	var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
			activeName: 'intro',
			companyInfo:'',
			contactInfo:'',
			news:[],
			ruleForm: {
        username: '',
        password: '',
        checkPass:'',
      },
      rules: {
        username: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass, trigger: 'blur' }
        ]
      },
      checked: false

    };
  },
  watch: {
    $route: {
      handler(val) {
        // this.changeTab();
      },
      // deep:true,
      immediate: true
    },
  },
  mounted(){
  	// this.changeTab();
  	this.getPersonal();
  },
  methods:{
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
		// changeTab(){			
	 //  	if(this.$route.params && this.$route.params.activeName){
	 //  		this.activeName = this.$route.params.activeName;
	 //  	}
		// },
		getPersonal(){
      this.$http({
        method: "post",
        url: "/user/profile/center",
      }).then((res) => {
      	let result = res.data.data;
      	console.log('test',result);
      }).catch((err) => {
      });
		},
		
  }
};
</script>

<style lang="css" scoped>
	.about-us{
		background:#f3f3f3;
		padding: 20px 0;
	}
	.about-main{		
		border:1px solid #e4e4e4;
	}
	.about-item{
		padding: 0px 20px;
	}
	.about-item h3{
		font-size: 18px;
		line-height: 48px;
		border-bottom: 2px solid #48cfad ;
	}
	.about-item p{

	}
	.personal-data{}
	.personal-data p{
		font-size: 16px;
		line-height: 40px;
	}
	.personal-data span{
		margin-right: 10px;
	}
</style>
