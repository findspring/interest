<template>
	<div>
		<div class="block">
      <el-carousel height="350px">
        <el-carousel-item v-for="(item,index) in indexArr" :key="index">
          <img v-bind:src="item">
          <!-- <h3 class="small">{{ item }}</h3> -->
        </el-carousel-item>
      </el-carousel>
    </div>
	</div>
</template>

<script>
export default {

  name: 'noCardPay',

  data() {
    return {
			indexArr:[
        require('../../assets/imgs/index1.jpeg'),
        require('../../assets/imgs/index2.jpeg'),
      ],
    };
  },
};
</script>

<style lang="css" scoped>
</style>
