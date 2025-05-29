<template>
  <div>  <!-- 根元素 -->
    <header class="nav-header">
      <div class="nav-container">
        <div class="nav-left">
          <div class="logo-placeholder">
            <img src="@/assets/logo.png" alt="logo" >
          </div>
          <h1 class="nav-title">玉之始·玉之义</h1>
        </div>
        <el-menu
          class="nav-menu"
          mode="horizontal"
          background-color="#004d40"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
          :default-active="$route.path"
          @select="handleSelect"
        >
          <el-menu-item index="/">首页</el-menu-item>

          <el-submenu index="about" popper-class="custom-submenu-width">
            <template #title>{{ aboutTitle }}</template>
            <el-menu-item index="/about/overview">展览概况</el-menu-item>
            <el-menu-item index="/about/hall">关于展馆</el-menu-item>
            <el-menu-item index="/about/map">展览平面图</el-menu-item>
          </el-submenu>

          <el-submenu index="overview" popper-class="custom-submenu-width">
            <template #title>{{ overviewTitle }}</template>
            <el-menu-item index="/overview/foreword">前言</el-menu-item>
            <el-menu-item index="/overview/origin">玉之本源</el-menu-item>
            <el-menu-item index="/overview/divinity">玉之神性</el-menu-item>
            <el-menu-item index="/overview/power">玉之权道</el-menu-item>
            <el-menu-item index="/overview/rebirth">玉之再生</el-menu-item>
          </el-submenu>

          <el-submenu index="audience" popper-class="custom-submenu-width">
            <template #title>{{ audienceTitle }}</template>
            <el-menu-item index="/audience/notice">参观须知</el-menu-item>
            <el-menu-item index="/audience/register">参观登记</el-menu-item>
            <el-menu-item index="/audience/traffic">交通指引</el-menu-item>
          </el-submenu>

          <el-menu-item index="/contact">联系我们</el-menu-item>
        </el-menu>
      </div>
    </header>

    <!-- 首页内容区 -->
    <div v-if="$route.path === '/'" class="home-page">
      <div class="poster-image">
        <img src="@/assets/main_poster_0529.png" alt="海报图片" />
      </div>
      <h2 class="exhibition-title">玉之始·玉之义——从地质奇石到文化信物</h2>
      <section class="introduction">
        <p>
          玉，作为自然的珍宝和文化的象征，跨越了亿万年地质演变与千年文明沉淀。
        </p>
        <p>
          本次展览由同济大学博物馆携手多家权威机构联合主办，聚焦玉石的科学本源与文化内涵，邀请您开启一场跨越时空的文明对话。本展览在学术主持周征宇教授与邓淑萍教授的深度指导下，由史彦彬、鲁卓然、郜哲锋与刘广阔等策展团队精心策划，融合地质科学、考古文化与当代艺术视角，系统呈现玉石从矿物质构造到精神符号的完整生命史。展览分为“玉之本源”、“玉之神性”、“玉之权道”与“玉之再生”四大篇章，透视玉石在自然与文化交汇中的独特价值。
        </p>
        <p>
          主办单位包括同济大学博物馆、同济大学宝玉石文化研究中心、陕西历史博物馆、良渚博物馆及上海自然博物馆，联合崔磊大师、张红哲大师、赵显志大师与郭石林大师玉雕工作室等协办，为展览注入丰富的学术资源与艺术力量。
        </p>
        <p>
          展览将于2025年7月15日至8月31日在同济大学博物馆隆重展出，诚邀公众走进玉石世界，感受从地壳深处到精神穹苍的文明传奇。
        </p>
      </section>

      <!-- 新增五个方框型选项 -->
      <section class="home-options">
        <router-link to="/" class="option-box">首页</router-link>
        <router-link to="/about/overview" class="option-box">关于展览</router-link>
        <router-link to="/overview/foreword" class="option-box">内容概览</router-link>
        <router-link to="/audience/notice" class="option-box">观众中心</router-link>
        <router-link to="/contact" class="option-box">联系我们</router-link>
      </section>
    </div>

    <!-- 其他路由页面内容 -->
    <router-view v-else />
  </div> <!-- 根元素结束 -->
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      activeIndex: this.getActiveIndex(),
      aboutTitle: '关于展览',
      overviewTitle: '内容概览',
      audienceTitle: '观众中心', 
    };
  },
  watch: {
    $route() {
      this.updateMenuState();
    }
  },
  mounted() {
    this.updateMenuState();
  },
  methods: {
    getActiveIndex() {
      const path = this.$route.path;
      if (path.startsWith('/about')) {
        return 'about';
      }
      if (path.startsWith('/overview')) {
        return 'overview';
      }
      if (path.startsWith('/audience')) {
        return 'audience';
      }
      const validIndexes = ['/', '/contact'];
      return validIndexes.includes(path) ? path : '/';
    },
    handleSelect(index) {
      this.activeIndex = index;
      this.updateMenuState();
    },
    updateMenuState() {
      this.activeIndex = this.getActiveIndex();

      const path = this.$route.path;
      // 关于展览标题切换
      if (path === '/about/overview') {
        this.aboutTitle = '展览概况';
      } else if (path === '/about/hall') {
        this.aboutTitle = '关于展馆';
      } else if (path === '/about/map') {
        this.aboutTitle = '展览平面图';
      } else {
        this.aboutTitle = '关于展览';
      }

      // 内容概览标题切换
      if (path === '/overview/foreword') {
        this.overviewTitle = '前言';
      } else if (path === '/overview/origin') {
        this.overviewTitle = '玉之本源';
      } else if (path === '/overview/divinity') {
        this.overviewTitle = '玉之神性';
      } else if (path === '/overview/power') {
        this.overviewTitle = '玉之权道';
      } else if (path === '/overview/rebirth') {
        this.overviewTitle = '玉之再生';
      } else {
        this.overviewTitle = '内容概览';
      }

      // 观众中心标题切换
      if (path === '/audience/notice') {
        this.audienceTitle = '参观须知';
      } else if (path === '/audience/register') {
        this.audienceTitle = '参观登记';
      } else if (path === '/audience/traffic') {
        this.audienceTitle = '交通指引';
      } else {
        this.audienceTitle = '观众中心';
      }
    }
  }
};
</script>

<style scoped>
.nav-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 120px;
  background-color: #004d40;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.nav-left {
  display: flex;
  align-items: center;
  margin-right: 8px;
}

.logo-placeholder {
  width: 60px;
  height: 60px;
  background-color: transparent; /* 可选：移除背景色 */
  border-radius: 50%;
  margin-right: 12px;
  overflow: hidden; /* 裁切多余图像 */
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-placeholder img {
  width: 100%;
  height: 100%;
  object-fit: contain; /* 保持比例填充 */
}

.nav-title {
  font-size: 22px;
  font-weight: bold;
  color: white;
}

.nav-container {
  width: 95%;
  max-width: 1600px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.nav-menu {
  display: flex;
  align-items: center;
  justify-content: center; /* 居中 */
  height: 100%;
  font-size: 18px;
  background-color: #004d40;
  border-bottom: none;
  padding: 0 24px;
  gap: 24px; /* 控制菜单项之间的间距 */
}

/* 去除底部白线 */
::v-deep .el-menu {
  border-bottom: none !important;
  padding: 12px 20px;
  border-radius: 8px; 
}
::v-deep .el-menu-item,
::v-deep .el-submenu__title,
::v-deep .el-submenu .el-menu-item  {
  font-size: 18px !important;
  min-width: 132px !important;
  text-align: center;
}

/* 首页海报及标题简介样式 */
.home-page {
  margin-top: 140px; /* 避开固定头部 */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 16px 64px;
  background-color: #f9f9f9;
  min-height: calc(100vh - 140px);
}

.poster-image {
  width: 100%;
  max-width: 1200px;
  height: auto;
  margin-bottom: 24px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

.poster-image img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}


.exhibition-title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #004d40;
  text-align: center;
}

.introduction {
  width: 90%;
  max-width: 900px;
  font-size: 16px;
  color: #333;
  line-height: 1.6;
  text-align: justify;
  margin-bottom: 48px;
}

.home-options {
  width: 90%;
  max-width: 900px;
  display: flex;
  justify-content: space-around;
  gap: 20px;
}

.option-box {
  display: block;
  flex: 1 1 0;
  text-align: center;
  padding: 16px 12px;
  background-color: #004d40;
  color: white;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  user-select: none;
  transition: background-color 0.3s;
}

.option-box:hover {
  background-color: #2b7a5a;
}
</style>
