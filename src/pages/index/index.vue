<template>
  <div>
  	<v-header></v-header>
    <div class="block">
      <el-carousel height="350px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- <div class="block">
      <span class="demonstration">Click 指示器触发</span>
      <el-carousel trigger="click" height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div> -->
  </div>
</template>
<script>
	import vHeader from "components/header/header";
	export default {
	  name: 'index',
	  data() {
	    return {

	    };
	  },
	  components:{
	  	vHeader
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
</style>
