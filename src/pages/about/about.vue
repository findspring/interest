<template>
  <div class="about-us">
    <div class="common-width bg-white about-main">
      <el-tabs v-model="activeName" tab-position="left" style="height: 650px;">
        <el-tab-pane label="公司简介" name="intro">
          <div class="company-intro about-item">
            <h3>公司简介</h3>
            <div class="intro-main">
              <p v-html="companyInfo"></p>
              <p></p>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="联系我们" name="contact">
          <div class="contact-us about-item">
            <h3>联系我们</h3>
            <div class="intro-main">
              <p v-html="contactInfo"></p>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="公司动态" name="trends">
          <div class="company-trends about-item">
            <h3>公司动态</h3>
            <div class="intro-main">
              <ul>
                <li v-for="(item,index) in news" :key="index">
                  <p>{{item.post_title}}</p>
                </li>
              </ul>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="免责声明" name="disclaimer">
          <div class="contact-us about-item">
            <h3>免责声明</h3>
            <div class="intro-main">
              <p v-html="disclaimerInfo"></p>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="市场合作" name="cooperation">
          <div class="contact-us about-item">
            <h3>市场合作</h3>
            <div class="intro-main">
              <p v-html="cooperationInfo"></p>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {

  name: 'about',

  data() {
    return {
      activeName: 'intro',
      companyInfo: '',
      contactInfo: '',
      news: [],
      disclaimerInfo: '',
      cooperationInfo: '',
    };
  },
  watch: {
    $route: {
      handler(val) {
        this.changeTab();
      },
      // deep:true,
      immediate: true
    },
  },
  mounted() {
    this.changeTab();
    this.getAboutUs();
    this.getNews();
    this.getContact();
    this.getdisclaimer();
    this.getcooperation();
  },
  methods: {
    changeTab() {
      if (this.$route.query && this.$route.query.activeName) {
        this.activeName = this.$route.query.activeName;
      }
    },
    getAboutUs() {
      this.$http({
        method: "post",
        url: "/portal/about/index",
      }).then((res) => {
        let result = res.data.data;
        this.companyInfo = result.company_info.post_content;
      }).catch((err) => {});
    },
    getNews() {
      this.$http({
        method: "post",
        url: "/portal/about/news",
      }).then((res) => {
        let result = res.data.data;
        this.news = result.news;
      }).catch((err) => {});
    },
    getContact() {
      this.$http({
        method: "post",
        url: "/portal/about/contact",
      }).then((res) => {
        let result = res.data.data;
        this.contactInfo = result.contact.post_content;
      }).catch((err) => {});
    },
    getdisclaimer() {
      this.$http({
        method: "post",
        url: "/portal/about/disclaimer",
      }).then((res) => {
        let result = res.data.data;
        this.disclaimerInfo = result.disclaimer.post_content;
      }).catch((err) => {});
    },
    getcooperation() {
      this.$http({
        method: "post",
        url: "/portal/about/cooperation",
      }).then((res) => {
        let result = res.data.data;
        this.cooperationInfo = result.cooperation.post_content;
      }).catch((err) => {});
    },
  }
};

</script>
<style lang="css" scoped>
.about-us {
  background: #f3f3f3;
  padding: 20px 0;
}

.about-main {
  border: 1px solid #e4e4e4;
}

.about-item {
  padding: 0px 20px;
}

.about-item h3 {
  font-size: 18px;
  line-height: 48px;
  border-bottom: 2px solid #48cfad;
}

.intro-main {
  margin-top: 10px;
}

.about-item p {
  line-height: 30px;
}

</style>
