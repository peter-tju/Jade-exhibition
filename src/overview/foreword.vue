<template>
  <div class="foreword-container">
    <div class="foreword-photo">
      <div class="carousel">
        <div
          class="carousel-track"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <img
            v-for="(image, index) in images"
            :key="index"
            :src="image"
            class="carousel-image"
            :alt="`轮播图 ${index + 1}`"
          />
        </div>
      </div>
    </div>

    <div class="foreword-content">
      <h2 class="foreword-title">
        前言
        <div class="underline"></div>
        <div class="subtitle">Foreword</div>
      </h2>

      <div class="foreword-text">
        <p>
          当第一缕晨光穿透昆仑山的薄雾，沉睡千万年的玉石在岩层中苏醒，折射出温润的光泽。这些来自地壳深处的矿物结晶，曾与岩浆共舞，与冰川同行，却在人类文明的淬炼中，蜕变为东方最深邃的精神符号。从先民在月光下打磨的第一枚玉斧，到紫禁城中象征无上权力的玉玺；从巫师手中沟通天地的玉琮，到当代青年胸前的个性玉佩，玉石始终在时光长河中演绎着跨越物质与精神的二重奏。
        </p>
        <p>
          本次展览将开启一场独特的文明解码之旅——当我们拂去玉器表面的历史浮尘，会发现它不仅是地质运动的杰作，更是一部镌刻着华夏文明基因的立体典籍。展览以科学为经，文化为纬，在四重维度中重构玉石的完整生命史：它是如何从地质构造的奇观，演变为精神信仰的载体？又是怎样突破神权与王权的桎梏，最终化作每个普通人的情感图腾？
        </p>
        <p>
          <strong>第一幕 造物者的密语</strong><br>
          在展览的起点，我们将跟随地质锤的叩击声重返远古时期。显微镜下的玉石切片如同星云图景，辉石与闪石晶体交织出星辰诞生的轨迹。历经二十亿年构造运动的水火淬炼，形成了和田玉与岫岩玉。和田玉的"毛毡状结构"体现着玉质地的细腻致密，岫岩玉的蛇纹石花纹凝固着古海洋的呼吸韵律。这里没有诗意的想象，只有造山运动的磅礴伟力。溯时光长河而上，顺石缝熔浆而下，每一块温润的玉石，都是大地写给时间的史诗。
        </p>
        <p>
          <strong>第二幕 通天的桥梁</strong><br>
          当先民将玉斧举向苍穹的刹那，玉石便挣脱了物质本身的桎梏，走入了精神的浩瀚世界。红山文化的玉龙盘旋成沟通天地的密码，良渚玉琮的方圆造型凝固着"天圆地方"的宇宙认知。我们特别复原的巫祭场景中，玉璧在篝火中泛着幽光，仿佛能听见三千年前巫祝的吟唱："以玉为凭，神灵降兮。"这些被赋予神性的玉器，实则是人类最初试图理解宇宙的哲学探索。
        </p>
        <p>
          <strong>第三幕 权力的炼金术</strong><br>
          随着王朝的晨钟敲响，玉石在礼制熔炉中淬炼出新的形态。西周"六瑞"制度将玉器化为政治星图，汉代玉玺镌刻着"受命于天"的永恒誓言。展厅中央的明代玉带钩，其雕工之精令观者屏息——这并非装饰艺术，而是用玉石构建的视觉化权力语法。我们特别设计的互动装置将带您穿越时空，体验唐代的玉石文化。在等级森严的玉礼制度中，每个人都能触摸到传统社会精密的秩序体系。
        </p>
        <p>
          <strong>第四幕 灵魂的新生</strong><br>
          当历史的车轮驶入现代，玉石在解构中迎来涅槃重生。2008年北京奥运会奖牌里和田玉的嵌入，谱写了全球化的叙事篇章；天宫二号搭载的玉质徽章飞入高天，书写当代玉石新的神话。在"AI玉纹生成器"前，传统云雷纹与电子像素碰撞出奇异的美感；"玉护符许愿墙"上，您可以在电子屏中刻下心愿，与良渚先民对神灵的祈愿形成跨越时空的和鸣。这些充满张力的对话证明：玉文化的生命力，正在于它永远能成为时代精神的载体。
        </p>
        <p>
          此刻我们站在展厅的时空交汇点，而玉石的故事远未终结。它既是大地馈赠的矿物标本，也是文明演进的活态化石；既是实验室中的分析样本，更是流淌在民族血液中的文化DNA。这场展览不是单向的知识灌输，而是一次邀请：请您用手心感受玉的脉搏，用眼睛阅读玉的记忆，在科学与人文的交相辉映下，重新发现那些藏在玉石纹路里的文明密码。
        </p>
        <p>
          玉石不语，却已回答了人类对永恒的所有追问。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OverviewForeword',
  data() {
    return {
      images: [
        require('@/assets/subposter_1.png'),
        require('@/assets/subposter_2.png'),
        require('@/assets/subposter_3.png'),
        require('@/assets/subposter_4.png'),
      ],
      currentIndex: 0,
      intervalId: null
    };
  },
  mounted() {
    this.startCarousel();
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  },
  methods: {
    startCarousel() {
      this.intervalId = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }, 3000);
    }
  }
};
</script>

<style scoped>
.foreword-container {
  display: flex;
  flex-direction: row; /* 强制左右布局 */
  justify-content: center;
  align-items: flex-start;
  padding-top: 120px; /* 导航栏高度 + 间距 */
  max-width: 1400px;
  margin: 0 auto;
  padding-left: 32px;
  padding-right: 32px;
  gap: 48px;
}

.foreword-photo {
  padding-top: 80px;
  flex: 1 1 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.foreword-photo img {
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  object-fit: cover;
}

.foreword-content {
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.foreword-title {
  font-size: 32px;
  font-weight: bold;
  color: #004d40;
  margin-bottom: 12px;
}

.underline {
  width: 100px;
  height: 3px;
  background-color: #004d40;
  margin-top: 6px;
  margin-bottom: 6px;
  border-radius: 2px;
}

.subtitle {
  font-size: 18px;
  font-weight: 600;
  color: #00796b;
  margin-bottom: 24px;
}

.foreword-text p {
  font-size: 18px;
  line-height: 1.7;
  color: #333;
  margin-bottom: 18px;
  text-align: justify;
}

.carousel {
  width: 100%;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
}

.carousel-track {
  display: flex;
  transition: transform 0.6s ease;
  width: 100%;
}

.carousel-image {
  flex-shrink: 0;
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 12px;
}

/* 取消响应式切换，始终保持左右布局 */
@media (max-width: 768px) {
  .foreword-container {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 24px;
  }

  .foreword-photo,
  .foreword-content {
    flex: 1 1 100%;
  }
}
</style>