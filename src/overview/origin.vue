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
        玉之本源
        <div class="underline"></div>
        <div class="subtitle">Origin of Jade</div>
      </h2>

      <div class="foreword-text">
        <p>
          玉，自古被誉为“石之美者”，承载着中华文化深厚的精神象征。本展区围绕“什么是玉？”这一核心问题，从科学视角出发，揭示玉石的地质本质与矿物特性。您将了解软玉与硬玉的基本分类，认识中国主要玉材——和田玉、岫岩玉、蓝田玉与独山玉的成因、产地与质地特征。
        </p>
        <p>        
          展区亦精选多种玉石及相似矿物（如水晶、蛇纹石、大理石）进行对比，辅以显微镜下的切片展示，帮助观众直观认识玉的结构特征与独特美感。同时，我们将介绍入门级鉴玉知识，包括硬度、韧性、颜色与纹理等关键指标，为观众打开科学鉴玉的大门，厘清玉与其他珠宝的差异。
        </p>
        <p>        
          这一部分，是一次从“看玉”到“识玉”的知识启程。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OverviewOrigin',
  data() {
    return {
      images: [
        require('@/assets/origin_1.jpg'),
        require('@/assets/origin_2.jpg'),
        require('@/assets/origin_3.jpg'),
        require('@/assets/origin_4.jpg'),
        require('@/assets/origin_5.jpg'),
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
