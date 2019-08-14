<template>
</template>

<script>
export default {

  name: 'creditInfo',

  data() {
    return {

    };
  },
  mounted(){
		this.getDetailData();
  },
  methods:{
		getDetailData(){
  		let params={};
  		params.id = '5d4d96382e3f40917e927201';
      this.$http({
        method: "post",
        url: "/portal/credit/carddetail",
        data: this.$qs.stringify(params)
      }).then((res) => {
        console.log(222,res.data.data);
      }).catch((err) => {
      });
    },
  },
};
</script>

<style lang="css" scoped>
</style>
