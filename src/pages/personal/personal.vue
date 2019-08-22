<template>
	<div class="about-us">
		<div class="common-width bg-white about-main">
			<el-tabs  v-model="activeName" tab-position="left" style="height: 650px;">
		    <el-tab-pane label="资料信息" name="intro">
		    	<div class="personal-data about-item">
		    		<h3>资料信息</h3>
		    		<div class="intro-main">
		    			<p><span>手机号：</span>{{mobile}}</p>
		    		</div>
		    	</div>
		    </el-tab-pane>
		    <el-tab-pane label="修改密码" name="contact">
					<div class="contact-us about-item">
						<h3>修改密码</h3>
		    		<div class="intro-main">
							<el-form :model="ruleForm" :rules="rules" label-position="left" ref="ruleForm" label-width="100" class="login-form">
			          <el-form-item label="原密码" prop="oldPass">
			            <el-input type="password" v-model="ruleForm.oldPass" show-password autocomplete="on" clearable placeholder="请输入原密码"></el-input>
			          </el-form-item>
			          <el-form-item label="新密码" prop="password">
			            <el-input type="password" v-model="ruleForm.password" show-password autocomplete="on" placeholder="请输入新密码"></el-input>
			          </el-form-item>
			          <el-form-item label="重复密码" prop="checkPass">
			            <el-input type="password" v-model="ruleForm.checkPass" show-password autocomplete="on" placeholder="请再次输入新密码"></el-input>
			          </el-form-item>
			          <el-button type="primary" @click="resetPwd('ruleForm')" style="width:100%;margin:30px 0;">确认修改</el-button>
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
        oldPass: '',
        password: '',
        checkPass:'',
      },
      rules: {
        oldPass: [
          { required: true, message: '请输入原密码', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入新密码', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
        ],
        checkPass: [
        	{ required: true, message: '请再次输入新密码', trigger: 'blur' },
          { validator: validatePass, trigger: 'blur' }
        ]
      },
      mobile: '',

    };
  },
  mounted(){
  	this.getPersonal();
  },
  methods:{
  	resetPwd(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
        	let params = {};
          params.old_password = this.ruleForm.oldPass;
          params.password = this.ruleForm.password;
          params.confirm_password = this.ruleForm.checkPass;
          this.$http({
		        method: "post",
		        url: "/user/profile/changepassword",
		        data: this.$qs.stringify(params)
		      }).then((res) => {
		      	this.$message({
	            message: '密码修改成功',
	            showClose: true,
	            type: 'success'
	          });
	          this.$refs[formName].resetFields();
		      }).catch((err) => {
		      });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
		getPersonal(){
      this.$http({
        method: "get",
        url: "/user/profile/userinfo",
      }).then((res) => {
      	let result = res.data.data;
      	this.mobile = result.mobile;
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
